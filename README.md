# Portfolio Professionnel - Big Data & Intelligence Artificielle

Portfolio professionnel moderne et responsive pour présenter mes projets et compétences en Big Data et Intelligence Artificielle.

## 🎯 À propos

Ce portfolio présente mes réalisations dans le domaine du Big Data et de l'Intelligence Artificielle, organisées par catégories :

- **Machine Learning** : Projets de machine learning et deep learning
- **Data Science** : Analyse de données et visualisation
- **Big Data** : Traitement de données massives et architectures distribuées
- **Natural Language Processing** : Traitement du langage naturel et analyse textuelle
- **Computer Vision** : Vision par ordinateur et reconnaissance d'images
- **Data Engineering** : Pipelines de données et ETL
- **Recherche & Académique** : Projets de recherche et travaux académiques

## 🚀 Technologies utilisées

- HTML5
- CSS3 (avec variables CSS et animations)
- JavaScript (Vanilla JS)
- Design responsive et moderne

## 📁 Structure du projet

```
Porfolio/
│
├── index.html          # Page principale
├── styles.css          # Styles et design
├── script.js           # Interactivité et navigation
├── projects.js         # Données des projets (à remplir)
├── README.md           # Documentation
└── .gitignore          # Fichiers à ignorer par Git
```

## 🛠️ Comment ajouter des projets

Pour ajouter un nouveau projet, éditez le fichier `projects.js` et ajoutez un objet dans le tableau `projects` :

```javascript
{
    id: 1,
    title: 'Nom du projet',
    description: 'Description détaillée du projet...',
    category: 'machine-learning', // ID de la catégorie
    technologies: ['Python', 'TensorFlow', 'Scikit-learn'],
    image: '🔬', // Emoji ou URL d'image
    github: 'https://github.com/username/project', // Optionnel
    demo: 'https://demo-url.com', // Optionnel
    date: '2024'
}
```

### Catégories disponibles :
- `machine-learning`
- `data-science`
- `big-data`
- `nlp`
- `computer-vision`
- `data-engineering`
- `research`

## 📝 Personnalisation

### Modifier les informations de contact

Éditez la section contact dans `index.html` (lignes ~120-140) pour mettre à jour :
- Email
- LinkedIn
- GitHub

### Modifier les compétences

Éditez la section "À propos" dans `index.html` pour personnaliser vos compétences.

### Modifier les couleurs

Les couleurs sont définies dans `styles.css` via les variables CSS (lignes 1-12). Modifiez-les selon vos préférences.

## 🌐 Déploiement sur GitHub Pages

1. Créez un nouveau repository sur GitHub
2. Poussez tous les fichiers du portfolio
3. Allez dans **Settings** > **Pages**
4. Sélectionnez la branche `main` (ou `master`)
5. Le site sera disponible à : `https://votre-username.github.io/nom-du-repo/`

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à tous les écrans :
- Desktop
- Tablette
- Mobile

## 🔄 Mises à jour futures

- [ ] Ajouter des projets dans chaque catégorie
- [ ] Personnaliser les informations de contact
- [ ] Ajouter des images pour les projets
- [ ] Optimiser les performances
- [ ] Ajouter un formulaire de contact

## 📄 Licence

Ce projet est personnel et destiné à un usage professionnel.

---

**Note** : N'oubliez pas de personnaliser les informations de contact et d'ajouter vos projets réels dans `projects.js` !

