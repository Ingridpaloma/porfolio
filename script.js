// Navigation mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function getCategoryName(categoryId) {
    const category = projectsData.categories.find(cat => cat.id === categoryId);
    if (!category) return categoryId;
    return category.nameKey ? I18N.t(category.nameKey) : I18N.resolve(category.name);
}

function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const attr = el.getAttribute('data-i18n-attr');
        const value = I18N.t(key);
        if (attr) {
            el.setAttribute(attr, value);
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.getAttribute('data-lang') === I18N.getLang();
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
}

function setLanguage(lang) {
    const detailSection = document.getElementById('project-detail');
    const openProjectId = detailSection && !detailSection.classList.contains('hidden')
        ? (window.history.state && window.history.state.projectId) || null
        : null;

    I18N.setLang(lang);
    applyStaticTranslations();
    initializeProjects();

    if (openProjectId) {
        showProjectDetail(openProjectId);
    }
}

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });
}

// Affichage des projets en deux sections : phares et autres
function initializeProjects() {
    const featuredGrid = document.getElementById('featuredProjectsGrid');
    const otherGrid = document.getElementById('otherProjectsGrid');
    const otherSection = document.getElementById('otherProjectsSection');

    featuredGrid.innerHTML = '';
    otherGrid.innerHTML = '';
    if (otherSection) otherSection.classList.remove('hidden');

    const featuredProjects = projectsData.projects.filter(project => project.featured);
    const otherProjects = projectsData.projects.filter(project => !project.featured);

    featuredProjects.forEach(project => {
        featuredGrid.appendChild(createProjectCard(project));
    });

    if (otherProjects.length > 0) {
        otherProjects.forEach(project => {
            otherGrid.appendChild(createProjectCard(project, { compact: true }));
        });
    } else if (otherSection) {
        otherSection.classList.add('hidden');
    }
}

function createProjectCard(project, options = {}) {
    const { compact = false } = options;
    const card = document.createElement('div');
    card.className = compact ? 'project-card project-card--compact' : 'project-card';

    const title = I18N.resolve(project.title);
    const description = compact
        ? I18N.resolve(project.shortDescription || project.description)
        : I18N.resolve(project.description);

    card.innerHTML = `
        <div class="project-image">
            ${project.image || '📊'}
        </div>
        <div class="project-content">
            <span class="project-category">${getCategoryName(project.category)}</span>
            <h3 class="project-title">${title}</h3>
            <p class="project-description">${description}</p>
            ${compact ? '' : `
            <div class="project-tech">
                ${(project.technologies || []).map(tech =>
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>`}
            <div class="project-links">
                <button class="btn-detail" data-project-id="${project.id}">
                    <span>📖</span> ${I18N.t('viewDetails')}
                </button>
                ${!compact && project.github ?
                    `<a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <span>🔗</span> GitHub
                    </a>` : ''
                }
                ${!compact && project.demo ?
                    `<a href="${project.demo}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <span>🌐</span> ${I18N.t('demo')}
                    </a>` : ''
                }
            </div>
        </div>
    `;

    const detailBtn = card.querySelector('.btn-detail');
    if (detailBtn) {
        detailBtn.addEventListener('click', () => {
            showProjectDetail(project.id);
        });
    }

    return card;
}

// Smooth scroll pour les liens d'ancrage (nav uniquement, pas les hash projets)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href.startsWith('#project-')) return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const detailSection = document.getElementById('project-detail');
            if (detailSection && !detailSection.classList.contains('hidden')) {
                detailSection.classList.add('hidden');
                document.getElementById('accueil').classList.remove('hidden');
                document.getElementById('apropos').classList.remove('hidden');
                document.getElementById('projets').classList.remove('hidden');
                document.getElementById('contact').classList.remove('hidden');
            }

            requestAnimationFrame(() => {
                const navHeight = navbar ? navbar.offsetHeight : 70;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
                window.history.pushState({}, '', href);
            });
        }
    });
});

