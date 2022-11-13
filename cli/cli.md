# CLI

## Navigation

- `ls` : **list**, liste les fichiers et dossiers d'un repertoire
  - `-a`: affiche tous les fichiers, y compris les fichiers et dossiers caches
  - `-l`: affiche tout le contenu d'un dossier au format long, ainsi que les permissions des fichiers
  - `-t`: ordonne les fichiers et les dossiers en fonction de la date a laquelle ils ont ete modifies
    - droits d'acces
    - nombre de liens durs. nombre de liens physiques vers le fichier ou le repertoire. Ce nombre inclus le lien vers le repertoire parent et le liens vers le repertoire courant
    - nom d'utilisateur du proprietaire du fichier
    - nom du groupe proprietaire du fichier
    - taille du fichier en octets
    - date et heure de la derniere modification
    - nom du fichier ou du repertoire
- `pwd`: **print work directory**, affiche le nom du repertoire dans lequel on se trouve
- `cd`: **change directory**, permet de naviguer entre les dossiers
- `mkdir`: **make directory**, creer un ou des dossiers
- `touch`: creer un ou des fichiers
- `wc`: **word count**, affiche le nombre de lignes, de mots et de caracteres
  - `-l`: print the newline count
  - `wc -l */*.txt | grep 0 > empty_files.txt`: enregistre dans un fichier, tous les fichiers vide
- `history`: affiche l'historique de toutes les commandes tapees
- `date`: affiche la date
- `clear`: nettoie la console de

## Manipulation des donnees

- `cat`: affiche le contenu d'un fichier
- `head`: affiche les 10 premieres lignes d'un fichier
  - `-n`: permet de preciser le nombre de ligne
- `cp`: copie
  - copie le contenu d'un fichier dans un autre (ecrase le contenu du fichier)
    - `cp fichierCopier fichierDestinataire`
  - copie un ou des fichiers dans un autre dossier
    - `cp fichierACopier1 fichierACopier2 dossierDestinataire`
- `*`: wildcard (caractere joker), permet de selectionner des groupes de fichier
  - `cp * dossierDestinataire` copie tous les fichiers du dossier courant dans un autre dossier
  - `cp w*.txt dossierDestinataire` selectionne tous les fichiers du dossier courant commencant par `w` et se terminant par `.txt` et les copie dans un autre dossier
  - `mv`: move, est similaire a la commande `cp` sauf qu'il deplace un fichier sans faire copie. Il peut aussi etre utilise pour renommer un fichier
  - `rm`: remove, supprime les fichiers
    - `rm -r`: supprime un dossier et tous ses dossiers enfants
  - `read`: permet de demander une information a l'utilisateur
    - `-a`: permet de diviser une chaine en tableau `read -a bar <<< $foo`. On peut y acceder ensuite avec `${foo[index]}`

## Entree et sortie

- `>`: redirige la sortie standard d'une commande vers un fichier, en ecrasant le contenu precedent
- `>>`: redirige la sortie standard d'une commande vers un fichier, en ajoutant le nouveau contenu a l'ancien
- `<`: redirige l'entree standard vers une commande
- `|`: redirige la sortie standard d'une commande vers une autre commande
- `sort`: trie les lignes de texte par ordre alphabetique
- `uniq`: filtre les lignes de texte en double et adjacentes
- `grep`: recherche un modele de texte et l'affiche
- `sed`: recherche un modele de texte, le modifie et le sort

- l'entree standard, `stdin`, est une information entree dans le termninal via le clavier ou le peripherique d'entree
- la sortie standard, `stdout`, est l'information sortie apres l'execution d'un processus
- l'erreur standard, `stderr`, est un message d'erreur genere par un processus ayant echoue

La redirection redirige l'entree standard, la sortie standard et l'erreur standard vers ou depuis un emplacement different

### Premiere redirection

```bash
echo "Hello" > hello.txt
```

La commande `>` redirigie la sortie standard vers un fichier. Ici, `"Hello"` est entree comme entree standard, et est ensuite redirige vers le fichier `hello.txt` par `>`

Pour rappel, la commande `cat` affiche le contenu d'un fichier sur le terminal

```bash
cat desert.txt > forests.txt
```

### >

`>` prend la sortie standard de la commande a gauche et la redirige vers le fichier a droite. Ici, la sortie standard de `cat desserts.txt` est redirige vers `forest.txt`

Notez que `>` ecrase tout le contenu d'origine.

### >>

Avec la commande `>>` nous faisons la meme chose que precedemment mais sans ecraser le contenu d'origine

```bash
cat desert.txt >> forest.txt
```

### <

```bash
cat < desert.txt
```

`<` prend l'entree standard du fichier de droite et l'introduit dans le programme de gauche. Ici, `desert.txt` est l'entree standard de la commande `cat`. La sortie standard apparait dans le terminal

### |

`|` est un `pipe (tuyau)`. `|` prend la sortie standard de la commande de gauche et la dirige commen entree sandard vers la commande de droite

