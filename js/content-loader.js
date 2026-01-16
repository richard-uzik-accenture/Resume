/**
 * Content Loader - Dynamically loads text content from JSON configuration
 * Optimized for mobile performance
 */

class ContentLoader {
  constructor(configPath = '/config/content.json') {
    this.configPath = configPath;
    this.config = null;
    this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  async init() {
    try {
      const response = await fetch(this.configPath);
      if (!response.ok) {
        throw new Error(`Failed to load config: ${response.status}`);
      }
      this.config = await response.json();

      // Use requestIdleCallback for non-critical loading on mobile
      if (this.isMobile && 'requestIdleCallback' in window) {
        requestIdleCallback(() => this.loadAllContent(), { timeout: 2000 });
      } else {
        this.loadAllContent();
      }
    } catch (error) {
      console.error('Error loading content configuration:', error);
    }
  }

  loadAllContent() {
    this.loadHeader();
    this.loadNavigationCards();
    this.loadAboutMe();
    this.loadEducation();
    this.loadExperience();
    this.loadSkills();
    this.loadSocialLinks();
  }

  loadHeader() {
    const { header } = this.config;

    const primaryHeading = document.querySelector('.header__heading--primary');
    const secondaryHeading = document.querySelector('.header__heading--secondary');
    const ctaButton = document.querySelector('.btn-transparent.btn--animated');

    if (primaryHeading) primaryHeading.textContent = header.primaryHeading;
    if (secondaryHeading) secondaryHeading.textContent = header.secondaryHeading;
    if (ctaButton) ctaButton.innerHTML = header.ctaText;
  }

  loadNavigationCards() {
    const { navigationCards } = this.config;
    const cardsContainer = document.querySelector('.navigation__cards');

    if (!cardsContainer) return;

    navigationCards.forEach((card, index) => {
      const cardElement = cardsContainer.querySelector(`.card--${index + 1}`);
      if (!cardElement) return;

      const heading = cardElement.querySelector('.card__heading');
      const link = cardElement.querySelector('.card__link');
      const image = cardElement.querySelector('.card__image');

      if (heading) heading.textContent = card.heading;
      if (link) {
        link.textContent = card.linkText;
        link.href = `#${card.id}`;
      }
      if (image) {
        image.src = card.image;
        image.alt = card.alt;
      }
    });
  }

  loadAboutMe() {
    const { aboutMe } = this.config;

    // Main heading
    const heading = document.querySelector('.aboutme__heading');
    if (heading) heading.textContent = aboutMe.heading;

    // Profile section
    const eyebrow = document.querySelector('.aboutme__eyebrow');
    const title = document.querySelector('.aboutme__title');
    const summary = document.querySelector('.aboutme__summary');

    if (eyebrow) eyebrow.textContent = aboutMe.eyebrow;
    if (title) title.textContent = aboutMe.title;
    if (summary) summary.textContent = aboutMe.summary;

    // Facts
    const factsList = document.querySelector('.aboutme__facts');
    if (factsList) {
      factsList.innerHTML = aboutMe.facts.map(fact => `
        <li>
          <span class="aboutme__fact-label">${fact.label}</span>
          <span class="aboutme__fact-value">${fact.value}</span>
        </li>
      `).join('');
    }

    // Tags
    const tagsContainer = document.querySelector('.aboutme__tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = aboutMe.tags.map(tag =>
        `<span class="aboutme__tag">${tag}</span>`
      ).join('');
    }

    // Photo
    const photo = document.querySelector('.aboutme__photo');
    if (photo) {
      photo.src = aboutMe.photoUrl;
      photo.alt = aboutMe.photoAlt;
    }

    // Map label
    const mapLabel = document.querySelector('.aboutme__map-label');
    if (mapLabel) mapLabel.textContent = aboutMe.mapLabel;

    // Metrics
    const metricsContainer = document.querySelector('.aboutme__metrics');
    if (metricsContainer) {
      metricsContainer.innerHTML = aboutMe.metrics.map(metric => `
        <div class="aboutme__metric-card">
          <span class="aboutme__metric-value">${metric.value}</span>
          <span class="aboutme__metric-label">${metric.label}</span>
        </div>
      `).join('');
    }

    // Certifications
    const certHeading = document.querySelector('.aboutme__subheading');
    if (certHeading) certHeading.textContent = aboutMe.certificationsHeading;

    const certGrid = document.querySelector('.aboutme__cert-grid');
    if (certGrid) {
      certGrid.innerHTML = aboutMe.certifications.map(cert => `
        <div class="cert-card">
          <img src="${cert.image}" alt="${cert.alt}" class="cert-card__image">
          <div class="cert-card__label">${cert.label}</div>
          <span class="cert-card__pill">${cert.pill}</span>
        </div>
      `).join('');
    }
  }

