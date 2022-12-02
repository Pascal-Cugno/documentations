# Grid

## Proprietes

### Container

- `grid-template-columns` : definit le nombre et la taille des colonnes
- `grid-template-rows` : definit le nombre et la taille des lignes
- `grid-template` : raccourci de `grid-template-rows` et `grid-template-columns`
  - `grid-template: grid-template-rows / grid-template-columns`
- `row-gap` : goutierre des lignes
- `colum-gap` : goutierre des colonnes
- `gap` : raccourci de `row-gap` et `column-gap`
- `grid-template-areas`
- `justify-items`
- `justify-content`
- `align-items`
- `align-content`
- `grid-auto-rows`
- `grid-auto-columns`
- `grid-auto-flow`

### Item

- `grid-row-start` : fait en sorte que l'element commence a telle ligne
  - peut prendre mot cle `span` pour montrer le nombre de ligne colonne sur lesquelle il s'etend
- `grid-row-end` : fait en sorte que l'element se termine a telle ligne
- `grid-column-start` : fait en sorte que l'element commence a telle colonne
- `grid-column-end` : fait en sorte que l'element se termine a telle colonne'
- `grid-row` : raccourci de `grid-row-start` et `grid-row-end`
- `grid-column` : raccourci de `grid-column-start` et `grid-column-end`
- `grid-area` : raccourci de `grid-row-start` et `grid-row-end`, `grid-column-start` et `grid-column-end`
- `justify-self`
- `align-self`

## Creation d'une grille

Pour configurer une grille, vous devez disposer a la fois d'un conteneur de grille et d'element de grille. Le conteneur de grille sera un element parent qui contient des elements de grille en tant qu'enfants et leur applique un style et un positionnement generaux.

Pour transformer un element HTML en conteneur de grille, vous devez definir la propriete `display` de l'element sur l'une des deux valeurs suivantes

- `grid`: pour une grille au niveau bloc
- `inline-grid`: pour une grille en ligne

Ensuite, vous pouvez affecter d'autres prorietes pour disposer la grille en fonction de vos besoins

```css
.grid{
    width: 400px;
    height: 500px;
    display: grid;
    border: 2px green solid;
}

.bloc{
    background-color: beige;
    border: 2px cyan solid;
    border-radius: 10px;
}
```

Remarquez que si une `height` est specifiee sur la grille, les enfants se partagerons l'espace equitablement

## Creer des colonnes

Par defaut les grilles ne contiennent qu'une seule colonne. Si vous deviez commencer a ajouter des elements, chaque element serait place sur une nouvelle ligne, ce n'est pas vraiment une girlle. Pour changer cela, nous devons definir explicitement le nombre de lignes et de colonnes dans notre grille.

Nous pouvons definir les colonnes de notre grille en utilisant la propriete CSS `grid-template-columns`

```css
.grid{
    width: 500px;
    display: grid;
    grid-template-columns: 100px 200px;
}
```

Cette propriete cree deux changements. Tout d'abord, il definit le nombre de colonne dans la grille, dans ce cas, il y en a deux. Deuxiemement, il definit la largeur de chaque colonne. La premiere colonne aura une largeur de 100px et la seconde une largeur de 200px

Nous pouvons egalement definir la taille de nos colonnes en pourcentage de la largue de la grille entiere

```css
.grid{
    width: 1000px;
    display: grid;
    grid-template-columns: 20% 50%;
}
```

Dans cette exemple, la grille a une largeur de 1000px. Par consequent, la premiere colonne aura une largeur de 200px car elle est definie sur 20% de la largeur de la grille. La deuxieme colonne aura une largeur de 500px

Nous melanger et assortir ces deux unites. Dans l'exemple ci-dessous, il y a trois colonnes de largeur 20px, 40% et 60px

```css
.grid{
    width: 100px;
    display: grid;
    grid-template-columns: 20px 40% 60px;
}
```

Notez que dans cet exemple, la largeur totale de nos colonnes (120px) depasse la largeur de la grille (100px). Cela pourrait faire en sorte que notre grille couvre d'autres elements de la page

## Creer des lignes

Pour specifier le nombre et la taille des lignes, nous allons utiliser la propriete `grid-template-rows`

```css
.grid{
    width: 1000px;
    height: 500px;
    display: grid;
    grid-template-columns: 100px 200px;
    grid-template-rows: 10% 20% 600px;
}
```

Cette grille comporte deux colonnes et trois lignes. Dans cette exemple, la premiere ligne mesure 50px, la deuxieme ligne mesure 100px et la troisieme ligne mesure 600px

Lorsque vous utilisez des pourcentages dans ces deux proprietes, n'oubliez pas que ces lignes sont definies comme un pourcentage de la hauteur de la grille et que les colonnes sont definies comme un pourcentage de sa largeur

## Modele de grille raccourci

La propriete abregee, `grid-template`, peut remplacer les deux proprietes precedentes. Les deux `grid-template-columns` et `grid-template-rows` sont introuvables dans le code suivant

```css
.grid{
    width: 500px;
    display: grid;
    grid-template: 200px 300px / 20% 10% 70%;
}
```

Lorsque vous utilisez `grid-template`, les valeurs avant la barre oblique determineront la taille de chaque ligne. Les valeurs apres la barre oblique determinent la taille de chaque colonne. Dans cette exemple nous avons cree deux lignes et trois colonnes de differentes

## Element sur plusieurs lignes

