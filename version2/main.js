/* ============================================================
   EVINCE 2K26 — STATIC SITE ENGINE
   ------------------------------------------------------------
   ★ GOOGLE FORM LINK: replace FORMS_LINK below with your real
     Google Form URL — EVERY register / CTA button on the site
     points to it automatically.
   ★ WHATSAPP: change WHATSAPP_NUMBER if the helpdesk number
     changes (used by the floating button + WhatsApp links).
   ============================================================ */
const FORMS_LINK      = "https://docs.google.com/forms/d/e/1FAIpQLSf-REPLACE-WITH-YOUR-FORM-ID/viewform";
const WHATSAPP_NUMBER = "919347051097"; // country code + number, no '+'

/* ---------------- STATIC CONTENT DATA ---------------- */
const DATA = {
  site: {
    festName: "EVINCE",
    festYear: "2K26",
    eyebrow: "SKUCET • DEPARTMENT OF ELECTRONICS & COMMUNICATION ENGINEERING",
    subtitle: "ANNUAL TECHNICAL & CULTURAL FEST",
    tagline: '"WHERE INNOVATION MEETS IMAGINATION"',
    festDate: "2026-10-13",
    festDateLabel: "DATE: 13-10-2026",
    marquee: "PAPER PRESENTATION,PROJECT EXPO,CIRCUIT DEBUGGING,ROBO RACE,ELECTROTRIVIA,TREASURE HUNT,MEGA IPL AUCTION,MEME CON,TECH CHARADES"
  },
  stats: [
    { num: "16", label: "EVENTS" },
    { num: "600+", label: "PARTICIPANTS" },
    { num: "₹25,000+", label: "PRIZE POOL" },
    { num: "2 DAYS", label: "FEST DURATION" }
  ],
  benefits: [
    { icon: "🏆", title: "₹25,000+ Prize Pool", desc: "Cash prizes, trophies, medals, shields and goodies across 16 events — from Paper Presentation to Robo Combat." },
    { icon: "📜", title: "Certificates for All", desc: "Every registered participant receives an official EVINCE 2K26 certificate — a powerful boost for your resume." },
    { icon: "💼", title: "Internship Referrals", desc: "Winners get priority internship and placement referrals from our sponsor companies and industry partners." },
    { icon: "🎓", title: "National-Level Exposure", desc: "Compete with the brightest engineering minds from colleges across India — and get judged by an expert jury." },
    { icon: "🍱", title: "Lunch + Welcome Kit", desc: "Your fest pass includes lunch on both days, a welcome kit, badges and goodies — everything covered." },
    { icon: "🎭", title: "2 Days — Tech + Culture", desc: "Day 1: hardware innovations & technical forensics. Day 2: robotics warfare, debates, IPL auction, DJ night & valedictory." }
  ],
  about: {
    heading: "ABOUT EVINCE 2K26",
    eyebrow: "NATIONAL ENGINEERING SYMPOSIUM",
    text: "Organized by the Department of Electronics & Communication Engineering at SKUCET, Anantapur, EVINCE 2K26 brings future engineers together for two days of bold ideas, hands-on challenges, and unforgettable cultural moments."
  },
  events: [
    { name: "Paper Presentation", category: "TECHNICAL", members: "1 - 3 Members", tag: "✦ Unleash revolutionary research and engineering paradigms", desc: "Present your original research, innovative technical insights, and ECE advancements before an esteemed jury.", prize: "₹3,000 + Trophy & Certificates", schedule: "Day 1 - 11:30 AM" },
    { name: "Project Expo", category: "TECHNICAL", members: "2 - 4 Members", tag: "✦ Bring your hardware prototypes and silicon blueprints to life", desc: "Demonstrate live working engineering projects, IoT builds, electronic prototypes, and automated systems.", prize: "₹5,000 + Trophy & Certificates", schedule: "Day 1 - 11:30 AM" },
    { name: "Circuit Debugging", category: "TECHNICAL", members: "1 - 2 Members", tag: "✦ Troubleshoot silicon faults, oscilloscope anomalies, and breadboard bugs", desc: "Test your circuit forensics. Identify hardware faults, rectify flawed breadboards, and trace voltage signals.", prize: "₹2,000 + Trophy", schedule: "Day 2 - 10:00 AM" },
    { name: "Coding Challenge", category: "TECHNICAL", members: "1 Member", tag: "✦ Binary speed, algorithmic dexterity, and embedded logic", desc: "Compete against the clock to solve algorithmic puzzles, data structures, and optimized logic problems.", prize: "₹2,500 + Gold Badge", schedule: "Day 1 - 02:00 PM" },
    { name: "Robo Combat & Race", category: "TECHNICAL", members: "2 - 4 Members", tag: "✦ High-torque speedsters and obstacle line-followers collide", desc: "Race autonomous and wireless bots through obstacle tracks, line-following arenas, and endurance courses.", prize: "₹5,000 + Champions Shield", schedule: "Day 2 - 11:00 AM" },
    { name: "Tech Quiz (ElectroTrivia)", category: "TECHNICAL", members: "2 Members", tag: "✦ Ignite synaptic sparks across silicon and space telemetry", desc: "Rapid-fire quiz testing knowledge in electronics, semiconductors, communication history, AI, and futuristic gadgets.", prize: "₹2,000 + Trophy", schedule: "Day 1 - 02:30 PM" },
    { name: "Communication Systems Challenge", category: "TECHNICAL", members: "2 Members", tag: "✦ Antenna alignment, signal modulation, and telemetry decoding", desc: "Decode encrypted wireless transmissions, calibrate antenna gains, and analyze frequency modulations.", prize: "₹2,500 + Trophy", schedule: "Day 2 - 02:00 PM" },
    { name: "Campus Treasure Hunt", category: "NON-TECHNICAL", members: "3 - 4 Members", tag: "✦ Crack cryptic riddles and explore every corner of SKUCET", desc: "A thrilling adventure where teams decipher cryptic tech clues leading to hidden geo-caches across campus.", prize: "₹2,000 + Medals", schedule: "Day 1 - 03:00 PM" },
    { name: "Mega IPL Auction", category: "NON-TECHNICAL", members: "2 - 3 Members", tag: "✦ Master bidding strategies, purse allocation, and dream team formulation", desc: "Step into the shoes of franchise owners. Manage virtual purse budgets and build your dream cricket squad.", prize: "₹2,000 + Trophy", schedule: "Day 2 - 03:30 PM" },
    { name: "Connections (Picture Link)", category: "NON-TECHNICAL", members: "2 Members", tag: "✦ Link disjoint images to uncover famous movies, songs, and tech trivia", desc: "Connect seemingly unrelated visual puzzle clues to reveal titles, brands, personalities, and pop culture idioms.", prize: "₹1,500", schedule: "Day 1 - 04:30 PM" },
    { name: "Tech Debate (Verbal Clash)", category: "NON-TECHNICAL", members: "1 - 2 Members", tag: "✦ Clash of rhetoric over AI ethics, cybersecurity, and future civilization", desc: "Engage in fiery articulate discourse on contentious modern tech dilemmas and ethical frontiers.", prize: "₹1,500 + Memento", schedule: "Day 2 - 04:30 PM" },
    { name: "Fest Photography", category: "SPOT", members: "1 Member", tag: "✦ Capture the vibrant cyber pulses, emotions, and candid fest moments", desc: "Document the visual spirit of EVINCE 2K26 through your lens and creative framing.", prize: "₹1,000 + Feature on Official Page", schedule: "Both Days - Spot" },
    { name: "Meme Con (Engineering Sarcasm)", category: "SPOT", members: "1 Member", tag: "✦ Transform engineering struggles and lab viva trauma into viral humor", desc: "Design humorous, relatable memes around engineering life, circuit debugging, and college tech lore.", prize: "₹1,000", schedule: "Day 1 - Spot" },
    { name: "Reel / Short Video Craft", category: "SPOT", members: "1 - 2 Members", tag: "✦ Edit cinematic 30-second vertical reels showcasing the fest hype", desc: "Create fast-cut, energetic reels capturing the futuristic ambiance, events, and crowds of EVINCE 2K26.", prize: "₹1,000", schedule: "Day 2 - Spot" },
    { name: "Tech Charades", category: "SPOT", members: "2 Members", tag: "✦ Enact microchips, semiconductors, and algorithms with zero sound", desc: "Classic charades with a technical twist. Act out complex tech terminology without uttering a word.", prize: "₹1,000", schedule: "Day 1 - Spot" },
    { name: "Cyber Mystery Event", category: "SPOT", members: "1 - 2 Members", tag: "✦ Expect the unexpected in an impromptu lightning challenge", desc: "A spontaneous tech & sensory challenge revealed on the spot. Instant registrations and instant prizes!", prize: "Instant Cash Prize + Goodies", schedule: "Day 2 - Spot" }
  ],
  schedule: {
    day1: {
      label: "Day 01", date: "13-10-2026",
      theme: "DAY 1: INAUGURATION & INTELLECT — Hardware Innovations, Inventions & Technical Forensics",
      items: [
        { time: "09:00 AM - 10:00 AM", type: "GENERAL", title: "Registration & Welcome Kit Distribution", desc: "Participant kit collection, badge allocation, and campus orientation.", venue: "Registration Desk / Auditorium Foyer" },
        { time: "10:00 AM - 11:15 AM", type: "CEREMONY", title: "Grand Inauguration Ceremony & Lamp Lighting", desc: "Opening keynote by Dignitaries, HOD address, and unveiling of EVINCE 2K26 theme video.", venue: "Main Auditorium, SKUCET" },
        { time: "11:30 AM - 01:30 PM", type: "TECHNICAL", title: "Paper Presentation (Round 1)", desc: "Research presentations in VLSI, Signal Processing, AI & IoT.", venue: "Seminar Hall A" },
        { time: "11:30 AM - 04:00 PM", type: "TECHNICAL", title: "Project Expo (Hardware Prototype Arena)", desc: "Live prototype showcase evaluated by distinguished jury.", venue: "ECE Hardware Lab / Main Expo Hall" },
        { time: "01:00 PM - 02:00 PM", type: "BREAK", title: "Networking & Lunch Break", desc: "Lunch and informal participant interactions.", venue: "Campus Dining Commons" },
        { time: "02:00 PM - 04:00 PM", type: "TECHNICAL", title: "Coding Challenge (Algorithmic Sprint)", desc: "Fast-paced logic and data structures tournament.", venue: "System Center / Lab 2" },
        { time: "02:30 PM - 04:00 PM", type: "TECHNICAL", title: "Tech Quiz (ElectroTrivia Preliminary)", desc: "Fastest-finger buzzer elimination round.", venue: "Seminar Hall B" },
        { time: "03:00 PM - 05:00 PM", type: "NON-TECHNICAL", title: "Campus Treasure Hunt", desc: "Cryptic outdoor quest linking clues across university landmarks.", venue: "Campus Quadrangle" },
        { time: "05:00 PM - 06:30 PM", type: "CULTURAL", title: "Day 1 Cultural Vibes & Music Showcase", desc: "Acoustic performances and student musical bands.", venue: "Open Air Theatre" }
      ]
    },
    day2: {
      label: "Day 02", date: "14-10-2026",
      theme: "DAY 2: CIRCUITS & COMBAT — Robotics Warfare, Forensics & Grand Valedictory",
      items: [
        { time: "09:00 AM - 10:00 AM", type: "GENERAL", title: "Day 2 Check-in & Spot Event Registrations", desc: "Badge verification and on-spot registrations for spot events.", venue: "Registration Desk" },
        { time: "10:00 AM - 12:00 PM", type: "TECHNICAL", title: "Circuit Debugging Finals", desc: "Hardware forensics — trace faults under timed pressure.", venue: "ECE Hardware Lab" },
        { time: "11:00 AM - 01:00 PM", type: "TECHNICAL", title: "Robo Combat & Race Arena", desc: "Line-followers and combat bots on obstacle chicanes.", venue: "Main Arena / Quadrangle" },
        { time: "01:00 PM - 02:00 PM", type: "BREAK", title: "Lunch & Networking", desc: "Refuel and connect with fellow engineers.", venue: "Campus Dining Commons" },
        { time: "02:00 PM - 03:30 PM", type: "TECHNICAL", title: "Communication Systems Challenge", desc: "Antenna alignment, modulation analysis and telemetry decoding.", venue: "RF & Microwave Lab" },
        { time: "03:30 PM - 05:00 PM", type: "NON-TECHNICAL", title: "Mega IPL Auction", desc: "Franchise bidding war with virtual purses.", venue: "Seminar Hall A" },
        { time: "04:30 PM - 05:30 PM", type: "NON-TECHNICAL", title: "Tech Debate (Verbal Clash) Finals", desc: "Grand finale of the rhetoric championship.", venue: "Seminar Hall B" },
        { time: "05:30 PM - 06:30 PM", type: "CULTURAL", title: "Star Night & DJ Evening", desc: "An electrifying musical night to close the fest.", venue: "Open Air Theatre" },
        { time: "06:30 PM - 07:30 PM", type: "CEREMONY", title: "Valedictory Ceremony & Prize Distribution", desc: "Champions lift EVINCE shields — grand closing ceremony.", venue: "Main Auditorium" }
      ]
    }
  },
  gallery: [
    { img: "assets/img/gallery-1.png", title: "Autonomous Robotics Arena", cat: "ROBOTICS" },
    { img: "assets/img/gallery-2.png", title: "Silicon Prototype Exposition", cat: "TECH EXPO" },
    { img: "assets/img/gallery-3.png", title: "Oscilloscope Waveform Diagnostics", cat: "TECH EXPO" },
    { img: "assets/img/gallery-4.png", title: "Cultural Twilight & Acoustic Night", cat: "CULTURAL" },
    { img: "assets/img/gallery-5.png", title: "Fast-Paced Coding Hackathon", cat: "WORKSHOPS" },
    { img: "assets/img/gallery-6.png", title: "Grand Trophies & Valedictory", cat: "CEREMONY" },
    { img: "assets/img/gallery-7.png", title: "Campus Treasure Hunt Quest", cat: "FUN" },
    { img: "assets/img/gallery-8.png", title: "Mega IPL Auction Thrills", cat: "FUN" }
  ],
  team: [
    { name: "T. Hemanth", role: "CHAIRMAN", phone: "+91 9059837656", focus: "Overall Fest Leadership", img: "assets/img/team-1.png" },
    { name: "G. Vishnu Vardhan", role: "SECRETARY", phone: "+91 6281857808", focus: "Operations & Logistics", img: "assets/img/team-2.png" },
    { name: "B. Sri Chaithanya", role: "TREASURER", phone: "+91 7569212537", focus: "Finance & Accounts", img: "assets/img/team-3.png" }
  ],
  sponsors: {
    title: { name: "[TITLE SPONSOR BRAND NAME]", tag: "TITLE SPONSOR", sub: "Pioneering semiconductor & embedded intelligence solutions.", link: "" },
    presenting: { name: "[PRESENTING PARTNER NAME]", tag: "PRESENTING PARTNER", sub: "National technology & innovation partner.", link: "" },
    gold: [
      { name: "[GOLD SPONSOR TECH 1]", tag: "TECH PARTNER", sub: "Robotics automation & smart sensors manufacturer.", link: "" },
      { name: "[GOLD SPONSOR TECH 2]", tag: "INNOVATION PARTNER", sub: "Cloud computing & IoT infrastructure provider.", link: "" }
    ],
    silver: [
      { name: "[SILVER SPONSOR 1]", tag: "EQUIPMENT PARTNER", sub: "Test & measurement oscilloscope systems.", link: "" },
      { name: "[SILVER SPONSOR 2]", tag: "CIRCUIT PARTNER", sub: "PCB rapid fabrication & prototyping lab.", link: "" },
      { name: "[SILVER SPONSOR 3]", tag: "EDUTECH PARTNER", sub: "Developer training and career mentorship network.", link: "" }
    ],
    associate: [
      { name: "[ASSOCIATE PARTNER 1]", tag: "MEDIA PARTNER", sub: "", link: "" },
      { name: "[ASSOCIATE PARTNER 2]", tag: "BEVERAGE PARTNER", sub: "", link: "" },
      { name: "[ASSOCIATE PARTNER 3]", tag: "MERCHANDISE PARTNER", sub: "", link: "" },
      { name: "[ASSOCIATE PARTNER 4]", tag: "COMMUNITY PARTNER", sub: "", link: "" }
    ]
  },
  faqs: [
    { q: "Who can participate?", a: "EVINCE 2K26 is open to undergraduate and postgraduate students pursuing B.Tech, B.E., M.Tech, MCA, Polytechnic/Diploma, and equivalent degrees from recognized institutions and universities." },
    { q: "Can students from other colleges participate?", a: "Absolutely! EVINCE is a national-level fest. Students from any recognized college or university across India are welcome. Carry your college ID card for verification at the registration desk." },
    { q: "How do I register?", a: "Click the REGISTER NOW button on the home page — it opens our official Google Form. Fill it and you will receive a confirmation with your registration ID within 24 hours. On-spot registration is also available for select events." },
    { q: "Is spot registration available?", a: "Yes — all SPOT category events (Fest Photography, Meme Con, Reel Craft, Tech Charades, Cyber Mystery) support instant on-spot registration at the venue, subject to slots." },
    { q: "What is the registration fee?", a: "The fest pass is ₹200 per participant (includes all events, lunch on both days, and a welcome kit). Spot events are free for pass holders. Payment details are shared after form submission." },
    { q: "What are the prizes?", a: "A total prize pool of ₹25,000+ across 16 events, along with trophies, certificates, medals, shields and goodies. Winners also get priority internship referrals from our sponsor companies." },
    { q: "Is accommodation available?", a: "Yes, limited on-campus dormitory accommodation is available for outstation participants on a first-come-first-served basis at ₹150/night. Mention your requirement in the registration form." },
    { q: "Where is SKUCET located?", a: "Sri Krishnadevaraya University College of Engineering and Technology, NH-44, Anantapur, Andhra Pradesh - 515003. The campus is 5 minutes from Anantapur railway station and APSRTC bus stand." },
    { q: "How can I contact the organizers?", a: "Reach the helpline at +91 9059837656 / +91 6281857808, tap the green WhatsApp button on this page, or email evinceece2k26@gmail.com. Our student desk responds within a few hours." }
  ],
  contact: {
    helpline1: "+91 9059837656",
    helpline2: "+91 6281857808",
    email: "evinceece2k26@gmail.com",
    whatsapp: "+91 9347051097",
    address1: "Department of Electronics & Communication Engineering (ECE)",
    address2: "Sri Krishnadevaraya University College of Engineering and Technology (SKUCET)",
    address3: "Anantapur, Andhra Pradesh - 515003",
    mapsUrl: "https://www.google.com/maps?q=Sri+Krishnadevaraya+University+College+of+Engineering+and+Technology+Anantapur",
    instagram: "https://instagram.com/evince2k26",
    youtube: "https://youtube.com/@evince2k26"
  }
};

