/**
 * Content Loader - Dynamically loads text content from JSON configuration
 */

class ContentLoader {
    constructor(configPath = '/config/content.json') {
        this.configPath = configPath;
        this.config = null;
    }

    async init() {
        try {
            const response = await fetch(this.configPath);
            if (!response.ok) {
                throw new Error(`Failed to load config: ${response.status}`);
            }
            this.config = await response.json();
            this.loadAllContent();
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
}

// Initialize content loader when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const loader = new ContentLoader();
        loader.init();
    });
} else {
    const loader = new ContentLoader();
    loader.init();
}
