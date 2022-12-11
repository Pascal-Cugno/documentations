# React 1

## Revision destructuring

### Destructuration des tableaux

```js
let cars = ['ferrari', 'tesla', 'cadillac'];
let [car1, car2, car3] = cars;
```

### Destructuration d'objets

```js
let destinations = {x: 'LA', y: 'NYC', z: 'MIA'};
let {x, y, z} = destinations;
```

### Destructuration des parametres de la fonction

```js
let truck = {
    model: '1977 Mustang convertible',
    maker: 'Ford',
    city: 'Detroit',
    year: '1977',
    convertible: true
};

const printCarInfo = ({model, maker, city}) => {
    console.log(`The ${model}, or ${maker}, is in the city ${city}`);
};

printCarInfo(truck);
```

## Intro a JSX

Jetons un oeil au code suivant

```js
const h1 = <h1>Hello world</h1>;
```

Quel genre de code hybride etrange est-ce ? Est-ce JS ? HTML ? Ou autre chose ?

Il semble que ce soit JS, puisqu'il commence par `const` et se termine par `;`. Si nous essayons de l'executer dans un fichier HTML, cela ne fonctionnera pas

Cependant, le code contient egalement `<h1>Hellow world</h1>`, qui ressemble exactement au HTML

La partie qui ressemble a du HTML s'appelle du JSX

## Qu'est-ce que JSX ?

JSX est une extension de syntaxe pour JavaScript. Il a ete ecrit pour etre utilise avec React. Le code JSX ressemble beaucoup au HTML

Que signifie "extension de syntaxe" ?

Dans ce cas, cela signifie que JSX n'est pas un JavaScript valide. Les navigateurs Web ne peuvent pas le lire

Si un fichier JavaScript contient du JSX, ce fichier devra etre compile. Cela signifie qu'avant que le fichier n'atteigne un navigateur Web, un compilateur JSX traduire n'importe quel JSX en JavaScript normal

## Element JSX de

Une unite de base de JSX est appelee un element JSX

Voici un exemple d'element JSX

```js
<h1>Hello world</h1>
```

## Elements JSX et leur environnement

Les elements JSX sont traites comme des expressions JavaScript. Ils peuvent aller partout ou les expressions JavaScript peuvent aller

Cela signifie qu'un element JSX peut etre enregistre dans une variable, passe a une fonction, stocke dans un objet ou un tableau

```js
const navBar = <nav>I am a nav bar</nav>;
```

```js
const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumbertach</li>,
    pointGuard: <li>Femi Billon</li>    
};
```

## Attributs en JSX

Les elements JSX peuvent avoir des attributs, tout comme les elements HTML

Un attribut JSX est ecrit a l'aide d'une syntaxe de type HTML : un nom, suivit d'un signe egal, suivi d'une valeur. La valeur doit etre entouree de guillemets

```js
const title = <h1 id='title'>Introduction to React.js: Part I</h1>;
```

## JSX imbrique

Vous pouvez imbriquer des element JSX dans d'autres elements JSX, comme en HTML

```js
<a href="https://www.exemple.com"><h1>Click</h1></a>
```

Si une expression JSX occupe plusieurs lignes, vous devez placer l'expression JSX multiligne entre parenthese

```js
(
    <a href="https://www.exemple.com">
        <h1>Click</h1>
    </a>
)
```

Les expressions JSX imbriquees peuvent etre enregistrees en tant que variables, transmises a des fonctions, etc... tout comme les expressions JSX non imbriquees.

```js
const theExemple = (
    <a href="https://www.exemple.com">
        <h1>Click</h1>
    </a>
)
```

## Regle importante

Il existe une regle : une expression JSX doit avoir exactement un element le plus externe

En d'autres termes, ce code fonctionnera

```js
const paragraphs = (
    <div id="element">
        <p>Paragraph</p>
        <p>Paragraph</p>
    </div>
);
```

Mais ce code ne fonctionnera pas

```js
const paragraphs = (
    <p>Paragraph</p>
    <p>Paragraph</p>
);
```

La premiere balise d'ouverture et la derniere balise de fermeture d'une expression JSX doivent appartenir au meme element JSX

Si vous remarquez qu'une expression JSX comporte plusieurs elements externes, la solution est generalement simple : encapsulez l'expression JSX dans une `<div></div>`

## Rendu JSX

Restituer une expression JSX signifie la faire apparaitre a l'ecran

```js
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<h1>Hello world</h1>, document.getElementById('app'));
```

Vous pouvez voir quelque chose appele `ReactDOM`. Qu'est-ce que c'est ?

`ReactDOM` est le nom d'une bibliotheque JavaScript. Cette bibliotheque contient plusieurs methodes specifiques a React, qui traitent toutes du DOM d'une maniere ou d'une autre

`ReactDOM.render()` est le moyen le plus courant de rendre JSX. Il prend une expression JSX, cree un arbre correspondant de noeuds DOM et ajoute cet arbre au DOM. C'est ainsi qu'une expression JSX apparait a l'ecran

