const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const root = __dirname;
const dataDir = path.join(root, 'data');
const inquiryFile = path.join(dataDir, 'inquiries.json');
const eventFile = path.join(dataDir, 'events.json');
const settingsFile = path.join(dataDir, 'settings.json');
const port = process.env.PORT || 3000;
const adminKey = process.env.ADMIN_KEY || 'admin123';
const mimeTypes = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };

fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(inquiryFile)) fs.writeFileSync(inquiryFile, '[]');
if (!fs.existsSync(eventFile)) fs.writeFileSync(eventFile, '[]');
if (!fs.existsSync(settingsFile)) fs.writeFileSync(settingsFile, JSON.stringify({ festName: 'PulseFest 2K26', branch: 'Electronics & Communication Engineering', college: 'SKUCET', location: 'Anantapur, Andhra Pradesh', helpline: '+91 90598 37656', email: 'pulsefest.ece@gmail.com', heroTitle: 'Where ideas go live.', heroIntro: 'Two days of sharp minds, strange prototypes, fearless competition, and the kind of energy that stays with you long after the lights go down.' }, null, 2));

function sendJson(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.end(JSON.stringify(payload));
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; if (body.length > 100000) req.destroy(); });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function isAdmin(req) { return req.headers['x-admin-key'] === adminKey; }

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === 'OPTIONS') { res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' }); return res.end(); }

  if (req.method === 'GET' && requestUrl.pathname === '/api/events') return sendJson(res, 200, JSON.parse(fs.readFileSync(eventFile, 'utf8')));
  if (req.method === 'GET' && requestUrl.pathname === '/api/settings') return sendJson(res, 200, JSON.parse(fs.readFileSync(settingsFile, 'utf8')));
  if (req.method === 'GET' && requestUrl.pathname === '/api/inquiries') {
    if (!isAdmin(req)) return sendJson(res, 401, { error: 'Admin access required.' });
    return sendJson(res, 200, JSON.parse(fs.readFileSync(inquiryFile, 'utf8')).reverse());
  }
  if (req.method === 'PATCH' && requestUrl.pathname.startsWith('/api/events/')) {
    if (!isAdmin(req)) return sendJson(res, 401, { error: 'Admin access required.' });
    try {
      const id = requestUrl.pathname.split('/').pop();
      const payload = JSON.parse(await collectBody(req));
      const events = JSON.parse(fs.readFileSync(eventFile, 'utf8'));
      const event = events.find(item => item.id === id);
      if (!event) return sendJson(res, 404, { error: 'Event not found.' });
      Object.assign(event, { title: String(payload.title || event.title).trim(), type: String(payload.type || event.type).trim(), kicker: String(payload.kicker || event.kicker || '').trim(), prize: String(payload.prize || event.prize || '').trim(), day: String(payload.day || event.day).trim(), blurb: String(payload.blurb || event.blurb || '').trim(), image: String(payload.image || event.image || '').trim(), visible: payload.visible !== false });
      fs.writeFileSync(eventFile, JSON.stringify(events, null, 2));
      return sendJson(res, 200, event);
    } catch { return sendJson(res, 400, { error: 'Invalid event update.' }); }
  }

  if (req.method === 'PATCH' && requestUrl.pathname === '/api/settings') {
    if (!isAdmin(req)) return sendJson(res, 401, { error: 'Admin access required.' });
    try {
      const current = JSON.parse(fs.readFileSync(settingsFile, 'utf8'));
      const payload = JSON.parse(await collectBody(req));
      const allowed = ['festName', 'branch', 'college', 'location', 'helpline', 'email', 'heroTitle', 'heroIntro'];
      allowed.forEach(key => { if (payload[key] !== undefined) current[key] = String(payload[key]).trim(); });
      fs.writeFileSync(settingsFile, JSON.stringify(current, null, 2));
      return sendJson(res, 200, current);
    } catch { return sendJson(res, 400, { error: 'Invalid settings update.' }); }
  }

  if (req.method === 'POST' && requestUrl.pathname === '/api/inquiries') {
    try {
      const payload = JSON.parse(await collectBody(req));
      if (!payload.name || !payload.email || !payload.message) return sendJson(res, 400, { error: 'Name, email and message are required.' });
      const inquiries = JSON.parse(fs.readFileSync(inquiryFile, 'utf8'));
      inquiries.push({ id: Date.now(), name: String(payload.name).trim(), email: String(payload.email).trim(), subject: String(payload.subject || '').trim(), message: String(payload.message).trim(), createdAt: new Date().toISOString() });
      fs.writeFileSync(inquiryFile, JSON.stringify(inquiries, null, 2));
      return sendJson(res, 201, { message: 'Your inquiry has been received.' });
    } catch { return sendJson(res, 400, { error: 'Please send valid form data.' }); }
  }

  const requested = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
  const safePath = path.normalize(path.join(root, requested));
  if (!safePath.startsWith(root)) return sendJson(res, 403, { error: 'Forbidden' });
  fs.readFile(safePath, (error, content) => {
    if (error) return sendJson(res, 404, { error: 'Not found' });
    res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(safePath)] || 'application/octet-stream' });
    res.end(content);
  });
});

server.on('error', error => { if (error.code === 'EADDRINUSE') console.error(`Port ${port} is already in use. Stop the existing server or use PORT=3001.`); else console.error(error); process.exitCode = 1; });
server.listen(port, () => console.log(`PulseFest is live at http://localhost:${port}`));
