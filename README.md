Starter site

This folder contains a minimal static starter website.

Files:

How to run locally:
  python -m http.server 8000
  npx serve .

Open http://localhost:8000 in your browser.
Site CV (statique)

Ce dossier contient un site CV statique minimal avec styles et petites interactions.

Fichiers importants:
- `index.html` - page principale (CV)
- `styles.css` - styles et animations
- `script.js` - interactions: toggle thème, smooth-scroll, ripple sur boutons
- `assets/favicon.svg` - favicon simple

Lancer localement:

Option 1 — Python 3:

```powershell
python -m http.server 8000
```

Option 2 — Node (serve):

```powershell
npx serve .
```

Ouvrir http://localhost:8000 dans votre navigateur.

Personnalisation rapide:
- Modifie `index.html` pour changer le nom, les expériences et les projets.
- Modifie `styles.css` pour ajuster les couleurs.
- `script.js` contient l'effet ripple et le toggle thème.

Si tu veux, je peux ajouter un formulaire de contact fonctionnel, une exportation PDF du CV, ou préparer le déploiement sur GitHub Pages.
