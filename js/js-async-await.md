# Async await

## Le mot cle async

Le mot cle `async` est utilise pour ecrire des fonctions qui gerent des actions asynchrones. Nous enveloppons notre logique asynchrone dans une fonction precedee du mot cle `async`. Ensuite, nous invoquons cette fonction

```js
async function myFunc(){

}

myFunc();
```

Nous pouvons egalement creer des fonctions fleche `async`

```js
const myFunc = async () => {
    
}

myFunc();
```

Les fonctions `async` renvoient toujours une promesse. Cela signifie que nous pouvons utiliser la syntaxe de promesse tradionnelle, comme `.then()` et `.catch()` avec nos fonctions `async`. Une fonction `async` retournera une des trois valeurs suivantes

- si rien n'est renvoye par la fonction, elle renverra une promesse avec une valeur resolue de `undefined`
- si une valeur non promise est renvoyee par la fonction, elle renverra une promesse resolue a cette valeur
- si une promesse est renvoyee par la fonction, elle renverra simplement cette promesse

```js
asyn function fivePromise(){
    return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
})
```

## L'operateur await

Les fonctions `async` sont presque toujours utilisees avec le mot cle supplementaire `await` a l'interieur du corps de la fonction

Le mot cle `await` ne peut etre utilise qu'a l'interieur d'une fonction `async`. `await` est un operateur : il renvoie la valeur resolue d'une promesse. Etant donne que les promesses se resolvent dans un laps de temps indetermine, `await` s'arretent ou s'interrompent, l'execution de notre fonction `async` jusqu'a ce qu'une promesse donnee soit resolue

Dans la plupart des situations, nous avons affaire a des promesses renvoyees par des fonctions. Generalement, cest fonctions se font via une bibliotheque. Nous pouvons `await` la resolution de la promesse qu'il renvoie a l'interieur d'une fonction `async`

```js
async function asyncFunctionExemple() {
    let resolvedValue = await myPromise();
    console.log(resolvedValue);
}

asyncFunctionExemple();
```

Dans notre fonction `async`, `asyncFunctionExemple()` nous utilisons `await` pour arreter notre execution jusqu'a ce que `myPromise()` soit resolu et assignons sa valeur resolue a la variable `resolvedValue`

## Ecrire des fonctions async

Nous avons vue que le mot cle `await` interrompt l'execution d'une fonction `async` jusqu'a ce qu'une promesse ne soit plus en attente. N'oubliez pas le mot cle `await`. Cela peut sembler evident, mais cela peut etre une erreur difficile a detecter car notre fonction fonctionnera toujours - elle n'aura tout simplement pas les resultats souhaites

Nous allons explorer cela en utilisant la fonction suivante, qui renvoie une promesse qui se resout `Yay, I resolved` apres un delai de 1 seconde

```js
let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Yay, I resolved');
        }, 1000);
    });
}
```

Nous allons maintenant ecrire deux fonctions `async` qui invoquent `myPromise()`

```js
async function noAwait(){
    let value = myPromise();
    console.log(value);
}

async function yesAwait(){
    let value = await myPromise();
    console.log(value);
}

noAwait(); // Prints : Promise { <pending> }
yesAwait(); // Prints : Yay, I resolved
```

Dans la premiere fonction `async`, `noAwait()`, nous avons laisse le mot cle `await` de cote. Dans la seconde, `yesAwait()`, nous l'avons inclus. La fonction `noAwait()` se connecte la console avec `Promise { <pending> }`. Sans le mot `await`, l'execution de la fonction n'a pas ete interrompue. Le `console.log()` sur la ligne suivante a ete execute avant la resolution de la promesse

N'oubliez pas que l'operateur `await` renvoie la valeur resolue d'une promesse. Lorsqu'elle est utilisee correctement dans `yesAwait()`, la variable `value` s'est vu attribuer la valeur resolue de la promesse `myPromise()`, tandis que dans `noAwait()`, `value` s'est attribuer l'objet promesse lui-meme

## Gestion des promesses dependantes

La vraie beaute de `async...await` c'est quand nous avons une serie d'actions asynchrones qui dependent les unes des autres. Par exemple, nous pouvons faire une demande de reseau basee sur une requete a une base de donnees. Dans ce cas, nous aurions besoin d'attendre pour faire la demande reseau jusqu'a ce que nous ayons les resultats de la base de donnees. Avec la syntaxe native promise, nous utilisons une chaine de fonctions `.then()` en veillant a renvoyer correctement chacune

```js
function nativePromiseFunction(){
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
    .then((secondValue) => {
        console.log(secondValue);
    });
}
```

- dans notre fonction, nous utilisons deux fonctions qui renvoient des promesses : `returnsFirstPromise()` et `returnsSecondPromise()`
- nous invoquons `returnsFirstPromise()` et veillons q ce que la premiere promesse soit resolue en utilisant `.then()`
- dans le rappel de notre premier `.then()`, nous enregistrons la valeur resolue de la premiere promesse, `firstValue`, puis retournons `returnsSecondPromise(firstValue)`
- nous en utilison un autre `.then()` pour imprimer la valeur resolule de la deuxieme promesse sur la console de