```bash
cat volcanoes.txt | wc
```

La sortie de `cat volcanoes.txt` devient l'entree standard de `wc`. A son tour, la commande `wc`affiche le nombre de lignes, de mots et de caracteres

```bash
cat volcanoes.txt | wc | cat > islands.txt
```

Plusieurs `|` peuvent etre chaines. Ici, la sortie standard de `cat volcanoes.txt` est redirige ver la commmande `wc`. La sortie standard de `wc` est alors redirige vers `cat`. Enfin, la sortie standard de `cat` est redirigee vers `island.txt`

### sort

```bash
sort continent.txt
```

`sort` prend l'entree standard et la classe par ordre alphabetique pour la sortie standard (cela ne change pas le fichier lui meme). Ici, les continents dans `continent.txt` seront listes par ordre alphabetique

```bash
cat glacier.txt | sort > sorted-glacier.txt
```

Ici la commande prend la sortie standard de `cat glacier.txt` et la dirige vers `sort`. La sortie standard de `sort` est redirigee vers un nouveau fichier nomme `sorted-glacier.txt`

### uniq

```bash
uniq desert.txt
```

`uniq` signie "unique". Il filtre les lignes adjacentes en double sans un fichier. Ici `uniq desert.txt`, filtre les doublons de `"Sahara Desert"`, car son doublon suit directement l'instance precedente. Les doublons `"Kalahari Desert"` ne sont pas adjacents, et restent donc

```bash
sort desert.txt | uniq
```

Un moyen plus efficace d'utiliser `uniq` consiste a appeler `sort` pour classer un fichier par ordre alphabetique et a "diriger" la sortie standard vers `uniq`. En redirigeant `sort desert.txt` vers `uniq`, toutes les lignes en double sont classees par ordre alphabetique et ainsi rendues adjacentes et filtrees

```bash
sort desert.txt | uniq > uniq-desert.txt
```

Ici, nous envoyons simplement le contenu filtre a `uniq-desert.txt`

### grep

```bash
grep America continent.txt
```

`grep` signifie "global regular expression print". Il recherche dans les fichiers les lignes qui correspondent a un motif, puis renvoie les resultats. Il est egalement sensible a la casse. Ci-dessus, `grep` recherche tout ce qui correspondait a "America" dans `continent.txt`

`grep -i` permet a la commande d'etre insensible a la casse.

```bash
grep -R Artic /home/ccuser/workspace/geography
```

`grep -R` recherche tous les fichiers dans un repertoire et affiche les noms de fichiers et les lignes contenant les resultats correspondants. `-R` signifie "recursif". Ci-dessus, `grep -R` recherche dans le repoertoire la chaine "Artic" et affiche les noms de fichiers et les lignes avec des resultats correspondants

```bash
grep -Rl Artic /home/ccuser/workspace/geography
```

`grep -Rl` recherche tous les fichiers dans un repertoire et affiche uniquement les noms de fichiers avec des resultats correspondants (donc pas de lignes). `l` signifie "fichiers avec correspondances". Ici, `grep -Rl` une recherche a ete effectuee dans le repertoire pour la chaine "Artic" et affiche les noms de fichiers avec des resultats correspondants

### sed

```bash
sed 's/snow/rain/' forest.txt
```

`sed` signifie "stream editor". Il accepte l'entree standard et la modifie en fonction d'une expression, avant de l'afficher en tant que donnees de sortie. C'est similaire a "rechercher et remplacer"

Rgardons l'expression `'s/snow/rain/'` :

- `s` : signifie "remplacement". Il est toujours utilise lors de l'utilisation de `sed` pour la substitution
- `snow` : la chaine de recherche, ou le texte a trouver
- `rain` : la chaine de remplacement ou le texte a ajouter a la place

Dans ce cas, `sed` recherche le mot `snow` dans "forest.txt" et le remplace par `rain`. Il est important de noter que la commande ci-dessus ne remplacera que la premiere instance de `snow` sur une ligne

```bash
sed 's/snow/rain/g' forest.txt
```

La commande ci-dessus utilise l'expression `g`, signifiant "global". `sed` recherche ici le mot `snow` dans le fichier "forest.txt" et le remplace globalement par `rain`. Cela signifiet que toutes les occurences de `snow` sur une ligne seront transformee en `rain`

`sed` ne modifie pas le fichier original. Afin de modifier le fichier original, nous devons utiliser `-i` au debut de la commande

```bash
sed -i 's/snow/rain/g' forest.txt
```

## nano

`nano` est un editeur de fichier en ligne de commande

```bash
nano hello.txt
```

Ici nous creons un fichier appele `hello.txt`

- `ctrl + O`: enregistre le fichier
- `ctrl + X`: quitte le fichier

## Profil Bash

Un profil bash est un fichier utilise pour stocker les parametres d'environnement de votre terminal, et il est accessible sous le nom `~/.bash_profile`

Lorsqu'une session demarre, elle charge le contenu du profil bash avant d'executer les commandes

