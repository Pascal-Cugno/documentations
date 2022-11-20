# Git

## Git workflow

![git workflow](git%20workflow_fullwidth.svg)

1. `working directory`: repertoire de travail ou on fera : creer, modifier, supprimer et organiser les fichiers
2. `staging area`: on y listera tous les changements apporte au repertoire de travail
3. `repository`: le referentil ou Git stocke en permanence les modification en tant que differentes versions du projet

Le flux de travail Git consiste a modifier des fichiers dans le repertoire de travail, a ajouter des fichiers a la zone de preparation et a enregistrer les modifications dans un referentiel Git. Dans Git, nous enregistrons les modifications avec un commit

## Commandes de base

- `git status`: permet de verifier l'etat des modifications dans le `working directory`
- `git add <filename>`: permet d'ajouter le ou les fichiers a la `staging area`. `git add .` permet de cibler tous les fichiers
- `git diff <filename>`: permet de voir les differences entre le fichier du `working directory` et le fichier present dans la `staging area` ou le `repository`
- `git commit -m "message"`: permet de transferer les fichiers present dans la `staging area` vers le `repository` en y inscrivant un commentaire max de 50 caracteres
- `git log`: permet de lister les commits. On peut rajouter `--oneline` pour les avoir sur une ligne

## Retour en arriere

Lorsque nous travaillons avec git, nous apportons parfois des modifications dont nous voulons nous debarrasser. Git propose quelques fonctionnalites de type gomme qui nous permettent d'annuler les erreurs lors de la creation du projet.

- `git show HEAD`: montre le dernier commit
- `git checkout HEAD <filename>`: permet de restaurer le fichier avant le de le passer au staging. Annule donc les modifications dans le repertoire de travail
  - `git checkout -- <filename>` est une version raccourci
- `git reset HEAD <filename>`: permet de retirer un fichier du staging
- `git reset <commit_SHA>`: revient au commit stipuler dans la commande. Prend les 7 premiere caractere du commit

## La mise en cache

Il est possible que lorsque l'on nous devions faire un changement sur une ature branch ou un autre fichier avant de pouvoir continuer ce que nous faisions. Probleme, nous ne voulons pas commit maintenant le code que nous faisons car il n'est pas pret et nous ne pouvons pas quitter une branch sans avoir commit avant. La solution est de mettre notre code en cache, faire les changements que nous souhaitions faire et revenir a notre code precedent.

- `git stash`: mets le code en cache
- `git stash pop`: recupere notre code

## Configuration de Git

Voir l'[article](https://help.github.com/articles/setting-your-username-in-git) pour la configuration

Voir l'[article](https://help.github.com/articles/caching-your-github-password-in-git) pour le mot de passe

- [Site de git](https://git-scm.com) pour la doc
- `git --version`
- `git config --global user.name "Name"`
- `git config --global user.email "Email"`
- `git config --global user.name`
- `git config --global user.email`
- `git config user.name "Name"` : configuration pour un repo en particulier
- `git config user.email "Email"` : configuration pour un repo en particulier
- `git config user.name` : configuration pour un repo en particulier
- `git config user.email` : configuration pour un repo en particulier

## Git et Github

Voir les [cours](https://skills.github.com/) d'utilisation de github sur github

Voir la [doc](https://docs.github.com/en) de github

Voir l'[article](https://help.github.com/en/categories/authenticating-to-github) pour l'authentification ssh

Voir la doc [markdown](https://code.visualstudio.com/docs/languages/markdown) pour vscode

Voir la doc [markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) sur Github

Voir le [controle](https://code.visualstudio.com/docs/introvideos/versioncontrol) du flux git sur vscode

- `git remote -v` : permet de verifier les repos sur git et github