function showProjectDetail(projectId) {
    const project = projectsData.projects.find(p => p.id === projectId);
    if (!project) return;

    const title = I18N.resolve(project.title);
    const detailSection = document.getElementById('project-detail');
    const detailContent = document.getElementById('projectDetailContent');

    let videoHTML = '';
    if (project.video) {
        if (project.video.includes('youtube.com') || project.video.includes('youtu.be')) {
            const videoId = project.video.includes('youtu.be')
                ? project.video.split('/').pop().split('?')[0]
                : project.video.split('v=')[1]?.split('&')[0];
            videoHTML = `
                <div class="project-media">
                    <h3>${I18N.t('videoTitle')}</h3>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            `;
        } else if (project.video.includes('vimeo.com')) {
            const videoId = project.video.split('/').pop();
            videoHTML = `
                <div class="project-media">
                    <h3>${I18N.t('videoTitle')}</h3>
                    <div class="video-container">
                        <iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            `;
        } else {
            const videoExt = project.video.split('.').pop().toLowerCase();
            let mimeType = 'video/mp4';
            if (videoExt === 'webm') mimeType = 'video/webm';
            else if (videoExt === 'ogg' || videoExt === 'ogv') mimeType = 'video/ogg';
            else if (videoExt === 'mov') mimeType = 'video/quicktime';

            videoHTML = `
                <div class="project-media">
                    <h3>${I18N.t('videoTitle')}</h3>
                    <div class="video-container">
                        <video controls preload="metadata">
                            <source src="${project.video}" type="${mimeType}">
                            ${I18N.t('videoUnsupported')}
                        </video>
                    </div>
                </div>
            `;
        }
    }

    let imagesHTML = '';
    if (project.images && project.images.length > 0) {
        imagesHTML = `
            <div class="project-media">
                <h3>${I18N.t('galleryTitle')}</h3>
                <div class="project-images-grid">
                    ${project.images.map(img => `
                        <div class="project-image-item">
                            <img src="${img}" alt="${I18N.t('projectImageAlt')} ${title}" onclick="openImageModal('${img}')">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const features = I18N.resolveList(project.features);
    let featuresHTML = '';
    if (features.length > 0) {
        featuresHTML = `
            <div class="project-features">
                <h3>${I18N.t('featuresTitle')}</h3>
                <ul class="features-list">
                    ${features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    const longDesc = I18N.resolve(project.longDescription || project.detailDescription || project.description);

    detailContent.innerHTML = `
        <div class="project-detail-header">
            <span class="project-detail-category">${getCategoryName(project.category)}</span>
            <h1 class="project-detail-title">${title}</h1>
            <p class="project-detail-date">${project.date || ''}</p>
        </div>

        <div class="project-detail-body">
            <div class="project-detail-description">
                <h3>${I18N.t('descriptionTitle')}</h3>
                <p>${longDesc}</p>
            </div>

            ${videoHTML}
            ${imagesHTML}

            <div class="project-detail-tech">
                <h3>${I18N.t('techTitle')}</h3>
                <div class="tech-tags-detail">
                    ${(project.technologies || []).map(tech =>
                        `<span class="tech-tag-detail">${tech}</span>`
                    ).join('')}
                </div>
            </div>

            ${featuresHTML}

            <div class="project-detail-links">
                ${project.github ?
                    `<a href="${project.github}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">
                        <span>🐙</span> ${I18N.t('viewGithub')}
                    </a>` : ''
                }
                ${project.demo ?
                    `<a href="${project.demo}" target="_blank" class="btn btn-secondary" rel="noopener noreferrer">
                        <span>🌐</span> ${I18N.t('viewDemo')}
                    </a>` : ''
                }
            </div>
        </div>
    `;

    document.getElementById('accueil').classList.add('hidden');
    document.getElementById('apropos').classList.add('hidden');
    document.getElementById('projets').classList.add('hidden');
    document.getElementById('contact').classList.add('hidden');
    detailSection.classList.remove('hidden');

    requestAnimationFrame(() => {
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const top = detailSection.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });

    window.history.pushState({ projectId }, '', `#project-${projectId}`);
}

function backToProjects() {
    const detailSection = document.getElementById('project-detail');
    const projectsSection = document.getElementById('projets');

    detailSection.classList.add('hidden');
    document.getElementById('accueil').classList.remove('hidden');
    document.getElementById('apropos').classList.remove('hidden');
    projectsSection.classList.remove('hidden');
    document.getElementById('contact').classList.remove('hidden');

    window.history.pushState({}, '', '#projets');

    requestAnimationFrame(() => {
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const top = projectsSection.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', backToProjects);
    }

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash.startsWith('#project-')) {
            const projectId = parseInt(hash.split('-')[1]);
            if (projectId) {
                showProjectDetail(projectId);
            }
        } else if (hash === '#projets' || hash === '') {
            backToProjects();
        }
    });

    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.split('-')[1]);
        if (projectId) {
            showProjectDetail(projectId);
        }
    }
});

function openImageModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close">&times;</span>
            <img src="${imageSrc}" alt="${I18N.t('projectImageAlt')}">
        </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => {
        document.body.removeChild(modal);
    };

    modal.querySelector('.image-modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    I18N.setLang(I18N.getLang());
    initLanguageSwitcher();
    applyStaticTranslations();
    initializeProjects();
});
