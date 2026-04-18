# AsciiTab Landing Page

A minimal, keyboard-driven new tab dashboard landing page built with pure HTML, CSS, and JavaScript.

![AsciiTab](https://img.shields.io/badge/version-1.0-blue) ![License](https://img.shields.io/badge/license-MPL%202.0-green) ![Theme](https://img.shields.io/badge/Theme-Catppuccin-Mocha-purple)

---

## Features

- **Minimalist Design** - Clean, terminal-inspired aesthetic
- **4 Catppuccin Themes** - Mocha, Latte, Macchiato, Frappé
- **Interactive Browser Demo** - Live preview of AsciiTab
- **Minimalism Manager Showcase** - 3 focus modes
- **Fully Responsive** - Works on mobile & desktop
- **No Dependencies** - Pure vanilla HTML, CSS, JS

---

## Quick Start

### View Locally

Simply open `index.html` in your browser:

```bash
# Option 1: Double-click index.html
open index.html

# Option 2: Using Python
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## Project Structure

```
Landing page/
├── index.html      # Main landing page
├── styles.css     # All styles & theme variables
├── script.js      # Interactive functionality
├── images/        # Images & placeholders
│   └── *.png      # Replace with actual screenshots
└── README.md      # This file
```

---

## Customization

### Adding Screenshots

Replace placeholder images in `images/`:
- `hero-bg-placeholder.png` - Hero background
- `screenshot-main-placeholder.png` - Dashboard screenshot
- `screenshot-commands-placeholder.png` - Commands demo
- `screenshot-settings-placeholder.png` - Settings screenshot
- `feature-*.png` - Feature images
- `minimalism-*.png` - Minimalism mode screenshots

### Updating Links

Search for placeholder URLs in `index.html`:
- `https://github.com/notsid19/AsciiTab` - GitHub repo link

### Theme Colors

Edit CSS variables in `styles.css`:
```css
[data-theme="mocha"] { ... }
[data-theme="latte"] { ... }
[data-theme="macchiato"] { ... }
[data-theme="frappe"] { ... }
```

---

## Commands Reference

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` | Focus command bar |
| `Ctrl + ,` | Open settings |
| `Ctrl + M` | Open Minimalium Manager |
| `ESC` | Close modal |

### Commands

| Command | Action |
|----------|--------|
| `!gh` | Search GitHub |
| `!yt` | Search YouTube |
| `!r` | Search Reddit |
| `!wa` | WhatsApp Web |
| `@s` | Open settings |
| `@h` | Open help |
| `@min` | Open Minimalium Manager |

---

## Browser Support

- Chrome / Chromium
- Firefox
- Edge
- Brave

---

## License

**MPL 2.0** - Mozilla Public License 2.0

See [LICENSE](LICENSE) for details.

---

## Credits

- **Theme**: [Catppuccin](https://github.com/catppuccin/catppuccin)
- **Font**: [JetBrains Mono](https://www.jetbrains.com/mono/)
- **Built by SID**

---

## Support

- 🐛 Report bugs via [GitHub Issues](https://github.com/notsid19/AsciiTab/issues)
- 💬 Join the community
- ⭐ Star on GitHub

---

*Made with ♥*