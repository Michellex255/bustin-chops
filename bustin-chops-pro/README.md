# Bustin' Chops Website

A professional landing page for Bustin' Chops - Authentic South African Biltong.

## 🌍 Live Demo

[View Live Site](#) <!-- Add your deployed URL here -->

## 📁 Project Structure

```
bustin-chops/
├── index.html          # Main HTML structure
├── 404.html            # Custom error page
├── css/
│   └── styles.css      # All styles with CSS variables
├── js/
│   └── main.js         # 3D tilt effect & parallax
├── assets/
│   └── images/         # Local images (if needed)
├── .gitignore          # Git ignore rules
├── .editorconfig       # Editor configuration
├── package.json        # Project metadata & scripts
├── LICENSE             # MIT License
├── robots.txt          # Search engine rules
├── humans.txt          # Project credits
└── README.md           # This file
```

## ✨ Features

- **Responsive Design** - Works on all devices
- **3D Tilt Effect** - Product images respond to mouse movement
- **Global Parallax** - Subtle movement following the cursor
- **WhatsApp Integration** - Direct ordering link
- **Accessible** - Respects reduced motion preferences
- **Clean Code** - Organized, commented, maintainable
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Social Sharing** - Rich previews on WhatsApp, Facebook, Twitter

## 🔍 SEO Features

The site includes:

| Feature | Purpose |
|---------|---------|
| Meta description | Shows in Google search results |
| Open Graph tags | Rich previews on Facebook/WhatsApp |
| Twitter Cards | Rich previews on Twitter |
| JSON-LD structured data | Helps Google understand your business |
| Canonical URL | Prevents duplicate content issues |
| robots.txt | Tells search engines what to index |

### Social Preview Example

When shared on WhatsApp/Facebook, it shows:
```
┌─────────────────────────────────┐
│  [Bustin' Chops logo with fire] │
│                                 │
│  Bustin' Chops - Authentic      │
│  South African Biltong          │
│                                 │
│  Premium handcrafted biltong &  │
│  droewors. Order on WhatsApp... │
└─────────────────────────────────┘
```

### Update URLs Before Deploying

Replace placeholder URLs in `index.html`:
```html
<!-- Change these to your actual domain -->
<meta property="og:url" content="https://bustinchops.co.za/">
<link rel="canonical" href="https://bustinchops.co.za/">
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Brown | `#391F0D` | Background |
| Rust | `#AA3D1D` | Product cards, accents |
| Cream | `#F3EFE7` | Text, headings |
| Warm Gray | `#C5BBB1` | Secondary text |
| WhatsApp Green | `#25D366` | WhatsApp button |

## 🛠️ Technologies

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)

## 🚀 Getting Started

1. Clone or download this folder
2. Open `index.html` in your browser
3. Or use VS Code Live Server extension

### Using Live Server (Recommended)

1. Install the **Live Server** extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Using npm

```bash
npm start
```

## 🔧 Git Setup

Initialize Git and push to GitHub:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Bustin' Chops landing page"

# Add your GitHub repo (replace with your URL)
git remote add origin https://github.com/yourusername/bustin-chops.git

# Push to GitHub
git push -u origin main
```

## 🚀 Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Deploy!

### GitHub Pages
1. Go to your repo Settings → Pages
2. Select source: "Deploy from a branch"
3. Select branch: `main` and folder: `/ (root)`
4. Save and wait for deployment

## 📱 Responsive Breakpoints

- **Large**: 1100px and below
- **Medium**: 900px and below
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## 🖼️ Images

All images are hosted on S3 (SheCodes). To use local images:

1. Save images to `assets/images/`
2. Update the `src` attributes in `index.html`

## 📝 Customization

### Colors
Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-dark-brown: #391F0D;
    --color-rust: #AA3D1D;
    /* etc */
}
```

### Tilt Effect
Edit CONFIG in `js/main.js`:

```javascript
const CONFIG = {
    tilt: {
        maxTilt: 15,      // Change tilt intensity
        scale: 1.03,      // Change hover scale
    }
};
```

## 📞 Contact Links

- **WhatsApp**: wa.me/27620020027
- **Triggerfish Market**: facebook.com/triggerfishfarmersmarket
- **Lourensford Market**: lfhm.co.za

## 📄 License

© 2025 Bustin' Chops. All rights reserved.

---

Built with ❤️ by Michelle
