# Les promesses

## Construire une promesse

Pour creer un nouvel objet `Promise`, nous utilisons le mot cle `new` et la methode constructeur `Promise`

```js
const executorFunction = (resolve, reject) => {};
const myFirstPromise = new Promise(executorFunction);
```

La methode constructeur `Promise` prend un parametre de fonction appele la fonction executeur qui s'execute automatiquement lorsque le constructeur est appele. La fonction d'executeur demarre generalement une operation asynchrone et dicte comment la promesse doit etre reglee

La fonction executeur a deux parametres de fonction, generalement appeles fonction `resolve()` et `reject()`. Les fonctions `resolve()` et `reject()` ne sont pas definies par le programmeur. Lorsque le constructeur `Promise` s'execute, JavaScript transmet ses propres fonctions `resolve()` et `reject()` a la fonction d'execution

- `resolve` est une fonction a un argument. Sous le capot, s'il est invoque, `resolve()` changera le statut de la promesse de `pending` a `fulfilled`, et la valeur resolue de la promesse sera definie sur l'argument passe dans `resolve()`
- `reject` est une fonction qui prend une raison ou une erreur comme argument. Sous le capot, s'il est invoque, `reject()` changera le statut de la promesse de `pending` a `rejected`, et la raison du rejet de la promesse sera definie sur l'argument passe dans `reject()`

```js
const executorFunction = (resolve, reject) => {
    if(someCondition) {
        resolve('I resolved');
    } else {
        reject('I rejected');
    }
}
const myFirstPromise = new Promise(executorFunction);
```

## Promesse avec setTimeout

```js
const returnPromiseFunction = () =>{
    return new Promise(resolve, reject) => {
        setTimeout(() => {resolve('I resolved')}, 1000);
    }
}
```

## Consommer des promesses

L'etat initial d'une promesse asynchrone est `pending`, mais nous avons la garantie qu'elle sera reglee. Comment dire a l'ordinateur ce qui doit se passer alors ? Les objets Promise sont livres avec une methode bien nommee `.then()`. Cela nous permet de dire : "J'ai une promesse, quand elle s'arrange, alors voice ce que je veux qu'il se passe ..."

`.then()` est une fonction d'ordre superieur - elle prend deux fonctions de rappel comme arguments. Nous appelons ces rappels des getsionnaires. Lorsque la promesse est reglee, le gestionnaire approprie sera appele avec cette valeur reglee

- Le premier gestionnaire, parfois appele `onFulfilled`, est un gestionnaire de reussite, et il doit contenir la logique de resolution de la promesse
- Le deuxieme gestionnaire, parfois appele `onRejected`, est un gestionnaire d'echec, et doit contenir la logique du rejet de la promesse

Nous pouvons invoquer `.then()` avec un, les deux ou aucun gestionnaire.

## Fonctions de rappel de reussite et d'echec

Pour gerer une promesse "reussite", ou une promesse qui s'est resolue, nous invoquons la promesse `.then()`, en transmettant une fonction de rappel de gestionnaire de succes

```js
const prom = new Promise((resolve, reject) =>{
    resolve('Yay');
})

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}

prom.then(handleSuccess); // Prints: 'Yay'
```

Decomponsons ce qui se passe

- `prom` est une promesse qui se resoudra a `Yay`
- nous definissons une fonction, `handleSuccess()`, qui imprime l'argument qui lui est passe
- nous invoquons `prom`, la fonction `.then()` prend la fonction `handleSuccess()` en argument
- puisque resolus `prom`, `handleSuccess()` est appelle avec `prom` la valeur resolue

Avec une consommation de promesse typique, nous ne saurons pas si une promesse sera resolue ou rejetee, nous devrons donc fournir la logique pour les deux cas. Nous pouvons transmettre a la fois un rappel de succes et un rappel d'echecs a `.then()`

```js
let prom = new Promise((resolve, reject) => {
    let num = Math.random() * 100;
    if(num < 0.5){
        resolve('Yay');
    } else {
        reject('Oh no');
    }
});

const handleSuccess = (resolvedValue) =>{
    console.log(resolvedValue);
}

const handleFailure = (rejectionReason) =>{
    console.log(rejectionReason);
}

prom.then(handleSuccess, handleFailure);
```

## Exemple

```js
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1350
}

const checkInventory = (order) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if(inStock){
                resolve('Thank you. Your order was successful');
            } else {
                reject('We are sorry. Your order could not be completed because some items are sold out');
            }
         }, 1000);
    })
};

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
}

const handleFailure = (rejectReason) => {
    console.log(rejectReason);
}

checkInventory(order).then(handleSuccess, handleFailure);
```

## Utiliser catch

Une facon plus propre d'ecrire des promesses et de suivre le principe de SOC (Separation Of Concern)

Au lieu d'utiliser un `.then()` avec les deux gestionnaire de resolution de promesse en argument nous alons utiliser un `.then()` pour la resolution et un `.catch()` pour la gestion de l'erreur

```js
prom
.then(resolvedValue => {
    console.log(resolvedValue);
})
.catch(rejectReason => {
    console.log(rejectReason);
})
```

## Eviter les erreurs courantes

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
```

Ici au lieu d'avoir une chaine propre de promesses, nous avons imbrique la logique de l'une dans la logique de l'autre. Imaginez si nous traitions cinq ou dix promesses

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
```

Ici nous avons oublie de faire un return sur la promesse. Comme oublier de retourner notre promesse ne generera pas d'erreur, cela peut etre une chose tres delicate a debogguer

## Utilisation de Promise.all()

Lorsqu'elle est effectuee correctement, la composition des promesses est un excellent moyen de gerer les situations ou les operations asynchrones dependent les unes des autres ou l'ordre d'execution est important. Que se passe-t-il si nous avons affaire a plusieurs promesses, mais que nous ne nous soucions pas de l'ordre d'execution

`Promise.all()` accepten un tableau de promesses comme argument et renvoie une seule promesse. Cette promesse unique sera reglee de l'une des deux manieres suivantes

- Si chaque promesse du tableau d'arguments est resolue, la promesse renvoyee par `Promise.all()` sera resolue avec un tableau contenant la valeur de resolution de chaque promesse du tableau d'arguments
- Si une promesse du tableau est rejetee, la promesse unique renvoyee par `Promise.all()` sera immediatement rejetee avec la raison pour laquelle la promesse a ete rejetee. Ce comportement est parfois appele failing fast

```js
let myPromises = Promise.all([returnPromOne(), returnPromTwo(), returnPromThree()]);

myPromises
.then((arrayOfValues) => {
    console.log(arrayOfValues);
})
.catch((rejectReason) => {
    console.log(rejectReason);
})
```