/* ---------------- helpers ---------------- */
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const waLink = txt => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(txt || "Hi EVINCE 2K26 team! I have a query about the fest.");

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._x); t._x = setTimeout(() => t.classList.remove("show"), 2600);
}

/* wire every register / form CTA to the Google Form */
function bindFormLinks() {
  ["regBtn1", "formBtn1", "sponsorBtn"].forEach(id => { const el = document.getElementById(id); if (el) el.href = FORMS_LINK; });
  const wa = document.getElementById("waFab"); if (wa) wa.href = waLink();
  const wb = document.getElementById("waBtn"); if (wb) wb.href = waLink();
  const mb = document.getElementById("mailBtn"); if (mb) mb.href = "mailto:" + DATA.contact.email;
}

/* ---------------- NAVBAR ---------------- */
const NAV = ["HOME", "WHY JOIN", "ABOUT", "EVENTS", "SCHEDULE", "SPONSORS", "ORGANIZERS", "FAQ", "LOCATION", "CONTACT"];
const NAV_IDS = { "home": "home", "why join": "whyjoin", "about": "about", "events": "events", "schedule": "schedule", "sponsors": "sponsors", "organizers": "team", "faq": "faq", "location": "location", "contact": "contact" };
function renderNav() {
  document.getElementById("navLinks").innerHTML =
    NAV.map(n => `<li><a href="#${NAV_IDS[n.toLowerCase()]}" data-sec="${NAV_IDS[n.toLowerCase()]}">${n}</a></li>`).join("") +
    `<li><a class="nav-cta" href="${FORMS_LINK}" target="_blank">REGISTER NOW</a></li>`;
  const ham = document.getElementById("hamburger");
  ham.onclick = () => { document.getElementById("navLinks").classList.toggle("open"); document.body.classList.toggle("nav-open"); };
  document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open"); document.body.classList.remove("nav-open");
  }));
}

