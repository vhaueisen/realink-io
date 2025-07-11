# 🔗 Realink.io

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with SvelteKit](https://img.shields.io/badge/built%20with-SvelteKit-orange?logo=svelte)](https://kit.svelte.dev)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/bundler-Vite-646CFF?logo=vite\&logoColor=white)](https://vitejs.dev)

**realink.io** is a modern, fast, and scalable institutional website built with **SvelteKit**.
It powers dynamic quote forms, product pages, and marketing content for multiple interactive experiences created by Realink.

---

## ✨ Features

* ⚡️ **Fast, static-ready frontend** powered by Vite + SvelteKit
* 💼 **Quote request system** with Google Gmail integration
* 📊 **Modular content system** for projects, products, and case studies
* 🔒 **Rate limiting & spam protection** via `rate-limiter-flexible`
* 📄 **Markdown-based** content structure (ideal for blog-style and product detail pages)
* 📬 **Gmail OAuth integration** via Google APIs for backend mail handling

---

## 📁 Project Structure

```
src/
├── lib/
│   ├── Components/        # Reusable UI components (QuoteForm, Navbar, etc.)
│   ├── Data/              # Local data loaders (form logic, database calls)
│   ├── models/            # TypeScript models for products, links, projects
│   └── server/gmail/      # Gmail integration (OAuth, mailcomposer)
│
├── routes/                # SvelteKit routes: /product, /quote, /privacy-policy, etc.
│   └── quote/             # Includes +page.server.ts for handling form submissions
│
├── static/                # Public assets
└── app.html               # Custom app shell
```

---

## 🛠️ Stack

| Area              | Tech                                       |
| ----------------- | ------------------------------------------ |
| ⚙️ Framework      | [SvelteKit](https://kit.svelte.dev)        |
| 💅 UI             | Svelte components    |
| 📨 Email Sending  | `gmail.js` + `mailcomposer` + Google OAuth |
| 📦 Dev Build Tool | [Vite](https://vitejs.dev)                 |
| 🔐 Security       | `rate-limiter-flexible`                    |

---

## ⚙️ Getting Started

Clone the project:

```bash
git clone https://github.com/vhaueisen/realink-io.git
cd realink-io
```

Install dependencies:

```bash
npm install
```

Run in dev mode:

```bash
npm run dev
```

Open [`http://localhost:5173`](http://localhost:5173)

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

Deploy with any Node-compatible platform (supports Vercel, Fly.io, custom VPS, etc.).

---

## 🔐 Gmail API Setup

To enable email sending via quote form:

1. Create credentials in the Google Cloud Console (OAuth 2.0 client).
2. Add the following to your `.env`:

```env
GMAIL_CLIENT_ID=xxx
GMAIL_CLIENT_SECRET=xxx
GMAIL_REFRESH_TOKEN=xxx
GMAIL_REDIRECT_URI=xxx
GMAIL_SENDER_EMAIL=your@email.com
```

3. Configure `src/lib/server/gmail/gmail.ts` to use the credentials above.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more info.