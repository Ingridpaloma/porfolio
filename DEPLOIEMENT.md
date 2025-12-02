# Guide de déploiement sur GitHub Pages

## Étapes rapides

### 1. Créer le repository GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur **New repository**
3. Nommez votre repository (ex: `portfolio` ou `mon-portfolio`)
4. Choisissez **Public** (nécessaire pour GitHub Pages gratuit)
5. **Ne cochez pas** "Initialize with README" (vous avez déjà un README)
6. Cliquez sur **Create repository**

### 2. Initialiser Git et pousser les fichiers

Ouvrez un terminal dans le dossier du portfolio et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit - Portfolio Big Data & IA"

# Ajouter le remote (remplacez par votre URL)
git remote add origin https://github.com/VOTRE-USERNAME/nom-du-repo.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

### 3. Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - Branch: `main`
   - Folder: `/ (root)`
5. Cliquez sur **Save**

### 4. Accéder à votre portfolio

Votre portfolio sera disponible à :
```
https://VOTRE-USERNAME.github.io/nom-du-repo/
```

⚠️ **Note** : Il peut falloir quelques minutes pour que le site soit accessible.

## Mises à jour futures

Pour mettre à jour votre portfolio après avoir ajouté des projets :

```bash
git add .
git commit -m "Ajout de nouveaux projets"
git push
```

Les changements seront automatiquement déployés sur GitHub Pages.

## Personnalisation avant déploiement

N'oubliez pas de :
- ✅ Modifier les informations de contact dans `index.html`
- ✅ Ajouter vos projets dans `projects.js`
- ✅ Personnaliser la section "À propos" si nécessaire
- ✅ Ajouter vos photos et vidéos dans le dossier `images/projets/` (voir `GUIDE_MEDIAS.md`)

## 📸 Gestion des médias (photos/vidéos)

Si vous utilisez des photos et vidéos locales :

1. **Organisez vos fichiers** dans `images/projets/projet-X/`
2. **Référencez-les** dans `projects.js` avec des chemins relatifs :
   ```javascript
   video: 'images/projets/projet-1/video.mp4',
   images: ['images/projets/projet-1/img1.jpg', 'images/projets/projet-1/img2.png']
   ```
3. **Optimisez vos fichiers** avant de les pousser sur GitHub :
   - Vidéos : < 50 MB recommandé (utilisez HandBrake pour compresser)
   - Images : Optimisez avec TinyPNG ou Squoosh
4. **Pour les gros fichiers** (> 100 MB), utilisez [Git LFS](https://git-lfs.github.com/)

📖 **Voir le guide complet** : `GUIDE_MEDIAS.md`