/* ---------------- HERO ---------------- */
function renderHero() {
  const s = DATA.site;
  document.getElementById("heroEyebrow").textContent = s.eyebrow;
  document.getElementById("heroTitle").innerHTML = `${esc(s.festName)}<span class="hero-year">${esc(s.festYear)}</span>`;
  document.getElementById("heroSub").textContent = s.subtitle;
  document.getElementById("cdDate").textContent = s.festDateLabel;
  typeTagline(s.tagline);
  const items = s.marquee.split(",").filter(Boolean).map(m => `<span><i>◆</i>${esc(m.trim())}</span>`).join("");
  document.getElementById("marqueeTrack").innerHTML = items + items;
}
let typeTimer;
function typeTagline(text) {
  const el = document.getElementById("heroTag");
  clearInterval(typeTimer); el.innerHTML = '<span class="cursor">&nbsp;</span>';
  let i = 0;
  typeTimer = setInterval(() => {
    i++;
    el.innerHTML = esc(text.slice(0, i)) + '<span class="cursor">&nbsp;</span>';
    if (i >= text.length) clearInterval(typeTimer);
  }, 55);
}

/* ---------------- COUNTDOWN ---------------- */
function initCountdown() {
  const target = new Date(DATA.site.festDate + "T09:00:00").getTime();
  const boxes = { d: document.getElementById("cdD"), h: document.getElementById("cdH"), m: document.getElementById("cdM"), s: document.getElementById("cdS") };
  function tick() {
    let diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 864e5); diff -= d * 864e5;
    const h = Math.floor(diff / 36e5); diff -= h * 36e5;
    const m = Math.floor(diff / 6e4); diff -= m * 6e4;
    const s = Math.floor(diff / 1e3);
    boxes.d.textContent = String(d).padStart(2, "0");
    boxes.h.textContent = String(h).padStart(2, "0");
    boxes.m.textContent = String(m).padStart(2, "0");
    boxes.s.textContent = String(s).padStart(2, "0");
  }
  tick(); setInterval(tick, 1000);
}

