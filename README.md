# suipotryot.github.io

Page d'accueil qui aiguille vers les outils que je développe. Site statique (HTML/CSS/JS vanilla, pas de framework ni de build), servi tel quel par GitHub Pages depuis la branche `main`.

## Structure

```
├── index.html          page d'accueil (cartes générées depuis assets/projects.js)
├── assets/
│   ├── style.css        styles partagés (accueil + pages de doc)
│   └── projects.js      liste des projets affichés sur l'accueil
├── <projet>/             un sous-dossier par outil, une URL par outil
└── .nojekyll            désactive le traitement Jekyll de GitHub Pages
```

Chaque outil vit dans son propre sous-dossier avec sa propre URL (`suipotryot.github.io/<projet>/`), indépendant des autres.

## Mettre à jour un projet existant

### Outil web autonome (boxes.js, ConceptConstructif)

Ces outils sont buildés dans leur propre repo (Vite + `vite-plugin-singlefile`), qui produit un `dist/index.html` autonome.

1. Dans le repo source du projet : `npm run build`
2. Copier le contenu de `dist/` vers le sous-dossier correspondant ici (ex. `boxes/`, `concept-constructif/`) — attention aux assets annexes (ConceptConstructif embarque aussi `favicon.svg` et `icons.svg` à côté de `index.html`)
3. Commit + push sur `main`

Pas de mise à jour nécessaire dans `assets/projects.js` sauf si la description du projet change.

### SketchupMenuiseriesMaker

Ce n'est pas un outil web mais une extension SketchUp packagée en `.rbz`. La page de doc (`sketchup-menuiseries-maker/index.html`) pointe vers `https://github.com/i3d2c/SketchupMenuiseriesMaker/releases/latest/download/SketchupMenuiseriesMaker.rbz`, une URL stable qui suit toujours la dernière release.

Pour publier une nouvelle version :

1. Dans le repo `SketchupMenuiseriesMaker`, créer et pousser un tag `vX.Y.Z` :
   ```bash
   git tag -a v0.2.0 -m "v0.2.0"
   git push origin v0.2.0
   ```
2. Le workflow `.github/workflows/release.yml` package `src/` en `.rbz` et crée automatiquement une Release avec ce fichier en asset.
3. Rien à changer côté hub : le lien « latest » pointe automatiquement vers la nouvelle version.

Si le contenu de la doc change (présentation, installation...), éditer directement `sketchup-menuiseries-maker/index.html` ici.

## Ajouter un nouveau projet

### Cas 1 — outil web autonome (page HTML unique)

1. Builder l'outil pour obtenir un `dist/index.html` autonome (idéalement via `vite-plugin-singlefile` ou équivalent).
2. Créer un sous-dossier ici (ex. `mon-outil/`) et y copier le build.
3. Ajouter une entrée dans `assets/projects.js` :
   ```js
   {
     name: "Mon outil",
     description: "Description courte du projet.",
     url: "mon-outil/",
     kind: "Outil web",
   }
   ```
4. Vérifier en local (`python -m http.server`) puis commit + push.

### Cas 2 — projet nécessitant une doc + un téléchargement (comme SketchupMenuiseriesMaker)

1. Créer un sous-dossier ici avec une page `index.html` de présentation/installation (réutiliser les classes `.content`, `.button`, `.back-link` de `assets/style.css`).
2. Si le projet doit être packagé (zip, `.rbz`, etc.), ajouter un workflow GitHub Actions dans le repo source qui package et publie une Release sur push de tag (voir `.github/workflows/release.yml` de SketchupMenuiseriesMaker comme modèle) — le lien de téléchargement pointe alors vers `.../releases/latest/download/<fichier>`.
3. Ajouter une entrée dans `assets/projects.js`.
4. Vérifier en local puis commit + push.

## Déploiement

GitHub Pages est configuré pour servir directement la branche `main` (racine du repo) — aucune étape de build côté hub, un `git push` suffit à mettre le site à jour.
