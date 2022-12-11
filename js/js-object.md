# Les objets

## Creer un Objet literal

```js
let spaceship = {
    homePlanet: 'Earth',
    'Fuel Type': 'diesle',
    color: 'silver'
};
```

```js
const goat = {
    dietType: 'Herbivore',
    makeSound() {
        console.log('baaa');
    },
    dietType(){
        console.log(this.dietType);
    }
}
```

## Acceder aux proprietes I

Avec les points

```js
spaceship.homePlanet;
spaceship.color;
```

Avec les crochets

```js
spaceship['Fuel Type'];
```

Avec les crochets nous pouvons aussi utiliser une variable

```js
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet');
```

## Assigner des valeurs

```js
spaceship.type = 'alien';
spaceship.speed = 'Mach 5';
```

## Supprimer une valeur

```js
delete spaceship.missions;
```

## Les methodes

Il y a deux methodes pour celle-ci

```js
const alienShip = {
    invade: function () {
        console.log('Hello, we come in peace');
    }
};
```

La nouvelle methodes

```js
const alienShip = {
    invade () {
        console.console.log('Hello, we come in peace');
    }
};
```

### Appeler une methode

```js
alienShip.invade();
```

## Les objets imbriques

```js
const spaceship = {
    telescope: {
        yearBuild: 2008,
        model: '91031-XLT',
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log ('We got this!') }
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
};
```

### Acceder aux proprietes II

```js
spaceShip.nanoelectronics['back-up'].battery;
```

### Passer une methode par reference

```js
const spaceShip = {
    homePlanet: 'Earth',
    color: 'red'
}

let paintIt = obj => {
    obj.color = 'glorious gold'
}
```

## Les boucles

```js
for(let crewMember in spaceShip.crew) {
    console.log(`${crewMember}: ${spaceShip.crew[crewMember].name}`);
}
```

## Privacy

Pour montrer qu'une variable ne doit pas etre accessible directement on utilise la convention de nommage avec underscore

```js
const bankAccount = {
    _amount: 1000
}
```

### Les Getters

```js
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if(this._firstName && this._lastName) {
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name';
        }
    }
}

person.fullName;
```

Let getters (et setters) n'ont en general pas besoin des guillemets pour etre appeles. Ils s'appellent comme les proprietes

### Les Setters

```js
const person = {
    _age: 37,
    set age(newAge){
        if(typeof newAge === 'number'){
            this._age =newAge;
        } else {
            console.log('You must assign a number to age');
        }
    }
}

person.age = 38;
```

## Les fonctions d'usine

```js
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase)
        }
    }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare();
```

## Les proprietes raccourcies

Lorsque le nom des parametres recus et des proprietes sont les memes, une methodes raccourcies nous permet de les ecrirent

```js
consst monterFactory = (name, age) => {
    return {
        name,
        age
    }
}
```

## La destructuration

Pour les objets

```js
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preference: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

//const residence = vampire.residence;
const { residence } = vampire;
const { day } = vampire.preference;
```

Pour les tableaux

```js
let a, b, rest;
[a, b] = [10, 20];
console.log(a) // 10
console.log(b) // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest) // Array [30, 40, 50]
```

## Les methodes d'objets integrees

Voir la page sur [MND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)

- `Object.keys()`: retourne les cles de l'objets
- `Object.entries()`: retourne un tableau contenant les paires cles, valeurs
- `Object.assign()`: permet de copier les proprietes d'un objets dans un autre et de lui en ajouter
- `Object.hasOwnProperty()`: retourne un booleen indiquant si l'objet possede la propriete specifiee
- `Object.values()`: renvoie un tableau contenant les valeurs des proprietes

```js
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentinent: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot);

const robotEntries = Object.entries(robot);

const newRobot = Object.assign({laserBlaster: true, voiceRecognitionz: true}, robot);

const robotValues = Object.values(robot);

console.log(robot.hasOwnProperty('model'));
```

## Fonctions de callback (de rappel)

```js
const higherOrderFunc = param => {
   param();
   return `I just invoked ${param.name} as a callback function.`; 
}

const anotherFunc = () =>{
    return "I'm being invoked by the higer-order function";
}

higherOrderFunc(anotherFunc);
```

```js
const addTwo = num => num + 2;

const checkConsistentOutput => (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    
    (checkA === checkB) ? return func(val) : 'inconsistent results';
}

checkConsistentOupt(addTwo, 5);
```

## Les iterateurs

- `.forEach()`
- `.map()`
- `.filter()`
- `.reduce()`
- `.findIndex()`
- `.some()`
- `.every()`

### filter

```js
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(word => word.length < 6);
```

### findIndex

```js
const jumbleNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbleNums.findIndex(num => num < 10);

console.log(lessThanTen); // output: 3, index du premier element evaluer
console.log(jumbleNums[3]); // output: 5
```

### reduce

```js
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(summedNums);
```

```js
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 100);

console.log(summedNums);
```

### some

La methode `some()` teste si au moins un element du tableau passe le test implemente par la fonction fournie

```js
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even)); // output: true
```

Renverra `false` , quelle que soit la condition, si elle est utilisee sur un tableau vide

### every

La methode `every()` permet de tester si tous les elements d'un tableau verifient une condition donnee par une fonction en argument

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 38, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); // output: true
```

Renvoie `true` pour n'importe quelle condition utilisee sur un tableau vide
