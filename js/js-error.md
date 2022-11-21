# Error

## Creer une erreur personnalisee

```js
console.log(Error('Your password is too weak'));

console.log(new Error('Your password is too weak'));
```

Creer une erreur mais n'arrete pas le programme

## Lancer une erreur

```js
throw Error('Something wrong happened');
```

Avec le mot cle `throw` l'erreur arretera le programme

## try...catch

Le bloc try...catch permet de gerer l'erreur sans l'arret du programme

```js
try{
    
} catch(e){
    console.log(e);
}
```
