document.documentElement.dataset.theme = 'dark';
const loginPanel = document.querySelector('#login-panel');
const dashboard = document.querySelector('#dashboard');
const statusText = document.querySelector('#admin-status');
let adminKey = sessionStorage.getItem('pulsefest-admin-key') || '';

async function api(path, options = {}) {
  const response = await fetch(path, { ...options, headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey, ...(options.headers || {}) } });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Request failed.');
  return data;
}

function settingsForm(settings) {
  return `<section><div class="admin-section-title"><h3>Website settings</h3><span>Changes publish live</span></div><form id="settings-form" class="settings-form">
    <label>Festival name<input name="festName" value="${settings.festName || ''}"></label><label>Branch<input name="branch" value="${settings.branch || ''}"></label>
    <label>College<input name="college" value="${settings.college || ''}"></label><label>Location<input name="location" value="${settings.location || ''}"></label>
    <label>Helpline<input name="helpline" value="${settings.helpline || ''}"></label><label>Email<input name="email" value="${settings.email || ''}"></label>
    <label>Hero title<input name="heroTitle" value="${settings.heroTitle || ''}"></label><label>Hero introduction<textarea name="heroIntro">${settings.heroIntro || ''}</textarea></label>
    <button class="button button-primary" type="submit">Publish website settings ↗</button><p id="settings-status" class="form-status"></p>
  </form></section>`;
}

function eventEditor(event) {
  return `<article class="admin-editor"><div class="admin-event"><span><b>${event.title}</b><small>${event.type} / ${event.day}</small></span><input type="checkbox" data-event-id="${event.id}" ${event.visible !== false ? 'checked' : ''}></div><form class="event-edit-form" data-edit-id="${event.id}"><div class="admin-editor-grid"><label>Title<input name="title" value="${event.title || ''}"></label><label>Category<select name="type"><option ${event.type === 'technical' ? 'selected' : ''}>technical</option><option ${event.type === 'non-technical' ? 'selected' : ''}>non-technical</option><option ${event.type === 'spot' ? 'selected' : ''}>spot</option></select></label><label>Label<input name="kicker" value="${event.kicker || ''}"></label><label>Prize<input name="prize" value="${event.prize || ''}"></label><label>Schedule<input name="day" value="${event.day || ''}"></label><label>Image URL<input name="image" value="${event.image || ''}"></label><label>Description<textarea name="blurb">${event.blurb || ''}</textarea></label></div><button class="button button-primary" type="submit">Save event ↗</button><span class="form-status"></span></form></article>`;
}

async function loadDashboard() {
  const [events, inquiries, settings] = await Promise.all([api('/api/events'), api('/api/inquiries'), api('/api/settings')]);
  document.querySelector('#inquiry-count').textContent = inquiries.length;
  document.querySelector('#visible-count').textContent = events.filter(event => event.visible !== false).length;
  document.querySelector('#total-count').textContent = events.length;
  const columns = document.querySelector('.admin-columns');
  document.querySelector('.settings-form')?.closest('section')?.remove();
  columns.insertAdjacentHTML('beforebegin', settingsForm(settings));
  document.querySelector('#admin-events').innerHTML = events.map(eventEditor).join('');
  document.querySelector('#admin-inquiries').innerHTML = inquiries.length ? inquiries.map(item => `<article class="admin-inquiry"><div><b>${item.name}</b><a href="mailto:${item.email}">${item.email}</a><time>${new Date(item.createdAt).toLocaleString()}</time></div><strong>${item.subject || 'General inquiry'}</strong><p>${item.message}</p></article>`).join('') : '<p class="empty-state">No inquiries yet.</p>';
  document.querySelector('#settings-form').addEventListener('submit', async event => { event.preventDefault(); const status = document.querySelector('#settings-status'); try { await api('/api/settings', { method: 'PATCH', body: JSON.stringify(Object.fromEntries(new FormData(event.target))) }); status.textContent = 'Published live.'; status.className = 'form-status success'; } catch (error) { status.textContent = error.message; status.className = 'form-status error'; } });
  document.querySelectorAll('[data-event-id]').forEach(input => input.addEventListener('change', async () => { input.disabled = true; try { await api(`/api/events/${input.dataset.eventId}`, { method: 'PATCH', body: JSON.stringify({ visible: input.checked }) }); await loadDashboard(); } catch (error) { input.checked = !input.checked; statusText.textContent = error.message; } }));
  document.querySelectorAll('.event-edit-form').forEach(form => form.addEventListener('submit', async event => { event.preventDefault(); const status = form.querySelector('.form-status'); try { await api(`/api/events/${form.dataset.editId}`, { method: 'PATCH', body: JSON.stringify(Object.fromEntries(new FormData(form))) }); status.textContent = 'Saved live.'; status.className = 'form-status success'; await loadDashboard(); } catch (error) { status.textContent = error.message; status.className = 'form-status error'; } }));
}

async function openDashboard() { try { await loadDashboard(); loginPanel.hidden = true; dashboard.hidden = false; } catch (error) { statusText.textContent = error.message; statusText.className = 'form-status error'; sessionStorage.removeItem('pulsefest-admin-key'); } }
document.querySelector('#admin-login-form').addEventListener('submit', event => { event.preventDefault(); adminKey = document.querySelector('#admin-key').value; sessionStorage.setItem('pulsefest-admin-key', adminKey); openDashboard(); });
document.querySelector('#refresh-dashboard').addEventListener('click', loadDashboard);
if (adminKey) openDashboard();
setInterval(() => { if (!dashboard.hidden) loadDashboard().catch(() => {}); }, 15000);
