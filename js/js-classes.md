# Les classes

- [Doc](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)

```js
class Dog {
    constructor(name){
        this._name = name;
        this._behavior = 0;
    }
    
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }

    incrementBehavior(){
        this._behavior++;
    }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
```

## L'heritage

Lorsque plusieurs classes partagent des proprietes ou des methodes, elles deviennent des candidats a l'heritage.

Avec l'heritage, vous pouvez creer une classe parent (egalement appelee superclasse) avec des proprietes et des methodes partagees par plusieurs classes enfants (egalement appelees sous-classes). Les classes enfants heritent des proprietes et des methodes de leur classe parent.

Nous allons donc creer une classe parent pour nos animaux

```js
class Animal {
    constructor(name){
        this._name = name;
        this._behavior = 0;
    }
    
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }

    incrementBehavior(){
        this._behavior++;
    }
}
```

Nous pourrons ensuite les faire heriter a nos animaux avec la possibilite de leur rajouter des methodes ou autre en plus

```js
class Cat extends Animal{
    constructor(name, usesLitter){
        super(name);
        this._usesLitter = usesLitter;
    }
}
```

- `extends` : permet d'heriter des methodes de la classe parente
- `super()` : permet d'envoyer les arguments au constructeur du parent pour savoir ou mettre les choses

## Methode static

Il est parfois possible d'avoir des methodes qui ne sont accessiblent que dans la classes parente et non dans les sous-classes. Pour ce faire il suffit de rajouter le mot cle `static` devant le nom de la methode
