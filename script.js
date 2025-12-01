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

// Filtrage des projets par catégorie
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryFilters = document.getElementById('categoryFilters');
    
    // Générer les boutons de filtres
    projectsData.categories.forEach(category => {
        const filterBtn = document.createElement('button');
        filterBtn.className = 'filter-btn';
        filterBtn.textContent = category.name;
        filterBtn.setAttribute('data-category', category.id);
        filterBtn.addEventListener('click', () => filterProjects(category.id));
        categoryFilters.appendChild(filterBtn);
    });
    
    // Afficher tous les projets
    displayProjects('all');
}

function filterProjects(categoryId) {
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === categoryId) {
            btn.classList.add('active');
        }
    });
    
    // Afficher les projets filtrés
    displayProjects(categoryId);
}

function displayProjects(categoryId) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    let filteredProjects = projectsData.projects;
    
    if (categoryId !== 'all') {
        filteredProjects = projectsData.projects.filter(
            project => project.category === categoryId
        );
    }
    
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">Aucun projet dans cette catégorie pour le moment</p>
                <p>Les projets seront ajoutés progressivement</p>
            </div>
        `;
        return;
    }
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const category = projectsData.categories.find(cat => cat.id === project.category);
    
    card.innerHTML = `
        <div class="project-image">
            ${project.image || '📊'}
        </div>
        <div class="project-content">
            <span class="project-category">${category ? category.name : project.category}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => 
                    `<span class="tech-tag">${tech}</span>`
                ).join('')}
            </div>
            <div class="project-links">
                <button class="btn-detail" data-project-id="${project.id}">
                    <span>📖</span> Voir les détails
                </button>
                ${project.github ? 
                    `<a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <span>🔗</span> GitHub
                    </a>` : ''
                }
                ${project.demo ? 
                    `<a href="${project.demo}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                        <span>🌐</span> Démo
                    </a>` : ''
                }
            </div>
        </div>
    `;
    
    // Ajouter l'événement click sur le bouton "Voir les détails"
    const detailBtn = card.querySelector('.btn-detail');
    if (detailBtn) {
        detailBtn.addEventListener('click', () => {
            showProjectDetail(project.id);
        });
    }
    
    return card;
}

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fonction pour afficher les détails d'un projet
function showProjectDetail(projectId) {
    const project = projectsData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const category = projectsData.categories.find(cat => cat.id === project.category);
    const detailSection = document.getElementById('project-detail');
    const detailContent = document.getElementById('projectDetailContent');
    
    // Construire le contenu de la page de détail
    let videoHTML = '';
    if (project.video) {
        // Détecter si c'est YouTube, Vimeo ou un fichier local
        if (project.video.includes('youtube.com') || project.video.includes('youtu.be')) {
            const videoId = project.video.includes('youtu.be') 
                ? project.video.split('/').pop().split('?')[0]
                : project.video.split('v=')[1]?.split('&')[0];
            videoHTML = `
                <div class="project-media">
                    <h3>Vidéo de présentation</h3>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            `;
        } else if (project.video.includes('vimeo.com')) {
            const videoId = project.video.split('/').pop();
            videoHTML = `
                <div class="project-media">
                    <h3>Vidéo de présentation</h3>
                    <div class="video-container">
                        <iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            `;
        } else {
            // Fichier vidéo local
            videoHTML = `
                <div class="project-media">
                    <h3>Vidéo de présentation</h3>
                    <div class="video-container">
                        <video controls>
                            <source src="${project.video}" type="video/mp4">
                            Votre navigateur ne supporte pas la lecture de vidéos.
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
                <h3>Galerie d'images</h3>
                <div class="project-images-grid">
                    ${project.images.map(img => `
                        <div class="project-image-item">
                            <img src="${img}" alt="Image du projet ${project.title}" onclick="openImageModal('${img}')">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    let featuresHTML = '';
    if (project.features && project.features.length > 0) {
        featuresHTML = `
            <div class="project-features">
                <h3>Fonctionnalités principales</h3>
                <ul class="features-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    detailContent.innerHTML = `
        <div class="project-detail-header">
            <span class="project-detail-category">${category ? category.name : project.category}</span>
            <h1 class="project-detail-title">${project.title}</h1>
            <p class="project-detail-date">${project.date}</p>
        </div>
        
        <div class="project-detail-body">
            <div class="project-detail-description">
                <h3>Description</h3>
                <p>${project.longDescription || project.detailDescription || project.description}</p>
            </div>
            
            ${videoHTML}
            ${imagesHTML}
            
            <div class="project-detail-tech">
                <h3>Technologies utilisées</h3>
                <div class="tech-tags-detail">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag-detail">${tech}</span>`
                    ).join('')}
                </div>
            </div>
            
            ${featuresHTML}
            
            <div class="project-detail-links">
                ${project.github ? 
                    `<a href="${project.github}" target="_blank" class="btn btn-primary" rel="noopener noreferrer">
                        <span>🐙</span> Voir sur GitHub
                    </a>` : ''
                }
                ${project.demo ? 
                    `<a href="${project.demo}" target="_blank" class="btn btn-secondary" rel="noopener noreferrer">
                        <span>🌐</span> Voir la démo
                    </a>` : ''
                }
            </div>
        </div>
    `;
    
    // Afficher la section de détail et masquer les autres sections
    document.getElementById('projets').classList.add('hidden');
    detailSection.classList.remove('hidden');
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Mettre à jour l'URL sans recharger la page
    window.history.pushState({ projectId }, '', `#project-${projectId}`);
}

// Fonction pour revenir à la liste des projets
function backToProjects() {
    const detailSection = document.getElementById('project-detail');
    const projectsSection = document.getElementById('projets');
    
    detailSection.classList.add('hidden');
    projectsSection.classList.remove('hidden');
    
    // Restaurer l'URL
    window.history.pushState({}, '', '#projets');
    
    // Scroll vers la section projets
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Gérer le bouton retour
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', backToProjects);
    }
    
    // Gérer la navigation via l'URL (hash)
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
    
    // Vérifier l'URL au chargement
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.split('-')[1]);
        if (projectId) {
            showProjectDetail(projectId);
        }
    }
});

// Fonction pour ouvrir une image en modal (optionnel)
function openImageModal(imageSrc) {
    // Créer un modal simple pour afficher l'image en grand
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close">&times;</span>
            <img src="${imageSrc}" alt="Image du projet">
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

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
});