Le premier argument de `ReactDOM.render()` est une expression JSX

Le deuxieme argument est la ou devra etre inserer l'expression JSX

## Passer une variable a ReactDOM.render()

```js
const toDoList = (
    <ol>
        <li>Learn React</li>
        <li>Become a dev</li>
    </ol>
);

ReactDOM.render(toDoList, document.getElementById('app'));
```

## Class vs className

En JavaScript le mot cle `class` est un mot reserver. Nous devons donc utiliser le mot `className` pour rajouter une class a un element JSX

```js
<h1 className="big">Hey</h1>
```

## Les balises autofermantes

En JSX, vous devez inclure la barre oblique pour les balises autofermantes.

```js
<br/>
<img src="images/chat.png"/>
```

## Inserer du JS dans du JSX

Il est possible d'inserer du JS a l'interieur d'element JSX en l'ecrivant a l'interieur d'accolage

```js
<h1>2 + 3</h1> //  print 2 + 3
<h1>{2 +  3}</h1> // print 5
```

## Variable dans JSX

Il est possible d'inserer des variables JS a l'interieur d'element JSX

```js
const name = 'Jack';

const greeting = <p>Hello, {{name}}!</p>;
```

```js
const sideLength = "200px";
 
const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

```js
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 
 
const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);
 
const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);
 
const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 
```

## Les Evenements

Les elements JSX peuvent avoir des ecouteurs d'evenement, tout comme les elements HTML. Programmer dans React signifie travailler constamment avec des ecouteurs d'evenements

Le nom d'un attribut d'ecouteur d'evenements doit etre quelque chose comme `onClick` ou `onMouseOver`

[Liste des evenements](https://reactjs.org/docs/events.html#supported-events)

```js
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}
 
<img onClick={myFunc} />
```

## Les conditions dans un element JSX

Il n'est pas possible de mettre un `if` dans un element JSX

Une solution conciste a mettre la condition en dehors de l'element JSX

```js
import React from 'react';
import ReactDOM from 'react-dom';

let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if(coinToss() === 'heads'){
  img = <img src={pics.kitty} />;
} else {
  img = <img src={pics.doggy} />;
}

ReactDOM.render(img, document.getElementById('app'));
```

Une autre solution peut etre d'utiliser un operateur ternaire

```js
const headline = (
    <h1>
    { age => drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
)
```

```js
import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(img, document.getElementById('app')
);
```

Une autre solution est l'utilsateur de l'operateur `&&`

`&&` fonctionne bien pour les conditions qui font parfois une action, mais d'autres fois ne font rien du tout

```js
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

Si l'expression de gauche est evaluee comme vraie, alors le JSX a droite de `&&` sera rendu. Si la premiere expression est fause, cependant, le JSX a droite de `&&` sera ignore et non rendu

```js
import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(favoriteFoods, document.getElementById('app')
);
```

## .map dans JSX

La methode array `.map()` revient souvent dans React

Si vous souhaitez creer une liste d'elements JSX, c'est `.map()` qu'il faut utiliser

```js
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```

## Key

Lorsque vous creez une liste dans JSX, votre liste devra parfois inclure quelque chose appele `keys`

```js
<ul>
    <li key="li-01">Exemple1</li>
    <li key="li-02">Exemple2</li>
    <li key="li-03">Exemple3</li>
</ul>
```

`key` est un attribut JSX. La valeur de l'attribut doit etre quelque chose d'unique, semblable a un attribut `id`

`keys` ne fais rien que l'on puisse voir. React les utilise en interne pour garder une trace des listes. Si vous n'utilisez pas les cles lorsque vous etes cense le faire, React peut accidentellement brouiller les elements de votre liste dans le mauvaise ordre

Toutes les listes n'ont pas besoin d'avoir des `keys`. Une liste a besoin de `keys` si l'une des conditions suivantes est vraie

- les elements de la liste ont de la memoire d'un rendu a l'autre. Par exemple, lorsqu'une liste de tache s'affiche, chaque element doit, "se souvenir" s'il a ete coche. Les elements ne doivent pas devenir amnesique lorsqu'ils sont rendus
- l'ordre d'une liste peut etre melange. Par exemple, une liste de resultats de recherche peut etre melangee d'un rendu a l'autre

Si aucune de ces conditions n'est vraie, alors vous n'avez pas a vous soucier des `keys`. Si vous n'etes pas sur, cela ne fait jamais de mal de les utiliser


## React.createElement

Vous pouvez ecrire du code React sans utiliser JSX du tout

La majorite des programmeurs React utilisent JSX, mais vous devez comprendre qu'il est possible d'ecrire du code React sans lui

L'expression JSX suivante

```js
const h1 = <h1>Hello word</h1>
```

peut etre reecrit sans JSX

```js
const h1 = React.createElement(
    "h1",
    null,
    "Hello world"
);
```
