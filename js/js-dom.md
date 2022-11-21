# Le DOM

[document doc](https://developer.mozilla.org/fr/docs/Web/API/Document)

## Chargement des scripts

L'ancienne convention consistait a placer les scripts juste avant la balise `</body>` pour empecher le script de bloquer le reste du contenu HTML. Maintenant, la convention est de mettre la balise script dans l'element `<head>` et d'utiliser les attributs `defer` et `async`

### L'attribut defer

L'attribut `defer` specifie que les scripts doivent etre executes apres l'analyse complete du fichier HTML. Lorsque l'analyseur HTML rencontre un element `script` avec l'attribut `defer`, il charge le script mais differe l'execution reelle du JavaScript jusqu'a ce qu'il ait fini d'analyser le reste des elements du fichier HTML

```js
<script src="app.js" defer></script>
```

`defer` est utile lorsqu'un script contient des fonctionnalites qui necessitent une interaction avec le DOM. De cette facon, il garantit que l'integratlite du fichier HTML a ete analysee avant l'execution du script

### L'attribut async

L'attribut `async` charge et execute le script de maniere asynchrone avec le reste de la page web. Cela signifie que, comme pour l'attribut `defer`, l'analyseur HTML continuera a analyser le reste du code HTML pendant que le script est telecharge en arriere plan. Cependant, avec l'attribut `async`, le script n'attendra pas que la page entiere soit analysee : il s'executera immediatement apres son telechargement

```js
<script src="app.js" async></script>
```

`async` est utile pour les scripts qui sont independants des autres scripts afin de fonctionner en consequence. Ainsi, si le moment exact ou le fichier de script est execute n'a pas d'importance, le chargement asynchrone est l'option la plus appropriee car il optimise le temps de chargement de la page website

### Attendre le chargement du DOM

On peut aussi attendre le chargement du DOM avec

```js
const app = () => {

};
// On peut aussi utiliser un objet pour l'utilisation de module au lieu d'une fonction

document.addEventListener('DOMContentLoaded', app);
```

## Traverser le DOM

- [Node doc](https://developer.mozilla.org/fr/docs/Web/API/Node)
- [parentNode doc](https://developer.mozilla.org/fr/docs/Web/API/Node/parentNode)

Chaque element a une propriete `parentNode` et un `children`. La propriete [parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) retourne le parent de l'element specifie. La propriete `children` retourne un tableau contenant les enfants de l'element specifie. Si l'element n'a pas d'enfant, elle retournera `null`

```js
let parentElement = document.querySelector('class').parentNode;
let childElement = document.querySelector('class').children;
```

## Creer et inserer des elements

- [createElement doc](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [appendChild doc](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

## Supprimer un element

- [removeChild doc](https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild)
- [hidden doc](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden)

## Les evenements

- [event doc](https://developer.mozilla.org/fr/docs/Web/Events)

### Ajouter un evenement

```js
eventTarget.addEventListener('click', function);
```

### Supprimer un evenement

```js
eventTarget.removeEventListener('click', function);
```

## Propriete de l'objet evenement

Voir la [doc](https://developer.mozilla.org/fr/docs/Web/API/Event)

JavaScript stocke les evenement sous forme d'objet evenement avec leurs donnees et fonctionnalites associees sous forme de proprietes et de methodes. lorsqu'un evenement est declenche, l'objet evenement peut etre passe comme argugment a la fonction de gestionnaire d'evenement.

```js
function eventHandlerFunction(event){
    console.log(event.timestamp);
}

eventTarget.addEventListener('click', eventHandlerFunction);
```

- [target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
- [type](https://developer.mozilla.org/en-US/docs/Web/API/Event/type)
- [timeStamp](https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp)

### Les evenement de la souris

- `click`
- `wheel`
- `mousemove`
- `mousedown` : est declenche lorsque le bouton est enfonce
- `mouseup` : est declenche lorsque le bouton est relache
- `mouseover` : se declenche lorsque la souris entre dans le contenu d'un element
- `mouseout` : se declenche lorsque la souris sort du contenu d'un element

### Les evenements du clavier

- `keydown` : se declenche a l'appuie sur une touche
- `keyup` : se declenche a lorsque la touche est relachee
- `keypress` : se declenche lorsque la touche est appuyee puis relachee

- `img.src`:
- `img.src.match('ressource name')`
