# Docker

## Les commandes de base

- `docker version`
- `docker info`
- `docker` ou `docker --help` ou `docker <command>` ou `docker <command> --help`

## Difference entre image et conteneur

- une image est constituee des fichiers binaires, des librairies et du code source qui compose l'application
- un conteneur correspond a l'instance, en cours d'execution, de l'image

## Lancer et stoper un conteneur

- `docker container run --publish 80:80 nginx` : demarre un nouveau conteneur utilisant l'image nginx telecharger sur DockerHub
  - la partie `publish 80:80` expose le port local 80 de la machine hote, et redirige le trafic a l'application executee dans le conteneur sur sont port 80
- `docker container ls` affiche la liste des conteneur en cours
- `docker container ls -a` affiche la liste de tous les conteneurs
- `docker container stop <name/container id>` stop le conteneur
- `docker container run --publish 80:80 --detach nginx`
  - l'option `--detach` permet d'executer le demarrage du conteneur en arriere plan, redonnant la main sur la console
- `docker container run --publish 80:80 --detach --name <name> nginx` permet de donner un nom au conteneur, autrement docker en choisi un aleatoirement
- `docker container rm <name/container id>` supprime definitivement un conteneur
  - peut supprimer egalement une liste de conteneur en les mettant a la suite
  - avec l'option `-f` avant le nom du conteneur permet de supprimer un conteneur en cours d'execution
- 