# SCSS

## Installation de Sass

- [Installer NodeJS](https://nodejs.org/)
  - `node -v` : permet de verifier si node est bien installe et connaitre sa version
  - `npm -v` : permet de verifier si npm est bien installe et connaitre sa version
- `npm -g install sass` :  permet d'installer Sass
  - enlever `-g` pour l'installation uniquement sur le projet
  - `sass --version` : permet de connaitre la version de sass
- `npm init`
- remplacer la partie `test` dans le fichier `package.json` par un script de lancement de sass

```js
"scripts": {
    "sass": "sass --watch ./sass/main.scss:./public/css/style.css --style expanded"
}
```

Les differents style de sass sont

- `nested`
- `expanded`: fichier avec indentation standard
- `compact`
- `compressed`: fichier minifie

Il suffit de lancer le script avec la commande `npm run sass`
