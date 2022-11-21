# Test unitaire

- utilisation de `mocah`
  - `npm init`
  - `npm install mocha -D`
  - `-D`: permet d'installer une dependance en tant que dependance de developpement. Elle apparaitra sous `devDependecies` du fichier `package.json`. Cela signifie que le package sera inclus qu'en mode developpement et ne sera pas inclus dans le bundle de production
- utilisation de la methode Node `assert.ok`

## Utilisation de mocha

Apres avoir installe Mocha en tant que dependance, nous pouvons l'executer de deux manieres.

La premiere methode (et la plus fastidieuse) consiste a l'appeler directement depuis node_modules

```js
.node_modules/mocha/bin/mocha
```

La deuxieme methode (et recommandee) consiste a ajouter un script a `package.json`. Dans l'objet `script` de package.json, on definie la valeur de `"test"` sur `mocha`

```js
"scripts": {
    "test": "mocha"
}
```

Il suffit ensuite de taper `npm test` pour le lancer

## Les bloc describe et it

Dans Mocha, nous regroupons les tests a l'aide de la fonction `describe` et definissons les tests a l'aide de la fonction `it`. Ces deux fonctions peuvent etre utilisees pour rendre votre suite de tests complete, maintenable et expressive des manieres suivantes

- structurez votre sutie de tests : vous pouvez organiser les tests en groupes imbriques qui refletent la structure de votre code d'implementation
- fournissez des mesages informatifs : vous pouvez definir vos tests a l'aide de chaines lisibles par l'homme

Si vous testez l'objet `Math` avec la methode `.max`, vous pouvez utilisr le code de test suivant

```js
describe('Math', () => {
    describe('.max', () => {
        it('returns the argument with the highest value', () => {
            // Your test goes here
        });
        it('returns -Infinity when no arguments are provided', () => {
            // Your test goes here
        });
    });
});
```

Les fonctions `describe` et `it` acceptent deux parametres : une chaine descriptive et une fonction de rappel. Bien que les fonctions soient flexibles, elles sont couramment utilisees dans la structure ci-dessus : imbriquer des blocs `describe` pour ressembler a la structure de votre code d'implementation et ecrire des tests individuels dans des blocs `it`. Cela rend votre suite de tests isolee, maintenable et expressive

## Assert

Nous avons vu plus haut comment organiser et automatiser des tests a l'aide du framework de test Mocha. Pour ecrire les tests eux-memes, on peut utiliser la methode `assert.ok` fournie par Node.js

En programmation, un test compare un resultat attendu a un resultat reel. Par exemple, nous attendons le resultat du code suivant

```js
const a = 1 + 2;
```

etre : `a` a une valeur de `3`

Pour tester la valeur enregistree `a` avec du JavaScript simple, vous devez ecrire une instruction conditionnelle comparant `a` au resultat attendu. A l'interieur de l'instruction, vous construiriez une erreur lorsque le resultat reel ne correspond pas a celui attendu

```js
if(a !== 3){
    throw 'Test failed! a is not 3'
}
```

`assert.ok()` vous permet de comparer les valeurs et de generer des erreurs si necessaire a l'aide d'un seul appel de fonction. Le petit format lisible par l'homme des fonctions vous aidera a creer une suite de tests plus expressive.

En tant que module Node, `assert` peut etre importe en haut de vos fichiers avec

```js
const assert = require('assert');
```

Vous appelez la fonction `assert` comme ceci

```js
assert.ok(a === 3);
```

Dans ce cas, `a === 3` vaut `tru`, donc aucune erreur n'est generee.

Si un argument passe a `assert.ok()` s'evalue a faux, un `AssertionError` est lance. L'erreur commumique a Mocha qu'un test a echoue et Mocha enregistre le message d'erreur dans la console

## Configuration, exercice et verification

Un test en phase de configuration, d'exercice et de verification permet d'avoir un test plus fiable, maintenant et expressif

- configuration : creer des objets, des variables et definissez les conditions dont depend votre test
- exercice : executez la fonctionnalite que vous testez
- verifiez : verifiez vos attentes par rapport au resultat de la phase d'exercice. Vous pouvez utiliser la fonction `assert` ici

Une separation claire de chaque phase facilite la lecture, la modification et la validation d'un test

```js
const assert = require('assert');

// Naive approach
describe('.pop', () => {
    it('returns the last element in the array [naive]', () => {
        assert.ok(['padawan', 'knight'].pop() === 'knight');
    });
});

// 3 phase approach
describe('.pop', () => {
    it('returns the last element in the array [3 phase]', () => {
        // setup
        const knightString = 'knight';
        const jediPath = ['padawan', knightString];

        // exercice
        const popped = jediPath.pop();
        
        // verify
        assert.ok(popped === knightString);
    })
})
```
