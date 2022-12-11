# Introduction aux requetes avec ES6

## fetch

Le premier type de requetes que nous allons aborder est les requetes GET utilisant `fetch()`

La fonction `fetch()`

- creer un objet de requete qui contient les informations pertinentes dont une API a besoin
- envoie cet objet de requete au point de terminaison d'API fourni
- renvoie une promesse qui se resout finalement en un objet de reponse, qui contient le statut de la promesse avec les informations renvoyees par l'API

Passons en revue le code passe partout a droite pour creer une requete GET avec `fetch()` etape par etape

```js
fetch('http://api-to-call/endpoint') // fetch('http://api-to-call/endpoint, {cache: 'no-cache'})
.then(response => {
    if(response.ok) {
        return response.json();
    }
    throw new Error('Request failed');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    // code to execute with jsonResponse
});
```

- tout d'abord, appelez la fonction `fetch()` et transmettez-lui une URL sous forme de chaine pour le premier argument, determinant le point de terminaison de la requete
- la methode `.then()` est chaine a la fin de la fonction `fetch()` et dans son premier argument, la reponse de la requete GET est passee a la fonction fleche de rappel. La methode `.then()` ne declenchera qu'apres que le status de promesse de `fetch()` ait ete resolu
- dans la fonction de rappel, la propriete `ok` de l'objet `response` renvoie une valeur booleenne. S'il n'y a pas d'erreurs, `response.ok` sera `true` et le code retournera `response.json()`
- si `response.ok` est une valeur fausse, notre code generera une erreur `throw`
- une deuxieme argument passe a `.then()` sera une autre fonction flechee qui sera declenchee lorsque la promesse est rejetee. Il prend un seul parametre, `networkError`. Cet objet enregistre le `networkError` si nous ne pouvions pas du tout attendre le point de terminaison
- une deuxieme methode `.then()` s'executera une que la methode `.then()` precedente aura fini de s'executer sans erreur. Il prend `jsonResponse`, qui contient l'objet renvoye `response.json()` par la methode precedente

## Introduction aux requetes POST avec fetch

Dans la partie precedente, nous avons ecrit une requete GET a l'aide de l'API fetch et gere la promesse

Maintenant nous allons utiliser `fetch()` pour construire une requete POST

```js
fetch('http://api-to-call/endpoint', {
    method: 'POST',
    body: JSON.stringify({id: '200'})
})
.then(response => {
    if(response.ok) {
        return response.json();
    }
    throw new Error('Request failed');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    // code to execute with jsonResponse
});
```

Notez que l'appel `fetch` prend deux arguments : un point de terminaison et un objet contenant les informations necessaires a la requete POST

L'objet passe a la fonction `fetch()` comme second argument contient deux proprietes : `method`, avec une valeur de `'POST'` et `body`, avec une valeur de `JSON.stringify({id: '200'});`. Ce deuxieme argument determine que cette requete est une requete POST et quelles informations seront envoyees a l'API

Une requete POST reussie renverra un corps de reponse, qui variera en fonction de la configuration de l'API

## Introduction aux requetes GET asynchrones

Nous allons rendre plus simple chainage et l'utilisation des promesses avec la fonctionalite introduite dans ES8 : `async` et `await`

La structure de cette demande est legerement differente. Nous utilions les nouveaux mots cle `async` et `await`, ainsi que les instructions `try` et `catch`

```js
const getData = async () => {
    try{
        const response = await fetch('https://api-to-call.com/endpoint');
        if(response.ok){
            const jsonResponse = await response.json();
            // code to execute with jsonResponse
        }
        throw new Error('Request failed');
    } catch(error){
        console.log(error);
    }
}
```
