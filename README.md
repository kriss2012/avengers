# 🛡️ Avengers Stark-Tech Dossier Portal

[![Vite Version](https://img.shields.io/badge/Vite-v7.3.0-00d2ff?style=for-the-badge&logo=vite)](https://vite.dev/)
[![React Version](https://img.shields.io/badge/React-v19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-v12.2-e23c3c?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![GitHub Pages](https://img.shields.io/badge/Live--Demo-Active-10b981?style=for-the-badge&logo=github)](https://kriss2012.github.io/avengers/)

An immersive, high-fidelity Stark-Tech cinematic portal featuring the fully declassified 16-character Avengers roster, live system diagnostics, tactical grids, and responsive HUD styling.

---

### 🌐 Live Deployment
**🔗 Access Portal:** [https://kriss2012.github.io/avengers/](https://kriss2012.github.io/avengers/)

---

## 📟 S.H.I.E.L.D. Mainframe Console Welcome

```text
====================================================================
               S.H.I.E.L.D. SECURE PROTOCOL // ACCESS_GRANTED      
====================================================================
[INFO] INITIALIZING STARK-TECH PORTAL SYSTEM...
[INFO] DECRYPTING DIRECTORIES...
[OK]   16 Avenger Files Restored.
[OK]   Ambient Soundtrack: https://kriss2012.github.io/avengers/
====================================================================
```

---

## 🚀 Key Cinematic Systems

### 🔊 Dual Audio Boot Sequence
Complying with web autoplay policies, the application gates the main interface behind a secure login terminal:
1.  **System Initialization**: Clicking `ACTIVATE_INTERFACE //` instantly triggers the original AI voice of **J.A.R.V.I.S.** welcoming the user (*"Welcome home, sir"*).
2.  **File Decryption Progress**: A custom percentage progress bar increments dynamically alongside a full-screen red laser scanner sweep.
3.  **Command Confirmation**: As decryption reaches 100%, the official movie dialogue of **Captain America** (*"Avengers... Assemble!"*) plays at maximum volume, instantly opening the main tactical dashboard.

### 🎛️ Navbar Equalizer Widget
*   Includes a persistent, clickable `SYSTEM_AUDIO //` toggle button in the top navigation panel.
*   When active, an animated CSS equalizer bar widget simulates live soundtrack playback (`theme.mp3`) with random frequency fluctuations.

### 📡 Holographic Laser Scanner
*   Hovering over any personnel card triggers an active, sliding laser scanner overlay.
*   The laser color automatically adapts to match the character's signature theme color.

---

## 🗃️ Personnel Database Matrix (16 Core Members)

| Code Name | Real Name | Clearance Level | Tactical Status | Identity Color |
| :--- | :--- | :--- | :--- | :--- |
| **IRON MAN** | Tony Stark | Level 9 | `DECEASED // HEROIC_SACRIFICE` | 🔴 Red |
| **CAPTAIN AMERICA** | Steve Rogers | Level 8 | `RETIRED // TIMELINE_DISPLACEMENT`| 🔵 Blue |
| **THOR** | Thor Odinson | Class 10 // Cosmic | `ACTIVE // OFF-WORLD_DEVIATION` | 🌐 Cyan |
| **HULK** | Bruce Banner | Level 8 | `ACTIVE // INTEGRATED_SYNAPSE` | 🟢 Green |
| **BLACK WIDOW** | Natasha Romanoff | Level 9 | `DECEASED // VORMIR_EXCHANGE` | 💗 Magenta |
| **HAWKEYE** | Clint Barton | Level 8 | `ACTIVE // SEMI-RETIRED` | 🟣 Purple |
| **SPIDER-MAN** | Peter Parker | Level 7 | `ACTIVE // IDENTITY_RESTORED` | 🔴 Red |
| **DOCTOR STRANGE** | Stephen Strange | Level 8 // Mystic | `ACTIVE // SANCTUM_PROTECTOR` | 🟠 Orange |
| **BLACK PANTHER** | T'Challa | Level 9 // Sovereign | `DECEASED // SOUL_REALM` | 🟪 Indigo |
| **ANT-MAN** | Scott Lang | Level 7 | `ACTIVE // QUANTUM_DIVERGENT` | 🟠 Dark Orange |
| **CAPTAIN MARVEL** | Carol Danvers | Class 10 // Cosmic | `ACTIVE // DEEP-SPACE_ASSIGNMENT` | 🔴 Crimson |
| **NICK FURY** | Nick Fury | Level 10 // Commander | `ACTIVE // SABER_COSMIC_STATION` | 🔘 Slate |
| **FALCON** | Sam Wilson | Level 8 | `ACTIVE // CAPTAIN_AMERICA_LEGACY` | 🔴 Red |
| **WINTER SOLDIER** | Bucky Barnes | Level 8 | `ACTIVE // REHABILITATED` | 🔘 Slate Gray |
| **SCARLET WITCH** | Wanda Maximoff | Level 9 // Danger | `UNKNOWN // MOUNT_WUNDAGORE` | 🔴 Maroon |
| **VISION** | Vision | Level 9 | `DECEASED // SYNAPSE_RECONSTRUCTION`| 🟢 Teal |

---

## 🛠️ Project Structure & Subdirectories

```text
avengers/
├── .github/workflows/
│   └── deploy.yml          # Automated GitHub Actions build pipeline
├── vite-project/
│   ├── public/
│   │   ├── images/         # High-quality transparent character renders
│   │   └── sounds/         # Movie dialogue & ambient audio files
│   ├── src/
│   │   ├── components/     # React component HUD modules
│   │   │   ├── BootScreen  # Mainframe security portal & scanner
│   │   │   ├── Dossier     # Personnel grid, metrics, and modals
│   │   │   ├── Movies      # Mission logs & play transmissions
│   │   │   └── Navbar      # Fixed navigation menu & equalizer toggle
│   │   ├── App.jsx         # Global audio context & routing controller
│   │   └── index.css       # Design token configurations & layouts
│   ├── vite.config.js      # Production base path router config
│   └── package.json        # Dependencies & scripts
└── README.md               # Immersive Documentation File
```

---

## 💻 Local Setup Guidelines

### Setup Instructions
1.  **Navigate to Workspace**:
    ```bash
    cd vite-project
    ```
2.  **Install Node Modules**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
4.  **Local Testing**: Open your browser at `http://localhost:5173/`

---

## 📡 Deployment Workflows

### Option A: Local Terminal Publish (Recommended)
Compile the project and push the assets to the `gh-pages` branch on GitHub:
```bash
cd vite-project
npm run deploy
```
*This triggers `npm run build` and automatically commits the build output to your repository branch.*

### Option B: Automated Actions Integration
A GitHub Actions workflow is preconfigured in `.github/workflows/deploy.yml` which deploys a new build to GitHub Pages on every `git push origin main`.

---

```text
====================================================================
[SECURITY DISCLAIMER]
RESTRICTED FOR AUTHORIZED STARK INDUSTRIES PERSONNEL ONLY. 
UNAUTHORIZED ATTEMPTS TO COPY OR EXTRACT CORE DATA FILES WILL TRIGGER
J.A.R.V.I.S. FIREWALL DEFENSES.
====================================================================
```
