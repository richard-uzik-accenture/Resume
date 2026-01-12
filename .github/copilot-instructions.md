# Resume Website - AI Agent Instructions

## Project Overview
A resume website deployed to Azure Storage with CDN. Built with semantic HTML, SCSS, and vanilla JavaScript for JSON-based content management. Deployed via GitHub Actions CI/CD pipeline to Test/Production environments on Azure.

## Architecture & Key Patterns

### Content Management System
- **JSON-based content**: All text content stored in `config/content.json` (header, navigation, about, education, experience, skills)
- **Schema validation**: `config/content.schema.json` provides IntelliSense and validation in VS Code
- **Dynamic loading**: `js/content-loader.js` fetches and populates HTML at runtime using vanilla JavaScript
- **Update workflow**: Edit JSON → Save → Refresh browser (no HTML changes needed)
- **Documentation**: See `config/README.md` and `CONTENT_UPDATE_GUIDE.md` for content management guides

### SASS Architecture
- **File-first modular structure**: Each component, page, and layout has its own SCSS file
- **Namespace imports**: All SCSS files imported in `sass/main.scss` using `@use "path" as *` syntax
- **CSS Variables**: Color palette and spacing defined as CSS custom properties in `:root` (see `sass/base/_base.scss`)
- **BEM naming convention**: Class names follow `block__element--modifier` pattern
  - Example: `.card__background--1`, `.header__heading--secondary`, `.btn--animated`
- **Directory structure**:
  - `base/`: Animations, global styles, utility classes
  - `components/`: Reusable UI elements (button, card, header, education, experience, experience-card, skills, aboutme, return)
  - `layouts/`: Layout grids and containers
  - `pages/`: Page-specific styles (404, home)

### Build Pipeline
- **SASS compilation chain** (see `package.json`):
  1. `compile:sass`: Compile main SCSS → uncompressed CSS
  2. `prefix:css`: Add vendor prefixes for last 10 browser versions (autoprefixer)
  3. `compress:css`: Minify final CSS
  4. Use `npm run build:css` to run full pipeline
- **Dev workflow**: `npm start` runs live-server + SASS watch in parallel

### Deployment & CI/CD
- **GitHub Actions workflow**: `.github/workflows/CI-CD.yml`
  - Triggers on push to `master` branch or manual dispatch
  - Deploys to Azure Storage Account (`$web` container)
  - Purges Azure CDN cache after deployment
  - Manual dispatch allows choosing Test or Production environment
- **Environments**:
  - **Production**: `rsmprdst.z16.web.core.windows.net` (direct) or `richarduzik-resume.azureedge.net` (CDN)
  - **Test**: `rsmtstst.z16.web.core.windows.net` (direct) or `richarduzik-resume-test.azureedge.net` (CDN)

## Git & Development Workflow

### Branching Strategy
- **Main branches**: `master` (production), `development` (integration)
- **Feature branches**: Create from `development`, named as:
  - `feature-task-componentname` (for features)
  - `feature-bug-componentname` (for bugs)
  - Example: `feature-task-card` or `feature-bug-header`
- **Workflow**: Feature → Development (PR) → Test locally → Master (PR) → GitHub Actions deployment

### Commit Conventions
- Make **atomic commits** (one file/component/feature per commit)
- Use **short, descriptive messages**
- Reference component names: `Update card component styles`, `Fix header alignment`

## Code Patterns & Conventions

### SCSS Component Structure
```scss
// Example from _button.scss
.btn-transparent {
  &:link, &:visited { /* Base state */ }
  &:hover { /* Interactive */ }
  &:active { /* Active state */ }
}

.btn {
  &--animated { /* Modifiers */ }
}
```

### CSS Variables Usage
- Access via `var(--color-primary)`, `var(--default-radius)`, etc.
- Always define new colors/spacing as CSS variables in `_base.scss`
- Use opacity variants: `--color-primary-o` for semi-transparent, `--color-primary-rgb` for rgba()

### HTML Conventions
- Use semantic sections: `<header>`, `<main>`, `<section id="education">`, etc.
- Link anchors match section IDs for navigation: `<a href="#education">`
- Classes follow BEM: element name matches component name
- Example: `<div class="card card--1">` with children `card__background`, `card__image`
- Text content is loaded dynamically from JSON; HTML structure provides semantic skeleton only
- Script loading: `<script src="js/content-loader.js" defer></script>` in `<head>`

## Content Update Workflow

### JSON Content System
The site uses a centralized content management system that separates content from structure:

1. **Content file**: `config/content.json` contains all text content organized by section:
   - `header`: Site title, subtitle, CTA text
   - `navigationCards`: Three main navigation card objects (id, heading, linkText, image, alt)
   - `aboutMe`: Profile section (eyebrow, title, summary, facts array, tags array, metrics array, certifications array)
   - `education`: Timeline array with education entries (period, periodBadge, subheading, image, title, institution, description, position)
   - `experience`: Timeline array with experience entries (year, level, title, company, duration, badge, description, highlights array, position)
   - `skills`: Categories array with skill groups (id, icon, heading, description, items array with name/level/percentage)

2. **Schema validation**: `config/content.schema.json` provides autocomplete and validation in VS Code

3. **Content loader**: `js/content-loader.js` is a vanilla JavaScript class that:
   - Fetches JSON on page load
   - Dynamically populates HTML elements using selectors
   - Handles all sections: header, navigation cards, about, education, experience, skills
   - Initialized automatically when DOM loads

4. **Update process**:
   - Edit `config/content.json` (auto-validation in VS Code)
   - Save file
   - Refresh browser (no build step needed for content)
   - Deploy JSON file along with other assets

### Content vs. Structure
- **Never edit HTML** for text content changes—always update JSON
- **Edit HTML only** for structural/layout changes (adding sections, modifying DOM structure)
- **Edit SCSS** for styling changes
- Content changes don't require CSS rebuild, only browser refresh

## Development Commands
- `npm start` — Dev mode: live-server + SASS watch
- `npm run build:css` — Full production CSS build
- `npm run compile:sass` — SCSS → CSS (uncompressed)
- `npm run watch:sass` — Auto-compile SCSS on changes
- `npm run devserver` — Start live-server only
- `npm run prefix:css` — Add vendor prefixes
- `npm run compress:css` — Minify CSS

## File Structure for New Features
1. **New component**: Create `sass/components/_componentname.scss` and import in `main.scss`
2. **New page styles**: Create `sass/pages/_pagename.scss` and import in `main.scss`
3. **HTML**: Add semantic markup with BEM classes matching component structure
4. **Styling**: Use CSS variables and nest modifiers with `&--` syntax
5. **Content**: Add data to `config/content.json` if dynamic text is needed, update schema if adding new fields

## Important Files & Documentation
- **Content management**: `CONTENT_UPDATE_GUIDE.md` (quick reference), `config/README.md` (detailed guide)
- **Implementation docs**: `JSON_IMPLEMENTATION.md` (JSON system overview)
- **Schema**: `config/content.schema.json` (content structure definition)
- **Loader**: `js/content-loader.js` (content population logic)

## Important Notes
- Hybrid architecture: Static HTML structure + dynamic JSON content + SCSS styling
- All text content managed via JSON—never hardcode text in HTML
- All styling is compiled CSS; edit SCSS only, never `style.css` directly
- JavaScript is minimal and focused on content loading only (no framework)
- Test responsivity and basic functionality locally before pushing to development
- Content changes require JSON updates + browser refresh (no rebuild)
- Style changes require SASS compilation (`npm run build:css`)
- Use Trello (Resume Board) to track tasks and ideas alongside GitHub issues