/* ---------------- WHY JOIN / BENEFITS ---------------- */
function renderBenefits() {
  document.getElementById("benefitsGrid").innerHTML = DATA.benefits.map((b, i) => `
    <div class="benefit-card reveal" data-d="${i % 3}">
      <div class="benefit-icon">${esc(b.icon)}</div>
      <h4>${esc(b.title)}</h4>
      <p>${esc(b.desc)}</p>
    </div>`).join("");
  document.getElementById("whyStats").innerHTML = DATA.stats.map(s =>
    `<div class="stat-card"><div class="stat-num">${esc(s.num)}</div><div class="stat-lbl">${esc(s.label)}</div></div>`).join("");
}

/* ---------------- ABOUT / PILLARS ---------------- */
function renderAbout() {
  const a = DATA.about;
  document.getElementById("aboutEyebrow").textContent = a.eyebrow;
  document.getElementById("aboutHeading").textContent = a.heading;
  document.getElementById("aboutText").textContent = a.text;
}

/* ---------------- SHOWCASE CAROUSEL (auto + manual) ---------------- */
let carX = 0, carPause = 0, carDrag = null;
function initCarousel() {
  const vp = document.getElementById("carViewport"), track = document.getElementById("carTrack");
  const card = g => `
    <div class="car-card" onclick="openLightbox(${DATA.gallery.indexOf(g)})">
      <img src="${esc(g.img)}" alt="${esc(g.title)}" loading="lazy" draggable="false">
      <div class="car-cap"><span>${esc(g.cat)}</span><h5>${esc(g.title)}</h5></div>
    </div>`;
  const items = DATA.gallery.map(card).join("");
  track.innerHTML = items + items; // duplicated for seamless loop
  const half = () => track.scrollWidth / 2;

  function frame() {
    if (!carDrag && Date.now() > carPause) {
      carX += 0.6; // auto-scroll speed (px per frame)
      if (carX >= half()) carX -= half();
    }
    track.style.transform = `translateX(${-carX}px)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  const step = 340;
  document.getElementById("carPrev").onclick = () => { carX = Math.max(0, carX - step); carPause = Date.now() + 2600; };
  document.getElementById("carNext").onclick = () => { carX += step; carPause = Date.now() + 2600; };

  /* manual drag */
  vp.addEventListener("pointerdown", e => { carDrag = { x: e.clientX, carX }; track.classList.add("dragging"); vp.setPointerCapture(e.pointerId); });
  vp.addEventListener("pointermove", e => { if (!carDrag) return; carX = carDrag.carX - (e.clientX - carDrag.x); });
  const endDrag = () => { if (!carDrag) return; carDrag = null; track.classList.remove("dragging"); carPause = Date.now() + 2600; };
  vp.addEventListener("pointerup", endDrag);
  vp.addEventListener("pointercancel", endDrag);
  vp.addEventListener("mouseenter", () => carPause = Date.now() + 4000);
}

/* ---------------- EVENTS ---------------- */
let evFilter = "ALL", evQuery = "";
function renderEvents() {
  const cats = ["ALL", "TECHNICAL", "NON-TECHNICAL", "SPOT"];
  document.getElementById("evCounts").innerHTML =
    `<div class="stat-card"><div class="stat-num">${DATA.events.length}</div><div class="stat-lbl">ALL EVENTS</div></div>
     <div class="stat-card"><div class="stat-num">${DATA.events.filter(e => e.category === "TECHNICAL").length}</div><div class="stat-lbl">TECHNICAL</div></div>
     <div class="stat-card"><div class="stat-num">${DATA.events.filter(e => e.category === "NON-TECHNICAL").length}</div><div class="stat-lbl">NON-TECHNICAL</div></div>
     <div class="stat-card"><div class="stat-num">${DATA.events.filter(e => e.category === "SPOT").length}</div><div class="stat-lbl">SPOT EVENTS</div></div>`;
  document.getElementById("evFilters").innerHTML = cats.map(c =>
    `<button class="chip ${c === evFilter ? "active" : ""}" data-cat="${c}">${c === "ALL" ? "ALL EVENTS" : c}</button>`).join("");
  document.querySelectorAll("#evFilters .chip").forEach(b => b.onclick = () => { evFilter = b.dataset.cat; renderEvents(); });
  const list = DATA.events.filter(e => {
    const okCat = evFilter === "ALL" || e.category === evFilter;
    const q = evQuery.toLowerCase();
    const okQ = !q || (e.name + " " + e.tag + " " + e.desc + " " + e.category).toLowerCase().includes(q);
    return okCat && okQ;
  });
  document.getElementById("eventsGrid").innerHTML = list.length ? list.map(e => `
    <div class="event-card reveal" data-d="${DATA.events.indexOf(e) % 3}">
      <span class="ev-cat ${e.category}">${esc(e.category)}</span>
      <h4>${esc(e.name)}</h4>
      <div class="ev-members">${esc(e.members)}</div>
      <p class="ev-tag">${esc(e.tag)}</p>
      <div class="ev-meta"><span><b>Prize</b> — ${esc(e.prize)}</span><span><b>Schedule</b> — ${esc(e.schedule)}</span></div>
      <div class="ev-actions">
        <button class="btn btn-ghost" onclick="openEventModal(${DATA.events.indexOf(e)})">DETAILS</button>
        <a class="btn btn-primary" href="${FORMS_LINK}" target="_blank">REGISTER</a>
      </div>
    </div>`).join("") : `<div class="empty-msg">— NO EVENTS MATCH YOUR SCAN —</div>`;
  observeReveals();
}
window.openEventModal = function (i) {
  const e = DATA.events[i];
  document.getElementById("modalBody").innerHTML = `
    <button class="modal-close" onclick="closeEventModal()">✕</button>
    <span class="ev-cat ${e.category}">${esc(e.category)}</span>
    <h3 style="margin-top:14px">${esc(e.name)}</h3>
    <p class="ev-tag">${esc(e.tag)}</p>
    <p style="color:var(--muted)">${esc(e.desc)}</p>
    <div class="m-meta">
      <div><b>Team</b><span>${esc(e.members)}</span></div>
      <div><b>Prize</b><span>${esc(e.prize)}</span></div>
      <div><b>Schedule</b><span>${esc(e.schedule)}</span></div>
    </div>
    <a class="btn btn-primary" style="width:100%;justify-content:center" href="${FORMS_LINK}" target="_blank">REGISTER NOW</a>`;
  document.getElementById("eventModal").classList.add("open");
};
window.closeEventModal = () => document.getElementById("eventModal").classList.remove("open");

/* ---------------- SCHEDULE ---------------- */
let activeDay = "day1";
function renderSchedule() {
  const d = DATA.schedule;
  document.getElementById("dayTabs").innerHTML = Object.keys(d).map(k =>
    `<button class="day-tab ${k === activeDay ? "active" : ""}" data-day="${k}">${esc(d[k].label)} — ${esc(d[k].date)}</button>`).join("");
  document.querySelectorAll(".day-tab").forEach(b => b.onclick = () => { activeDay = b.dataset.day; renderSchedule(); });
  const day = d[activeDay];
  document.getElementById("dayTheme").textContent = day.theme;
  document.getElementById("timeline").innerHTML = day.items.map(it => `
    <div class="tl-item reveal">
      <span class="tl-type">${esc(it.type)}</span>
      <div class="tl-time">${esc(it.time)}</div>
      <h4>${esc(it.title)}</h4>
      <p>${esc(it.desc)}</p>
      <span class="tl-venue">⌖ ${esc(it.venue)}</span>
    </div>`).join("");
  observeReveals();
}

/* ---------------- GALLERY ---------------- */
let galFilter = "ALL";
function renderGallery() {
  const cats = ["ALL", ...new Set(DATA.gallery.map(g => g.cat))];
  document.getElementById("galFilters").innerHTML = cats.map(c =>
    `<button class="chip ${c === galFilter ? "active" : ""}" data-cat="${c}">${esc(c)}</button>`).join("");
  document.querySelectorAll("#galFilters .chip").forEach(b => b.onclick = () => { galFilter = b.dataset.cat; renderGallery(); });
  const list = DATA.gallery.filter(g => galFilter === "ALL" || g.cat === galFilter);
  document.getElementById("galGrid").innerHTML = list.map((g, i) => `
    <div class="gal-item reveal" data-d="${i % 3}" onclick="openLightbox(${DATA.gallery.indexOf(g)})">
      <img src="${esc(g.img)}" alt="${esc(g.title)}" loading="lazy">
      <div class="gal-cap"><span>${esc(g.cat)}</span><h5>${esc(g.title)}</h5></div>
    </div>`).join("");
  observeReveals();
}
window.openLightbox = i => {
  const g = DATA.gallery[i];
  document.getElementById("lbImg").src = g.img;
  document.getElementById("lbCap").textContent = g.title;
  document.getElementById("lightbox").classList.add("open");
};

/* ---------------- ORGANIZERS / TEAM ---------------- */
function renderTeam() {
  document.getElementById("teamGrid").innerHTML = DATA.team.map((t, i) => `
    <div class="team-card reveal" data-d="${i % 3}">
      <img src="${esc(t.img)}" alt="${esc(t.name)}">
      <div class="team-body">
        <div class="team-role">${esc(t.role)}</div>
        <h4>${esc(t.name)}</h4>
        <p>${esc(t.focus)}</p>
        <a class="team-phone" href="tel:${esc(t.phone.replace(/\s/g, ""))}">☏ ${esc(t.phone)}</a>
      </div>
    </div>`).join("");
}

/* ---------------- SPONSORS ---------------- */
function renderSponsors() {
  const sp = DATA.sponsors;
  const card = (s, cls = "") => `<div class="sp-card reveal ${cls}">
      <div class="sp-tag">${esc(s.tag)}</div><h5>${esc(s.name)}</h5>
      ${s.sub ? `<p>${esc(s.sub)}</p>` : ""}
      ${s.link ? `<a href="${esc(s.link)}" target="_blank">${esc(s.link)}</a>` : ""}
    </div>`;
  document.getElementById("spTitle").innerHTML = card(sp.title, "sp-title") + card(sp.presenting);
  document.getElementById("spGold").innerHTML = sp.gold.map(s => card(s)).join("");
  document.getElementById("spSilver").innerHTML = sp.silver.map(s => card(s)).join("");
  document.getElementById("spAssociate").innerHTML = sp.associate.map(s => card(s)).join("");
}

/* ---------------- FAQ ---------------- */
function renderFaqs() {
  document.getElementById("faqList").innerHTML = DATA.faqs.map((f, i) => `
    <div class="faq-item reveal">
      <button class="faq-q"><span><span class="num">0${i + 1}</span>${esc(f.q)}</span><span class="arrow">▾</span></button>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </div>`).join("");
  document.querySelectorAll(".faq-q").forEach(q => q.onclick = () => {
    const item = q.parentElement, wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach(x => x.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
}

/* ---------------- LOCATION ---------------- */
function renderLocation() {
  const c = DATA.contact;
  document.getElementById("mapAddress").textContent = `${c.address1}, ${c.address2}, ${c.address3}.`;
  document.getElementById("mapDir").href = c.mapsUrl;
}

/* ---------------- CONTACT / FOOTER ---------------- */
function renderContact() {
  const c = DATA.contact;
  document.getElementById("contactInfo").innerHTML = `
    <div class="c-row"><div class="c-icon">☏</div><div><h5>Helpline</h5><p><a href="tel:${esc(c.helpline1.replace(/\s/g, ""))}">${esc(c.helpline1)}</a><br><a href="tel:${esc(c.helpline2.replace(/\s/g, ""))}">${esc(c.helpline2)}</a></p></div></div>
    <div class="c-row"><div class="c-icon">✉</div><div><h5>Email Address</h5><p><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p></div></div>
    <div class="c-row"><div class="c-icon">➤</div><div><h5>Official ECE Desk</h5><p>${esc(c.address1)}<br>${esc(c.address2)}<br>${esc(c.address3)}<br><a href="${esc(c.mapsUrl)}" target="_blank" style="color:var(--lime)">GET DIRECTIONS →</a></p></div></div>
    <div class="c-row"><div class="c-icon">✆</div><div><h5>WhatsApp Helpdesk</h5><p><a href="${waLink()}" target="_blank">${esc(c.whatsapp)}</a> — Tap the green button (bottom-left) anytime.</p></div></div>`;
  document.getElementById("socials").innerHTML = `
    <a href="${esc(c.instagram)}" target="_blank" title="Instagram">IG</a>
    <a href="${esc(c.youtube)}" target="_blank" title="YouTube">YT</a>
    <a href="mailto:${esc(c.email)}" title="Email">✉</a>
    <a href="${waLink()}" target="_blank" title="WhatsApp">✆</a>`;
  document.getElementById("footDept").textContent = DATA.site.eyebrow;
  document.getElementById("footTag").textContent = DATA.site.tagline;
  document.getElementById("footAddress").innerHTML = `${esc(c.address2)}, NH-44, Anantapur, Andhra Pradesh - 515003.`;
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------------- ANIMATIONS ---------------- */
function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => revealObs.observe(el));
}
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); revealObs.unobserve(en.target); } });
}, { threshold: 0.12 });

/* particles */
function initParticles() {
  const cv = document.getElementById("particles"), ctx = cv.getContext("2d");
  let W, H, pts = [];
  function resize() {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    pts = Array.from({ length: Math.min(90, W / 16) }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 1.8 + .4
    }));
  }
  resize(); addEventListener("resize", resize);
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
      ctx.fillStyle = "rgba(0,229,255,.5)"; ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = dx * dx + dy * dy;
      if (d < 130 * 130) {
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(124,77,255,${(1 - d / 16900) * .28})`; ctx.stroke();
      }
    }
    requestAnimationFrame(loop);
  })();
}