Voici comment nous ecrirons une fonction `async` pour accomplir la meme chose

```js
async function asyncAwaitVersion(){
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
}
```

- nous marquons notre fonction comme `async`
- dans notre fonction, nous creons une variable `firstValue` assigne a `await returnsFirstPromise()`. Ce moyen `firstValue` se voit attribuer la valeur resolue de la promesse attendue
- ensuite, nous connections `firstValue` a la console
- ensuite, nous creons une variable `secondValue` affecte a `returnsSecondPromise(firstValue)`. Par consequent, `secondValue` est affecte avec la valeur resolue de cette promesse
- enfin, nous connectons `secondValue` a la console

Bien que l'utilisation de la syntaxe `async...await` puisse nous epargner du travail de frappe, la reduction de la longueur n'est pas le point principal. Etant donne les deux versions de la fonction, la version `async...await`  ressemble plus au code synchrone, ce qui aide les developpeurs a maintenir et a deboguer leur code. La syntaxe `async...await` facilite egalement le stockage et la reference aux valeurs resolues des promesses situees plus loin dans notre chaine, ce qui est une tache beaucoup plus difficile avec la syntaxe de promesse native

## Gestion des erreurs

Lorsque `.catch()` est utilise avec une longue chaine de promesses, il n'y a aucune indication de l'endroit ou l'erreur a ete renvoyee dans la chaine. Cela peut rendre le debogage difficile

Avec `async...await`, nous utilisons `try...catch` pour la gestion des erreurs. En utilisant cette syntaxe, non seulement nous sommes capables de gerer les erreurs de la meme maniere que nous le faisons avec du code syncrhone, mais nous pouvons egalement detecter les erreurs synchrones et asynchrones. Cela facilite le debogage

```js
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
 
usingTryCatch();
```

N'oubliez pas que puisque les fonctions `async` remvoient des promesses, nous pouvons toujours utiliser les promesses natives `.catch()` avec une fonction `async`

```js
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}
 
let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
```

Ceci est parfois utilise dans la portee globale pour detecter les erreurs finales dans le code complexe

## Gestion des promesses independantes

Rappelez-vous que `await` arrete l'execution de notre fonction `async`. Cela nous permet d'ecrire facilement du code de style synchrone pour gerer les promesses dependantes. Mais que ce passe-t-il si notre foncdtion `async` contient plusieurs promesses qui ne dependent pas des resultats les unes des autres pour s'executer ?

```js
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}
 
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
```

Dans la `waiting()` fonction, nous suspendons notre fonction jusqu'à ce que la première promesse se résolve, puis nous construisons la deuxième promesse. Une fois que cela est résolu, nous imprimons les deux valeurs résolues sur la console.

Dans notre `concurrent()` fonction, les deux promesses sont construites sans utiliser await. Nous avons ensuite `await` chacun leurs résolutions pour les imprimer sur la console.

Avec notre `concurrent()` fonction, les opérations asynchrones des deux promesses peuvent être exécutées simultanément. Si possible, nous voulons commencer chaque opération asynchrone dès que possible ! Au sein de nos   `async` fonctions, nous devrions toujours tirer parti de la concurrence , la possibilité d'effectuer des actions asynchrones en même temps.

Remarque : si nous avons plusieurs promesses vraiment indépendantes que nous aimerions exécuter entièrement en parallèle, nous devons utiliser des `.then()`fonctions individuelles et éviter d'arrêter notre exécution avec `await`.

## Await sur Promise.all

Une autre façon de tirer parti de la concurrence lorsque nous avons plusieurs promesses pouvant être exécutées simultanément consiste à utiliser un awaitfichier Promise.all().

Nous pouvons passer un tableau de promesses comme argument à Promise.all(), et il renverra une seule promesse. Cette promesse sera résolue lorsque toutes les promesses du tableau d'arguments seront résolues. La valeur de résolution de cette promesse sera un tableau contenant les valeurs résolues de chaque promesse du tableau d'arguments.

```js
async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}
```

Dans notre exemple ci-dessus, nous avons awaitla résolution de a Promise.all(). Cela Promise.all()a été invoqué avec un tableau d'arguments contenant quatre promesses (renvoyées par les fonctions requises). Ensuite, nous parcourons notre resultArrayet enregistrons chaque élément dans la console. Le premier élément de resultArrayest la valeur résolue de la asyncTask1()promesse, le second est la valeur de la asyncTask2()promesse, et ainsi de suite.

Promise.all()nous permet de tirer parti de l'asynchronicité - chacune des quatre tâches asynchrones peut être traitée simultanément. Promise.all()a également l'avantage d' échouer rapidement , ce qui signifie qu'il n'attendra pas que le reste des actions asynchrones se termine une fois que l'une d'entre elles a rejeté. Dès que la première promesse du tableau est rejetée, la promesse renvoyée par Promise.all()sera rejetée avec cette raison. Comme c'était le cas lorsque vous travailliez avec des promesses natives, Promise.all()c'est un bon choix si plusieurs tâches asynchrones sont toutes nécessaires, mais aucune ne doit en attendre une autre avant de s'exécuter.
