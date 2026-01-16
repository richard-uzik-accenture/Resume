# Professional Resume Website

A modern, responsive resume website built with semantic HTML, SCSS, and vanilla JavaScript, featuring a JSON-based content management system and automated deployment to Azure.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://www.richarduzik.eu/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🚀 Live Demo

Visit the live website: **[richarduzik.eu](https://www.richarduzik.eu/)**

## ✨ Features

- **📱 Fully Responsive Design** - Mobile-first approach optimized for all devices (320px - 1920px+)
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations and touch interactions
- **📝 JSON-Based Content** - Easy content updates without touching HTML
- **⚡ Lightning Fast** - Served via Azure CDN with performance optimizations
- **🔄 CI/CD Pipeline** - Automated deployment using GitHub Actions
- **♿ Accessible** - WCAG 2.1 compliant with semantic HTML and ARIA best practices
- **🎯 SEO Optimized** - Structured data and meta tags for search engines
- **🎭 Touch-Optimized** - 44px minimum touch targets, disabled hover on touch devices
- **🌐 Progressive Enhancement** - Works on all browsers with graceful degradation

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **SCSS** - Modular styling with BEM methodology
- **Vanilla JavaScript** - Dynamic content loading
- **CSS Grid & Flexbox** - Modern layout techniques

### Build Tools
- **Sass** - CSS preprocessing
- **PostCSS** - Autoprefixer for cross-browser compatibility
- **npm-run-all** - Parallel task execution
- **live-server** - Local development server

### Deployment & Infrastructure
- **Azure Static Web Apps** - Hosting on Azure Storage
- **Azure CDN** - Global content delivery
- **GitHub Actions** - Automated CI/CD pipeline

## 📁 Project Structure

```
├── assets/          # Images and SVG files
├── config/          # Content configuration
│   ├── content.json          # Site content data
│   └── content.schema.json   # JSON schema for validation
├── css/             # Compiled CSS files
├── js/              # JavaScript modules
│   └── content-loader.js     # Dynamic content loader
├── sass/            # SCSS source files
│   ├── base/        # Base styles, animations, utilities
│   ├── components/  # Component styles (BEM)
│   ├── layouts/     # Layout grids
│   └── pages/       # Page-specific styles
├── .github/         # GitHub Actions workflows
├── index.html       # Main page
├── 404.html         # Error page
└── package.json     # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/resume.git
   cd resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   This runs live-server and watches for SASS changes.

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build:css
```

This command compiles, prefixes, and minifies the CSS for production.

## 📝 Content Management

### Updating Content

All text content is managed through `config/content.json`:

1. Edit the JSON file with your content
2. Save changes
3. Refresh your browser (no rebuild needed!)

The content schema (`config/content.schema.json`) provides autocomplete and validation in VS Code.

### Available Sections

- **Header** - Site title and CTA
- **Navigation Cards** - Main navigation elements
- **About Me** - Profile summary with facts and metrics
- **Education** - Educational timeline
- **Experience** - Professional experience timeline
- **Skills** - Categorized skill sets with proficiency levels

See [`CONTENT_UPDATE_GUIDE.md`](CONTENT_UPDATE_GUIDE.md) for detailed instructions.

## 🎨 Customization

### Styling

All styles are written in SCSS following BEM methodology:

- **Colors & Variables**: Edit `sass/base/_base.scss`
- **Components**: Modify files in `sass/components/`
- **Layout**: Adjust `sass/layouts/_layout.scss`
- **Animations**: Customize `sass/base/_animations.scss`

After making changes, run:
```bash
npm run build:css
```

### Adding New Sections

1. Add HTML structure to `index.html`
2. Create corresponding SCSS file in `sass/components/`
3. Import in `sass/main.scss`
4. Add content data to `config/content.json`
5. Update `js/content-loader.js` to populate new section

## 📱 Mobile Optimization

This website is fully optimized for mobile devices with a mobile-first approach:

### Responsive Breakpoints
- **320px** - Small phones (iPhone SE, older devices)
- **375px** - Standard phones (iPhone 13 mini)
- **480px** - Large phones and phablets
- **768px** - Tablets (portrait)
- **1024px** - Tablets (landscape) and small desktops
- **1280px+** - Desktop and wide screens

### Mobile Features
- **Fluid Typography** - `clamp()` for responsive text scaling
- **Touch Interactions** - Minimum 44x44px touch targets (WCAG compliant)
- **Performance** - Optimized animations with `will-change` and reduced complexity on mobile
- **Accessibility** - `prefers-reduced-motion` support, focus states, keyboard navigation
- **iOS Support** - Safe area insets for notched devices
- **Progressive Grid** - Skills (4→3→2→1 cols), Timeline (alternating→stacked)

### Performance Targets
- Lighthouse Mobile Score: >90
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

See [`docs/MOBILE_OPTIMIZATION_PLAN.md`](docs/MOBILE_OPTIMIZATION_PLAN.md) for complete implementation details and [`docs/MOBILE_TESTING_CHECKLIST.md`](docs/MOBILE_TESTING_CHECKLIST.md) for testing procedures.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Richard Uzik**

- Website: [richarduzik.eu](https://www.richarduzik.eu/)
- GitHub: [@richard-uzik-accenture](https://github.com/richard-uzik-accenture)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons and assets from various open-source projects
- Azure for reliable hosting and CDN services

---

**Note**: This is a personal resume website. Feel free to use it as a template for your own resume, but please update the content with your own information.
