<div align="center">

# ⚡ Yusuf Tunga — 3D Interactive Developer Portfolio

An ultra-modern, high-performance **3D Developer Portfolio** featuring real-time WebGL particle simulations, interactive torus knots with mouse parallax and scroll dynamics, terminal scanline aesthetics, and clean modular React 19 architecture.

[![License: MIT](https://img.shields.io/badge/License-MIT-00ff88.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-00d4ff.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-white.svg?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

[🚀 Live Demo](https://yusuftunga1.github.io/3d-portfolio/) · [✨ Features](#-features) · [🚀 Quick Start](#-quick-start) · [🎨 Customization](#-customization) · [📜 License](#-license)

</div>

---

## ✨ Features

- 🌌 **Real-Time 3D WebGL Scene**:
  - 3,000+ interactive particle field with smooth multi-color gradients.
  - Double wireframe Torus Knot geometry with responsive rotation.
  - Mouse-position parallax tracking and depth-based scroll camera animation.
- 💻 **Cyberpunk & Terminal Aesthetics**:
  - Subtle scanline overlay effect and glowing neon text highlights.
  - Interactive typewriter effect in the hero header.
  - JetBrains Mono typography for authentic developer vibes.
- 📊 **Animated Skill Matrix**:
  - IntersectionObserver-powered progressive skill bars with color tags.
- 🚀 **Curated Projects Showcase**:
  - Interactive cards with status indicators (`production`, `open-source`, `beta`).
  - Technology stack tags and hover glow animations.
- 📬 **Interactive Contact Form**:
  - Fast responsive form handling with direct submission feedback.
- ⚡ **Zero Bloat & Blazing Fast**:
  - Powered by Vite 8 and React 19 with instantaneous HMR and sub-second build times.
- 🔒 **Safe & Clean Open-Source Setup**:
  - Zero hardcoded secrets, clean `.gitignore`, standard MIT open-source license.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) |
| **3D & WebGL Engine** | [Three.js](https://threejs.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Variables |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Icons & Typography** | Google Fonts (*JetBrains Mono*, *Inter*) |

---

## 🚀 Quick Start

### Prerequisites
Make sure you have **Node.js** (v18+ recommended) and **npm** or **pnpm** installed.

### 1. Clone the repository
```bash
git clone https://github.com/yusuftunga1/3d-portfolio.git
cd 3d-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
Production assets will be generated in the `dist/` directory ready for deployment on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## 🎨 Customization

You can easily adapt this portfolio with your own information:

1. **Edit Personal Info & Projects**: Open [`src/App.tsx`](src/App.tsx) and customize `SKILLS`, `PROJECTS`, and navigation links.
2. **Tune 3D Parameters**: Open [`src/ThreeScene.tsx`](src/ThreeScene.tsx) to adjust particle counts, colors, speeds, or 3D geometry.
3. **Change Colors & Theme**: Modify color variables in [`src/index.css`](src/index.css) under `@theme`.

---

## 📂 Project Structure

```
├── .vscode/             # VS Code launch & debugging settings
├── src/
│   ├── App.tsx          # Main Portfolio application component
│   ├── ThreeScene.tsx   # Three.js 3D WebGL scene & animations
│   ├── index.css        # Tailwind CSS & custom design system tokens
│   ├── main.tsx         # React root entry point
│   └── vite-env.d.ts    # Vite TypeScript declarations
├── index.html           # HTML5 entry with SEO & OpenGraph tags
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite bundler config with Tailwind plugin
├── LICENSE              # MIT Open Source License
└── README.md            # Project documentation
```

---

## 🤝 Contributing & Community

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/yusuftunga1/3d-portfolio/issues) if you have any questions or ideas.

If you find this project helpful or inspiring, please give it a ⭐️ **Star** on GitHub!

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Crafted with 💚 by [**Yusuf Tunga**](https://github.com/yusuftunga1)

</div>
