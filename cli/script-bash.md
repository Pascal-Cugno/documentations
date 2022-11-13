# Script bash

Il exsite certaines conventions a suivre pour s'assurer que votre ordinateur est capable de trouver et d'executer vos scripts Bash. Le debut de votre fichier de script doit commencer par `#!bin/bash` sur sa propre ligne. Cela indique a l'ordinateur quel type d'interpreteur utiliser pour le script. Lors de l'enregistrement du fichier de script, il est recommande de placer les scripts couramment utilises dans le repertoire `~/bin/`

Les fichiers de script doivent egalement disposer de l'autorisation "executer" pour leur permettre d'etre executes. Pour ajouter cette autorisation a un fichier avec le nom fichier `script.sh` utilisez

```bash
chmod +x script.sh
```

Votre terminal execute un fichier a chaque ouverture pour charger sa configuration. Sur les shells de style Linux, c'est `~/.bashrc` et sur OSX, c'est `~/.bash_profile`. Pour vous assurer que les scripts dans `~/bin/` sont disponibles, vous devez ajouter ce repertoire a votre `PATH` dans votre fichier de configuration

- `PATH=~/bin:$PATH`

Desormais, tous les scripts du repertoire `~/bin` peuvent etre executes de n'importe ou en tapant le nom du fichier

Pour le lancer le script

```bash
./script.sh
```

## Variables

Dans les scripts bash ou le terminal, les variables sont declarees en definissant le nom de la variable egal a une autre valeur. Par exemple, pour definir la variable `greeting` sur "Bonjour", on utilise la syntaxe

```bash
greeting="Hello"
```

Notez qu'il n'y a pas d'espace entre le nom de la variable, le signe egal ou "Bonjour"

Pour acceder a la valeur d'une variable, on utilise le nom de la variable precede d'un signe `$`.

```bash
echo $greeting
```

## Conditions

Lors d'un script bash, vous pouvez utiliser des conditions pour controler quel ensemble de commande dans le script s'execute. Utilsez `if` pour commencer le conditionnel, suivi de la condition entre crochets `[]`

Assurez vous de laisser un espace entre un crochet et l'instruction conditionnelle.

`then` commence le code qui s'executera si la condition est remple. `else` commence le code qui s'executera si la condition n'est pas remplie. Enfiin, le condition est ferme par un `if`, `fi`

```bash
if [ $index -lt 5 ]
then
    echo $index
else
    echo 5
fi
```

Les scripts bash utilisent une liste specifique d'operateurs pour la comparaison. Ici, nous avons utilise `-lt` ce qui est "infierieur a". Le resultat de cette condition est que si `$index` est inferieur a 5, il s'imprimera a l'ecran. Si c'est 5 ou plus, "5" sera imprime a l'ecran

- `-eq`: egal
- `-ne`: inegal
- `-le`: inferieur ou egal
- `-lt`: inferieur a
- `ge`: superieur ou egal
- `gt`: superieur a
- `-z`: est nul

Lors de la comparaison des chaines, il est recommande de mettre la variable entre guillemets. Cela evite les erreurs si la variable est nulle ou contient des espaces. Les operateurs courant pour comparrer des chaines sont :

- `==`: egal
- `!=`: inegal

Par exemple, pour comparer si les variables `foo` et `bar` contiennent la meme chaine

```bash
if [ "$foo" == "$bar" ]
```

## Les boucles

Il existe 3 facons differentes de boucler dans un script bash : `for`, `while` et `until`

### for

Une boucle `for` est utilise pour parcourir une liste et executer une action a chaque etape. Par exemple, si nous avions une liste de mots stockes dans une variable `paragraphe`, nous pourions utiliser la syntaxe suivante pour les imprimer a l'ecran

```bash
for word in $paragraph
do
    echo $word
done
```

### while et until

Dans les script bash `until` et `while` sont tres siilaires. `while` continue de boucler tant que la condition fourni est vraie, tandis que `until` boucle jusqu'a ce que la condition soit vraie.

Les conditions sont etablies de la meme maniere qu'a l'interieur d'un bloc `if`, entre crochets.

```bash
while [ $index -lt 5 ]
do
    echo $index
    index=$((index + 1))
done
```

Notez que l'arithmetique dans les script bash utilise la syntaxe `$((...))` et entre parentheses, le nom de la variable.

La meme boucle pourrait egalement etre ecrite comme une boucle `until`

```bash
until [ $index -eq 5 ]
do
    echo $index
    index=$((index + 1))
done
```

## Les inputs

Pour rendre les scripts bash pluls utiles, nous devons pouvoir acceder a des donnees externes au fichier de script bash lui-meme. La premiere facon de le faire est d'inviter l'utilisateur a entrer. Pour cela nous utilisons la sytaxe `read`. Pour demander a l'utilisateur une entree et l'enregistrer dans la variable `number` nous utiliserons le code suivant

```bash
echo "Guess a number"
read number
echo "You guessed $number"
```

Une autre facon d'acceder aux donnees externes consiste a demander a l'utilisateur d'ajouter des arguments d'entree lorsqu'il execute votre script. Ces arguments sont entres apres le nom du script et sont separes par des espaces

```bash
saycolors red green blue
```

Dans le script, on y accede en utilisant `$1`, `$2`, etc, ou `$1` est le prmier argument, ici "red" et ainsi de suite. Notez que ceux-ci sont 1 indexes

Si votre script doit accepter un nombre indefini d'arguments d'entree, vous pouvez les parcourir a l'aide de la syntaxe `"$@"`. Pour notre exemple `saycolors`, nous pourrions imprimer chaque couleur en utilisant

```bash
for color in "$@"
do
    echo $done
done
```

Enfin, nous pouvons acceder a des fichiers externes a notre script. Vous pouvez affecter un ensemble de fichiers a un nom de variable a l'aide de la correspondance de modele bash standard a l'aide d'expressions regulieres. Par exemple, pour obtenir tous les fichiers d'un repertoire, vous pouvez utiliser le caractere `*`

```bash
files=/some/directory/*
```

Vous pouvez ensuite parcourir chaque fichier et faire quelque chose. Ici, affichons simplement le chemin complet et le nom du fichier

```bash
for file in $files
do
    echo $file
done
```

## Les alias

Vous pouvez configurer des alias pour vos scripts bash dans votre fichier `.bashrc` ou `.bash_profile` pour permettre d'appeler vos scripts sans le nom de fichier complet. Par exemple, si nous avons notre script `sayscolors.sh`, nous pouvons l'associer au mot `saycolors` en utilisant la syntaxe suivante

```bash
alias saycolors='./saycolors.sh'
```

Vous pouvez meme ajouter des arguments d'entree standard a votre alias. Par exemple, si nous voulons toujours que "vert" soit inclus comme premiere entree de `saycolors`, nous pourrions modifier note alias en

```bash
alias saycolors='./saycolors.sh "green"'
```
