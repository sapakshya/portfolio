# 🚀 Portfolio React

A modern, personal portfolio website built with **React 19**, **TypeScript**, and **Vite 7**. Features client-side routing, a dynamic blog section with API integration, and automatic dark/light theme support.

---

## ✨ Features

- ⚡ **Lightning-fast** — Powered by Vite for instant HMR and optimized builds
- 🎨 **Dark & Light Mode** — Automatic theme switching via `prefers-color-scheme`
- 🧭 **Client-Side Routing** — Seamless navigation with React Router DOM v7
- 📝 **Blog Integration** — Dynamic blog page fetching posts from a REST API
- 📱 **Responsive Layout** — Adapts to all screen sizes (min-width: 320px)
- 🔒 **Type-Safe** — Full TypeScript support across the codebase

---

## 🛠️ Tech Stack

| Technology                                                     | Purpose            |
| -------------------------------------------------------------- | ------------------ |
| [React 19](https://react.dev/)                                 | UI Library         |
| [TypeScript 5.9](https://www.typescriptlang.org/)              | Type Safety        |
| [Vite 7](https://vite.dev/)                                    | Build Tool & Dev Server |
| [React Router DOM 7](https://reactrouter.com/)                 | Client-Side Routing |
| [ESLint](https://eslint.org/)                                  | Code Linting       |

---

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── vite.svg                # Favicon
├── src/
│   ├── assets/                 # Static assets (images, SVGs)
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Site footer
│   ├── home/
│   │   └── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── blog/
│   │   └── page.tsx            # Blog page (API-powered)
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── App.tsx                 # Root component & routing
│   ├── App.css                 # App-level styles
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles & theme
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript base config
├── tsconfig.app.json           # App-specific TS config
├── tsconfig.node.json          # Node-specific TS config
├── eslint.config.js            # ESLint configuration
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/portfolio-react.git
cd portfolio-react

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server with HMR
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Build for Production

```bash
# Type-check and build
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 📄 Pages

| Route      | Component | Description                                       |
| ---------- | --------- | ------------------------------------------------- |
| `/`        | `Home`    | Landing page with hero section                    |
| `/about`   | `About`   | Personal information and background               |
| `/blog`    | `Blog`    | Dynamic blog posts fetched from a REST API        |
| `/contact` | `Contact` | Contact information and form                      |

---

## 🔌 Blog API

The Blog page fetches posts from an external API endpoint:

```
GET http://localhost:3000/api/post
```

**Expected Response:**

```json
{
  "message": "Posts fetched successfully",
  "data": [
    {
      "id": 1,
      "title": "Post Title",
      "content": "Post content...",
      "authorName": "Author",
      "authorId": 1,
      "createdAt": "2026-01-01T00:00:00.000Z"
    }
  ]
}
```

> **Note:** Make sure the API server is running on `localhost:3000` for blog posts to load.

---

## 🧩 Available Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start development server with hot reload     |
| `npm run build`     | Type-check & build for production            |
| `npm run preview`   | Preview the production build locally         |
| `npm run lint`      | Lint source files with ESLint                |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is private and not licensed for public distribution.

---

<p align="center">
  Built with ❤️ using React + TypeScript + Vite
</p>