/* scroll spy + navbar + toTop */
function initScroll() {
  const nav = document.getElementById("navbar"), toTop = document.getElementById("toTop");
  const secs = [...document.querySelectorAll("section[id], header[id]")];
  addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", scrollY > 40);
    toTop.classList.toggle("show", scrollY > 600);
    let cur = "";
    secs.forEach(s => { if (scrollY >= s.offsetTop - 220) cur = s.id; });
    document.querySelectorAll(".nav-links a[data-sec]").forEach(a =>
      a.classList.toggle("active", a.dataset.sec === cur));
  }, { passive: true });
  toTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
  const glow = document.getElementById("cursorGlow");
  addEventListener("mousemove", e => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });
}

/* ---------------- BOOT ---------------- */
window.addEventListener("DOMContentLoaded", () => {
  renderNav(); bindFormLinks(); renderHero(); initCountdown(); renderBenefits(); renderAbout();
  initCarousel(); renderEvents(); renderSchedule(); renderGallery(); renderTeam();
  renderSponsors(); renderFaqs(); renderLocation(); renderContact();
  document.getElementById("evSearch").addEventListener("input", e => { evQuery = e.target.value; renderEvents(); });
  document.getElementById("lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") e.target.classList.remove("open"); });
  document.getElementById("eventModal").addEventListener("click", e => { if (e.target.id === "eventModal") e.target.classList.remove("open"); });
  document.querySelectorAll("section .sec-head, .about-split").forEach(el => el.classList.add("reveal"));
  initParticles(); initScroll(); observeReveals();
  setTimeout(() => document.getElementById("preloader").classList.add("done"), 900);
});