En utilisant les proprietes `grid-row-start` et `grid-row-end`, nous pouvons faire en sorte que des elements de grille uniques occupent plusieurs lignes. N'oubliez pas que nous n'appliquons plus CSS au conteneur de grille externe, nous ajoutons du CSS aux elements situes a l'interieur de la grille

```css
.item{
    grid-row-start: 1;    
    grid-row-end: 3
}
```

Dans cette exemple, l'element HTML de la classe `item` occupera deux lignes dans la grille, les lignes 1 et 2. Les valeurs que `grid-row-start` et `grid-row-end` acceptent sont les lignes de la grille

### Raccourci

Nous pouvons utiliser la propriete `grid-row` comme raccourci.

```css
/*
.item{
    grid-row-start: 4;
    grid-row-end: 6;
}
*/

.item{
    grid-row: 4 / 6;
}
```

## Colonne de la grille

Les trois proprietes prececendes existent egalement pour les colonnes. `grid-colum-start`, `grid-column-end` et `grid-column` fonctionnent de la meme maniere que les proprietes de ligne. Ces proprietes permettent a un element de grille de s'etendre sur plusieurs colonnes.

Lors de l'utilisation de ces proprietes, nous pouvns utiliser le mot cle `span` pour commencer ou terminer une colonne ou une ligne, par rappoert a son autre extremite.

```css
.item{
    grid-column: 4 / span 2;
}
```

Cela indique a l'element de commencer dans la colonne quatre et d'occuper deux colonnes d'espace. Il produit le meme resultat que les blocs de code suivants

```css
.item{
    grid-column: 4 / 6;
}

.item{
    grid-column-start: 4;
    grid-column-end: span 2;
}

.item{
    grid-column-start: span 2;
    grid-column-end: 6;
}
```

## Super raccourci

Nous avons deja pu utiliser `gird-row` et `grid-column` comme raccourci. Nous pouvons refactoriser encore plus en utilisant la propriete `grid-area`. Cette propriete definira les positions de debut et de fin des lignes et des colunnes d'un element

```css
.item{
    grid-area: 2 / 3 / 4 / span 5;
}
```

`grid-area` prend quatre valeurs separees par des barres obliques. L'ordre est important

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

## grid-template-areas

La propriete `grid-template-areas` permet de nommer des sections de votre page Web a utiliser comme valeurs dans les proprietes `grid-row-start`, `grid-row-end`, `grid-column-start` et `grid-column-end`

```css
.container{
    max-width: 900px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 300px 120px 800px 120px;
    grid-template-areas: 
    "head   head"
    "nav    nav"
    "info   service"
    "footer footer";
}

.header{
    grid-area: head;
}
```

## Justify item

`justify-item` permet de positionner les elements sur l'axe horizontal de la grille. Cette propriete est declaree sur le conteneur de la grille

- `justify-item`
  - `start`
  - `center`
  - `end`
  - `stretch`

```css
.container{
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-items: center;s
}
```

## Justify content

Nous pouvons utiliser `justify-content` pour positionner toute la grille le long de l'axe des lignes. Cette propriete est declaree sur le conteneur de la grille

- `justify-content`
  - `start`
  - `center`
  - `end`
  - `stretch`
  - `space-around`
  - `space-between`
  - `space-evenly`

```css
.container{
    width: 1000px;
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-areas: "left right";
    justify-content: center;
}
```
## Align item

`align-items` est une propriete qui positionne les elements de la grille le long de l'axe vertical. Cette propriete est declaree sur le conteneur de la grille

- `align-items`
  - `start`
  - `center`
  - `end`
  - `stretch`

## Align content

Nous pouvons utiliser `align-content` pour positionner toute la grille le long de l'axe des colonnes. Cette propriete est declaree sur le conteneur de la grille

## Justify self et align self

Les prorpietes `justify-items` et `align-items` specifient comment tous les elements de la grille contenus dans un meme conteneur se positionneront respectivement le long des axes des lignes et des colonnes

`justify-self` et `align-self` specifie comment un element individuel doit se positionner

- `start`
- `center`
- `end`
- `stretch`

## Grille implicite

CSS Grid fournit deux proprietes pour specifier la tailler des pistes de grille ajoutees implicitement : `grid-auto-rows` et `grid-auto-columns`. Ces proprietes sont declarees sur le conteneur de la grille

```css
.container{
    display: grid;
    grid: repeat(2, 100px) / repeat(2, 150px);
    grid-auto-rows: 50px;
}
```

## Grid auto flow

En plus de definir les dimensions des lignes et des colonnes ajoutees implicitement, nous pouvons specifier l'ordre dans lequel elles sont rendues

`grid-auto-flow` specifie si de nouveaux elements doivent etre ajoutes aux lignes ou aux colonnes, et est declare sur le conteneur

- `grid-auto-flow`
  - `row` : specifie que les nouveaux elements doivent remplir les lignes de gauche a droite et creer de nouvelles lignes lorsqu'il y a trop d'elements
  - `column` : specifie que les nouveaux elements doivent remplir les colonnes de haut en bas et creer de nouvelles colonnes lorsqu'il y a trop d'elements
  - `dense` : ce mot cle invoque un algorithme qui tente de combler les trous plus tot dans la disposition de la grille si des elements plus petits sont ajoutes

Vous pouvez coupler `row` ou `column` avec `dense`, comme ceci : `grid-auto-flow: row dense;`
