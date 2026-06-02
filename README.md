# Avengers Stark-Tech Dossier Portal

An immersive, high-fidelity Stark-Tech cinematic database portal featuring a declassified 16-character Avengers roster, tactical power grids, and interactive holographic interface components.

---

### 🌐 Live Deployment
**🔗 Live Site URL:** [https://Krishnapatil2006.github.io/avengers/](https://Krishnapatil2006.github.io/avengers/)

---

## 🚀 Key Features

*   **S.H.I.E.L.D. Mainframe Boot Sequence**: Requires user interaction (`ACTIVATE_INTERFACE //`) to comply with browser autoplay audio standards, decrypting files in real-time.
*   **Dual Sound Sequence**: Sequences J.A.R.V.I.S.'s AI boot dialogue *"Welcome home, sir"* followed by Captain America's iconic movie line *"Avengers... Assemble!"* at decryption completion.
*   **Interactive 16-Character Roster**: Transparent movie renders for all core Avengers, including newly integrated high-quality assets for Falcon, Captain Marvel, and Vision.
*   **Stark-Tech Diagnostics**: Dynamic visual elements such as a pulsing connection indicator, full-screen laser sweeps, and custom audio visualizer controls in the top bar.
*   **Dynamic Holographic Scanlines**: Interactive hover states that trigger color-coded laser scanners matching each character's identity theme.
*   **Tactical Power Grid**: Animated bar graphs detailing specific parameters (intelligence, strength, speed, durability, energy, and combat metrics).

---

## 🛠️ Project Structure

```text
avengers/
├── .github/workflows/
│   └── deploy.yml          # Automated CI/CD GitHub Pages workflow
├── vite-project/
│   ├── public/
│   │   ├── images/         # Transparent PNG character renders
│   │   └── sounds/         # Audio clips (Jarvis welcome & Assemble theme)
│   ├── src/
│   │   ├── components/     # React component HUD modules
│   │   ├── App.jsx         # Root app wrapper & audio manager
│   │   └── index.css       # Core typography and Stark design system tokens
│   ├── vite.config.js      # Build config with dynamic base pathing
│   └── package.json        # Project metadata & scripts
└── README.md               # Main documentation portal
```

---

## 💻 Local Quickstart

### Prerequisites
*   **Node.js** (v18 or higher recommended)
*   **npm** or **yarn**

### Installation
1. Navigate into the project folder:
   ```bash
   cd vite-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server locally:
   ```bash
   npm run dev
   ```
4. Access the system at: `http://localhost:5173/`

---

## 📡 Deployment Methods

### Option A: Automated CI/CD (GitHub Actions)
This project is configured with a GitHub Actions workflow (`deploy.yml`). Any push to the `main` branch will automatically:
1. Build the production bundle.
2. Publish to the `gh-pages` branch.

*To use this, make sure **GitHub Actions** is selected as the source in your repository Settings -> Pages tab.*

### Option B: Local CLI Deployment (`gh-pages`)
Alternatively, you can deploy manually from your terminal:
1. Make sure you are in the `vite-project` folder.
2. Run the deployment command:
   ```bash
   npm run deploy
   ```
   *This automatically builds the project (`npm run build`) and pushes the `dist/` directory to the `gh-pages` branch on your remote origin.*
   *To use this, make sure **Deploy from a branch** is selected as the source in your repository Settings -> Pages tab, pointing to the `gh-pages` branch.*
