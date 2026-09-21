# PulseFest 2K26

A complete vanilla HTML, CSS and JavaScript festival website with a small Node.js backend for inquiry submissions.

## Run locally

```bash
npm start
```

Open http://localhost:3000. 

Inquiry submissions are saved to `data/inquiries.json`. Replace the sample content, dates, contacts and image URLs in `index.html` and `script.js` with your real fest information before publishing.

## Admin control room

Open http://localhost:3000/admin.html. The development admin key is `admin123`.

The dashboard shows live inquiry submissions, event totals, global website settings, and complete event editing. Public content refreshes from the server, and the dashboard polls for updates every 15 seconds. Set a stronger production key with the `ADMIN_KEY` environment variable before deployment.
