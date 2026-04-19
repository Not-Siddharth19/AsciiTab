<p align="center">
  <pre style="display:inline-block;text-align:center;font-family:monospace;font-size:12px;line-height:1.2;color:#cba6f7;">
   /$$$$$$                      /$$ /$$ /$$$$$$$$        
  /$$__  $$                    |__/|__/|__  $$__/       
 | $$  \ $$  /$$$$$$$  /$$$$$$$ /$$ /$$   | $$  /$$$$$$ | $$$$$$$ 
 | $$$$$$$$ /$$_____/ /$$_____/| $$| $$   | $$ |____  $$| $$__  $$
 | $$__  $$|  $$$$$$ | $$      | $$| $$   | $$  /$$$$$$$| $$  \ $$
 | $$  | $$ \____  $$| $$      | $$| $$   | $$ /$$__  $$| $$  | $$
 | $$  | $$ /$$$$$$$/|  $$$$$$$| $$| $$   | $$|  $$$$$$$| $$$$$$$/
 |__/  |__/|_______/  \_______/|__/|__/   |__/ \_______/|_______/ 
  </pre>
</p>

<h1 align="center">AsciiTab</h1>

<p align="center">
  A minimalist, keyboard-driven new tab dashboard with ASCII aesthetics.<br>
  Built for speed, customization, and a terminal-like experience.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0-blue?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/license-MPL%202.0-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/platform-Chrome%20%7C%20Firefox%20%7C%20Edge-purple?style=flat-square" alt="Platform">
</p>

---

## 📋 Overview

AsciiTab replaces your browser's new tab page with a keyboard-first command center. Built with vanilla HTML, CSS, and JavaScript for minimal overhead and maximum performance.

### Key Features

- ⚡ **Lightning Fast** - Zero dependencies, instant load
- ⌨️ **Keyboard-Driven** - Never touch your mouse
- 🎨 **4 Premium Themes** - Catppuccin Mocha, Macchiato, Frappé, Latte
- 🔒 **Privacy First** - 100% local, no tracking
- 🎭 **ASCII Art** - Customizable hero with presets
- 📱 **Minimalism Mode** - Three focus levels

---

## ⌨️ Commands

| Command | Action |
|---------|--------|
| `!gh <query>` | Search GitHub |
| `!yt <query>` | Search YouTube |
| `!r <query>` | Search Reddit |
| `!wa` | Open WhatsApp Web |
| `@s` | Open Settings |
| `@h` | Open Help |
| `@ae` | Open ASCII Editor |
| `@min` | Open Minimalism Manager |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` | Focus Command Bar |
| `Ctrl + ,` | Open Settings |
| `Ctrl + M` | Open Minimalism Manager |
| `ESC` | Close Modal |

---

## 🎨 Themes



- **Mocha** - Deep Dark (Default)
- **Macchiato** - Muted Dark
- **Frappé** - Mid-Tone Dark
- **Latte** - Crisp Light Mode

*More themes coming soon: Rose Pine, Dracula, Nord, and more.*

---

## 🏗️ Architecture

```
Single-Page Powerhouse
├── HTML5 (Semantic)
├── CSS3 (Variables & Grid)
└── Vanilla JavaScript
```

**Tech Stack:**
- HTML5 - Semantic structure
- CSS3 - CSS Variables, Grid, Flexbox
- Vanilla JavaScript - No frameworks
- Catppuccin - Color system
- JetBrains Mono - Typography

---

## 🔒 Privacy

AsciiTab is **100% client-side**. Your data never leaves your device.

- ✅ No analytics
- ✅ No tracking
- ✅ No external servers
- ✅ Local storage only
- ✅ User-initiated searches only

---

## 📥 Installation

### Firefox (Recommended)

<a href="https://addons.mozilla.org/en-US/firefox/addon/asciitab/" target="_blank">
  <img src="https://img.shields.io/badge/Install-Firefox-FF7139?style=for-the-badge&logo=firefox-browser" alt="Install on Firefox">
</a>

1. Visit the [AsciiTab Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/asciitab/) page
2. Click **"Add to Firefox"**
3. Click **"Add"** when prompted
4. Open a new tab to see AsciiTab

*Note: The Firefox add-on is signed and hosted on addons.mozilla.org (AMO)*

### Chrome / Edge / Brave

1. Download the latest release from [GitHub Releases](https://github.com/Not-Siddharth19/AsciiTab-Catppuccin/releases)
2. Extract the ZIP file to a folder
3. Open `chrome://extensions` in your browser
4. Enable **Developer mode** (toggle in top right)
5. Click **"Load unpacked"**
6. Select the extracted folder
7. Open a new tab to see AsciiTab

### For Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Not-Siddharth19/AsciiTab-Catppuccin.git
   ```
2. Open Chrome/Edge → `chrome://extensions`
3. Enable Developer mode
4. Click "Load unpacked" and select the cloned folder

---

## ⚙️ Configuration

### Custom Commands

Add your own shortcuts in Settings → Commands:

```
!<keyword> <url>

Example: !dev https://dev.to?q=
```

### Custom ASCII Art

1. Press `@ae` to open ASCII Editor
2. Create or paste your art
3. Adjust font size (8px - 24px)
4. Save - automatically persisted

### Minimalism Modes

| Mode | Content |
|------|---------|
| Balanced | ASCII + Clock + Date + Search |
| Concentrated | ASCII + Search |
| Zen | ASCII Only |

---

## 📁 Project Structure

```
asciitab/
├── manifest.json       # Extension manifest
├── index.html       # Main application
├── styles.css      # Styles & themes
├── script.js        # Application logic
├── images/         # Assets & logos
└── _locales/       # Internationalization
    └── en/
        └── messages.json
```

---

## 📜 License

[Mozilla Public License 2.0](LICENSE)

---

## 🙏 Credits

- [Catppuccin](https://github.com/catppuccin/catppuccin) - Beautiful color scheme
- [JetBrains Mono](https://www.jetbrains.com/mono/) - Excellent programming font

---

<p align="center">
  Made with ♥ by SID
</p>
