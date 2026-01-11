# Resume Website - AI Agent Instructions

## Project Overview
A static resume website deployed to Azure Storage with CDN. Frontend-only project built with semantic HTML and SCSS, deployed via GitHub Actions CI/CD pipeline to Test/Production environments on Azure.

## Architecture & Key Patterns

### SASS Architecture
- **File-first modular structure**: Each component, page, and layout has its own SCSS file
- **Namespace imports**: All SCSS files imported in `sass/main.scss` using `@use "path" as *` syntax
- **CSS Variables**: Color palette and spacing defined as CSS custom properties in `:root` (see `sass/base/_base.scss`)
- **BEM naming convention**: Class names follow `block__element--modifier` pattern
  - Example: `.card__background--1`, `.header__heading--secondary`, `.btn--animated`
- **Directory structure**:
  - `base/`: Animations, global styles, utility classes
  - `components/`: Reusable UI elements (button, card, header, education, experience, skills, aboutme, return)
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

## Development Commands
- `npm start` — Dev mode: live-server + SASS watch
- `npm run build:css` — Full production CSS build
- `npm run compile:sass` — SCSS → CSS (uncompressed)
- `npm run watch:sass` — Auto-compile SCSS on changes
- `npm run devserver` — Start live-server only

## File Structure for New Features
1. **New component**: Create `sass/components/_componentname.scss` and import in `main.scss`
2. **New page styles**: Create `sass/pages/pagename.scss` and import in `main.scss`
3. **HTML**: Add semantic markup with BEM classes matching component structure
4. **Styling**: Use CSS variables and nest modifiers with `&--` syntax

## Important Notes
- Static site (no JavaScript framework or backend logic)
- All styling is compiled CSS; edit SCSS only, never `style.css` directly
- Test responsivity and basic functionality locally before pushing to development
- Use Trello (Resume Board) to track tasks and ideas alongside GitHub issues