  loadEducation() {
    const { education } = this.config;

    const heading = document.querySelector('.education__heading');
    const subtitle = document.querySelector('.education__subtitle');

    if (heading) heading.textContent = education.heading;
    if (subtitle) subtitle.textContent = education.subtitle;

    const timeline = document.querySelector('.education__timeline');
    if (!timeline) return;

    timeline.innerHTML = education.timeline.map(item => `
      <div class="education__box education__box--${item.position}">
        <div class="education__dot"></div>
        <div class="education__card">
          <span class="education__period-badge">${item.periodBadge}</span>
          <h3 class="education__subheading">${item.subheading}</h3>
          
          <div class="education__image-wrapper">
            <img src="${item.image}" alt="${item.imageAlt}" class="education__photo" />
          </div>
          
          <div class="education__content">
            <h2 class="education__title">${item.title}</h2>
            <span class="education__period">${item.institution}</span>
            <p class="education__description">${item.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  loadExperience() {
    const { experience } = this.config;

    const heading = document.querySelector('.experience__heading');
    const subtitle = document.querySelector('.experience__subtitle');

    if (heading) heading.textContent = experience.heading;
    if (subtitle) subtitle.textContent = experience.subtitle;

    const timeline = document.querySelector('.experience__timeline');
    if (!timeline) return;

    timeline.innerHTML = experience.timeline.map(item => {
      const badgeHtml = item.badge ? `<span class="experience__card__badge">${item.badge}</span>` : '';

      return `
        <div class="experience__card experience__card--${item.position}" data-level="${item.level}">
          <div class="experience__card__year">${item.year}</div>
          <div class="experience__card__content">
            <div class="experience__card__header">
              <h3 class="experience__card__title">${item.title}</h3>
              <p class="experience__card__company">${item.company}</p>
              <span class="experience__card__duration">${item.duration}</span>
              ${badgeHtml}
            </div>
            <p class="experience__card__description">${item.description}</p>
            <div class="experience__card__highlights">
              ${item.highlights.map(highlight =>
        `<span class="experience__card__highlight">${highlight}</span>`
      ).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  loadSkills() {
    const { skills } = this.config;

    const heading = document.querySelector('.skills__heading-text');
    const subtitle = document.querySelector('.skills__subtitle');

    if (heading) heading.textContent = skills.heading;
    if (subtitle) subtitle.textContent = skills.subtitle;

    const mainContainer = document.querySelector('.skills__main');
    if (!mainContainer) return;

    mainContainer.innerHTML = skills.categories.map(category => `
      <div class="skills__box skills__box--${category.id}" data-category="${category.id}">
        <div class="skills__box__icon">
          <svg class="icon">
            <use xlink:href="assets/sprites.svg#${category.icon}"></use>
          </svg>
        </div>
        <h2 class="skills__box__heading">${category.heading}</h2>
        <p class="skills__box__description">${category.description}</p>
        <ul class="skills__box__list">
          ${category.items.map(item => `
            <li class="skills__box__item" data-level="${item.percentage}">
              <span class="skill-name">${item.name}</span>
              <span class="skill-level">${item.level}</span>
              <div class="skill-bar">
                <div class="skill-bar__fill" style="--skill-width: ${item.percentage}%"></div>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  loadSocialLinks() {
    const { socialLinks } = this.config;
    if (!socialLinks) return;

    // Update LinkedIn link
    const linkedinLink = document.querySelector('[data-social="linkedin"]');
    if (linkedinLink && socialLinks.linkedin) {
      linkedinLink.href = socialLinks.linkedin.url;
      linkedinLink.setAttribute('aria-label', `LinkedIn - ${socialLinks.linkedin.label}`);
    }

    // Update GitHub link
    const githubLink = document.querySelector('[data-social="github"]');
    if (githubLink && socialLinks.github) {
      githubLink.href = socialLinks.github.url;
      githubLink.setAttribute('aria-label', `GitHub - ${socialLinks.github.label}`);
    }

    // Update Email link
    const emailLink = document.querySelector('[data-social="email"]');
    if (emailLink && socialLinks.email) {
      emailLink.href = socialLinks.email.url;
      emailLink.setAttribute('aria-label', `Email - ${socialLinks.email.label}`);
    }
  }
}

// Mobile tab controller for app-like navigation
class MobileTabs {
  constructor() {
    this.buttons = Array.from(document.querySelectorAll('.mobile-tabs__item'));
    this.sections = new Map();
    this.activeId = null;
    this.mobileBreakpoint = window.matchMedia('(max-width: 820px)');
  }

  init() {
    if (!this.buttons.length) return;

    this.buttons.forEach((button) => {
      const target = button.dataset.target;
      const section = document.querySelector(`[data-tab="${target}"]`);
      this.sections.set(target, section);
    });

    const defaultId = this.buttons.find((btn) => btn.classList.contains('is-active'))?.dataset.target
      || this.buttons[0]?.dataset.target;
    const hashId = window.location.hash.replace('#', '');
    this.activeId = this.sections.has(hashId) ? hashId : defaultId;

    this.buttons.forEach((button) => {
      button.addEventListener('click', () => this.setActive(button.dataset.target));
    });

    // Mobile appbar home action: activate About tab and scroll to top
    const homeBtn = document.querySelector('[data-action="home"]');
    if (homeBtn) {
      homeBtn.addEventListener('click', () => {
        this.setActive('aboutme');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    this.mobileBreakpoint.addEventListener('change', (event) => this.handleBreakpoint(event.matches));

    this.handleBreakpoint(this.mobileBreakpoint.matches);
  }

  setActive(targetId, updateHistory = true) {
    if (!targetId || !this.sections.has(targetId)) return;

    this.activeId = targetId;

    this.buttons.forEach((button) => {
      const isActive = button.dataset.target === targetId;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
      button.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    this.sections.forEach((section, id) => {
      if (!section) return;
      section.classList.toggle('is-active', id === targetId);
    });

    if (updateHistory && window.location.hash !== `#${targetId}`) {
      history.replaceState(null, '', `#${targetId}`);
    }
  }

  handleBreakpoint(isMobile) {
    if (!isMobile) {
      this.buttons.forEach((button) => button.setAttribute('tabindex', '0'));
      return;
    }

    this.setActive(this.activeId || this.buttons[0]?.dataset.target, false);
  }
}

// Mobile menu toggle controller
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('.mobile-menu__toggle');
    this.panel = document.querySelector('.mobile-menu__panel');
    this.backdrop = document.querySelector('.mobile-menu__backdrop');
    this.isOpen = false;
  }

  init() {
    if (!this.toggle || !this.panel) return;

    this.toggle.addEventListener('click', () => this.toggleMenu());
    this.backdrop.addEventListener('click', () => this.closeMenu());

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.closeMenu();
    });

    // Close menu when clicking any action inside
    const actions = this.panel.querySelectorAll('.mobile-menu__button');
    actions.forEach(action => {
      action.addEventListener('click', () => {
        setTimeout(() => this.closeMenu(), 150);
      });
    });
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isOpen = true;
    this.toggle.classList.add('is-open');
    this.panel.classList.add('is-open');
    this.backdrop.classList.add('is-open');
    this.toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.isOpen = false;
    this.toggle.classList.remove('is-open');
    this.panel.classList.remove('is-open');
    this.backdrop.classList.remove('is-open');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

// Initialize content loader when DOM is ready
const bootstrap = () => {
  const loader = new ContentLoader();
  loader.init();

  const tabs = new MobileTabs();
  tabs.init();

  const menu = new MobileMenu();
  menu.init();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
