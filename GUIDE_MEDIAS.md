# Guide pour gérer les photos et vidéos locales

Ce guide explique comment organiser et utiliser vos photos et vidéos stockées localement dans votre portfolio.

## 📁 Structure recommandée des dossiers


Créez la structure suivante dans votre projet :

```
Porfolio/
│
├── images/
│   ├── profile-pic (1).png          # Photo de profil (déjà existante)
│   │
│   └── projets/                      # Dossier pour les médias des projets
│       ├── projet-1/                 # Dossier pour le projet 1
│       │   ├── video.mp4             # Vidéo du projet (optionnel)
│       │   ├── image1.jpg            # Image 1
│       │   ├── image2.png            # Image 2
│       │   └── screenshot1.jpg       # Capture d'écran
│       │
│       ├── projet-2/                 # Dossier pour le projet 2
│       │   ├── video.mp4
│       │   ├── dashboard.png
│       │   └── resultats.jpg
│       │
│       └── projet-3/                 # Et ainsi de suite...
│           ├── demo.webm
│           └── galerie/
│               ├── img1.jpg
│               ├── img2.jpg
│               └── img3.jpg
```

## 🎬 Comment ajouter une vidéo locale

### 1. Placez votre vidéo dans le dossier approprié

Par exemple, pour le projet 1 :
```
images/projets/projet-1/video.mp4
```

### 2. Dans `projects.js`, ajoutez le chemin relatif

```javascript
{
    id: 1,
    title: 'E-commerce Analytics...',
    // ... autres propriétés ...
    video: 'images/projets/projet-1/video.mp4',  // Chemin relatif depuis la racine
    // ...
}
```

### Formats de vidéo supportés :
- ✅ **MP4** (recommandé) - `video.mp4`
- ✅ **WebM** - `video.webm`
- ✅ **OGG/OGV** - `video.ogg`
- ✅ **MOV** - `video.mov`

## 📸 Comment ajouter des images locales

### 1. Placez vos images dans le dossier du projet

Par exemple :
```
images/projets/projet-1/
├── dashboard-powerbi.png
├── resultats-segmentation.jpg
└── application-streamlit.png
```

### 2. Dans `projects.js`, ajoutez les chemins dans le tableau `images`

```javascript
{
    id: 1,
    title: 'E-commerce Analytics...',
    // ... autres propriétés ...
    images: [
        'images/projets/projet-1/dashboard-powerbi.png',
        'images/projets/projet-1/resultats-segmentation.jpg',
        'images/projets/projet-1/application-streamlit.png'
    ],
    // ...
}
```

### Formats d'images supportés :
- ✅ **JPG/JPEG** - `image.jpg`
- ✅ **PNG** - `image.png`
- ✅ **GIF** - `image.gif`
- ✅ **WebP** - `image.webp`
- ✅ **SVG** - `image.svg`

## 📝 Exemple complet dans `projects.js`

```javascript
{
    id: 1,
    title: 'E-commerce Analytics : Segmentation Client & Prédiction RFM',
    description: 'Projet complet d\'analyse de données...',
    category: 'data-science',
    technologies: ['Python', 'Power BI', 'Streamlit'],
    image: '🛒',
    github: 'https://github.com/username/project',
    demo: 'https://demo-url.com',
    date: '2024',
    detailDescription: 'Ce projet complet combine...',
    
    // Vidéo locale
    video: 'images/projets/projet-1/demo.mp4',
    
    // Images locales
    images: [
        'images/projets/projet-1/dashboard.png',
        'images/projets/projet-1/segmentation.png',
        'images/projets/projet-1/streamlit-app.png'
    ],
    
    longDescription: 'Développement d\'une solution complète...',
    features: [
        'Analyse exploratoire des données clients',
        'Calcul des métriques RFM',
        // ...
    ]
}
```

## 🔄 Mélanger vidéos YouTube et fichiers locaux

Vous pouvez utiliser soit YouTube/Vimeo, soit des fichiers locaux, soit les deux :

```javascript
// Option 1 : Vidéo YouTube
video: 'https://www.youtube.com/watch?v=VIDEO_ID',

// Option 2 : Vidéo locale
video: 'images/projets/projet-1/video.mp4',

// Option 3 : Pas de vidéo
video: '',
```

## ⚠️ Important pour le déploiement

### Avant de pousser sur GitHub :

1. **Vérifiez la taille des fichiers** :
   - Les vidéos peuvent être très lourdes
   - GitHub a une limite de 100 MB par fichier
   - Pour les gros fichiers, utilisez [Git LFS](https://git-lfs.github.com/) ou hébergez-les ailleurs

2. **Optimisez vos médias** :
   - **Vidéos** : Compressez-les (utilisez des outils comme HandBrake)
   - **Images** : Optimisez-les (utilisez TinyPNG, ImageOptim, etc.)

3. **Structure des chemins** :
   - Utilisez toujours des chemins **relatifs** (commençant par `images/...`)
   - N'utilisez **jamais** de chemins absolus (comme `C:\Users\...`)

## 🛠️ Outils recommandés

### Pour optimiser les images :
- [TinyPNG](https://tinypng.com/) - Compression PNG/JPG en ligne
- [Squoosh](https://squoosh.app/) - Compression avancée
- [ImageOptim](https://imageoptim.com/) - Application desktop

### Pour optimiser les vidéos :
- [HandBrake](https://handbrake.fr/) - Compression vidéo gratuite
- [FFmpeg](https://ffmpeg.org/) - Outil en ligne de commande

## 📋 Checklist avant déploiement

- [ ] Tous les chemins sont relatifs (commencent par `images/...`)
- [ ] Les fichiers existent aux emplacements indiqués
- [ ] Les vidéos sont optimisées (< 50 MB recommandé)
- [ ] Les images sont optimisées
- [ ] Testez localement que tout s'affiche correctement
- [ ] Vérifiez que les noms de fichiers n'ont pas d'espaces (utilisez des tirets ou underscores)

## 🧪 Tester localement

Pour tester votre portfolio avec les médias locaux :

1. Ouvrez `index.html` dans votre navigateur
2. Cliquez sur un projet pour voir les détails
3. Vérifiez que les images et vidéos s'affichent correctement

Si les médias ne s'affichent pas :
- Vérifiez les chemins dans `projects.js`
- Vérifiez que les fichiers existent aux emplacements indiqués
- Ouvrez la console du navigateur (F12) pour voir les erreurs