- `~`: represente le repertoire personnel de l'utilisateur
- `.`: indique un fichier cache
- le nom `~/.bash_profile` est important, car c'est ainsi que la ligne de commande reconnait le profil bash

Pour ouvrir et modifier le profil bash, vous pouvez utiliser la commande

```bash
nano ~/.bash_profile
```

Lorsque vous modifiez le profil bash, vous pouvez ajouter des commandes a executer a chaque demarrage d'une nouvelle session de terminal.

Par exemple, si vous avez une declaration `echo` dans le profil bash, cela se produira au debut d'une session de terminal

Pour activer les modification apportees dans `~/.bash_profile` pour la session en cours, utilisez la commande

```bash
source ~/.bash_profile
```

Cela rend les modificatins du profil bash disponible immediatement sans fermer le terminal et sans avoir besoin de demarrer une nouvelle session

## Aliases

Un profil bash est un fichier utilise pour stocker des parametres d'environnement de votre terminal, et il est accessible sous le nom d'`alias`

```bash
alias pd="pwd"
```

La commande `alias` permet de creer des raccourcis clavier, ou des alias, pour les commandes couramment utilisees

Ici, `alias pd="pwd"` cree l'alias `pd` de la commande `pwd`, qui est ensuite enregistre dans le profil bash

l'alias `pd` sera disponible chaque fois que nous ouvrions une nouvelle session de terminal, et la sortie de `pd` sera la meme que la commande `pwd`

## Variables d'environnement

Les variables d'environnement sont des variables qui peuvent etre utilisees dans les commandes et les programmes et contiennent des informaitons sur l'environnement

Que se passe-t-il lorsque vous stockez ceci dans `~/.bash_profile` ?

```bash
export USER="Jack"
```

1. La ligne `USER="Jack"` definit la variable d'environnement `USER` sur un nom `"Jack"`. Habituellement, la variable `USER` est definie sur le nom du proprietaire de l'ordinateur
2. La ligne `export` rend la variable disponible pour toutes les sessions enfants lancees a partir de la session dans laquelle vous vous trouvez. C'est un moyen de rendre la variable persistante dans tous les programmes
3. Sur la ligne de commande, la commande `echo $USER` renvoie la valeur de la variable. Notez que `$` est toujours utilise lors du retour de la valeur d'une variable

## Variable d'environnement PS1

`PS1` est une variable d'environnement qui definitla composition et le style de l'invite de commande

Que se passe-t-il lorsque ceci est stocke dans `~./bash_profile` ?

```bash
export PS1=">> "
```

1. `export PS1=">> "` definit la variable d'invite de commande et exporte la variable. Ici, nous changeons l'invite de commande par defaut de `$` a `>>`
2. Apres avoir utilise la commande `source`, la ligne de commande affiche la nouvelle invite de commande

## Variable d'environnement HOME

Que se passe-t-il lorsque vous tapez cette commande ?

```bash
echo $HOME
```

La variable `HOME` est une variable d'environnement qui affiche le chemin du repertoire personnel `~`. Vous pouvez specifier et modifier la variable `HOME` si necessaire, mais dans la plupart des cas, cela n'est pas necessaire

## Variable d'environnement PATH

`PATH` est une variable d'environnement qui stocke une liste de repertoire spares par deux points

Chaque repertoire contient des scripts que la ligne de commande doit executer. La variable `PATH` repertorie simplement les repertoires contenant les scripts

Par exemple de nombreuses commandes que avons vu sont stockees dans le repertoire `/bin`

```bash
/bin/pwd
```

Du coup si on tape dans le terminal

```bash
bin/pwd
```

on aura le meme resultat que si on tapez

```bash
pwd
```

## env

La commande `env` signifie "environnment" et renvoie une liste des variables d'environnement pour l'utilisateur actuel

Que se passe-t-il lorsque vous tapez la commande `env` ?

```bash
env
```

La commande `env` renvoie un certain nombre de variables, notamment `PATH`, `PWD`, `PS1` et `HOME`. Pour selectionner la valeur d'une variable d'environnement particuliere, disons `PATH`, vous pouvez utiliser la commande

```bash
env | grep PATH
```

## Bash et Powershell

| Commande | Mac / Linux | Window |
| --- | --- | --- |
| lister les fichiers / repertoire | ls | dir |
| Imprimer le repertoire de travail | pwd | chdir |
| changer de repertoire | cd | cd |
| Creer un nouveau repertoire | mkdir | md |
| Creer un nouveau fichier | touch | echo "hello" > hello.txt |
| ecran propre | clear | cls |
| afficher le contenu d'un fichier | cat | type |
| copier un fichier ou un repertoire | cp | copy |
| deplacer des fichiers | mv | ren |
| supprimer des fichiers ou des repertoires | rm | del |
| rediriger la sortie | > | > |
| pipe, ou transfert, sortie | \| | \| |
| ajouter la sortie a un autre fichier | >> | >> |
| rechercher des fichiers pour une correspondance de modele | grep | find |
