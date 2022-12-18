# GSAP

## Les bases

```js
gsap.to('.circle', { y: 200 });
```

- `to`: methode. Il y en a quatre, `to`, `from`, `fromTo`, `set`
- `.circle`: cible
- `{ y: 200 }`: objet contenant les differentes proprietes

En dehos des propriete de transform, les autres proprietes css s'ecrivent de la meme maniere qu'en JavaScript

## Les propriete de l'objet

- `duration`
- `delay`
- `ease` : `bounce`, `elastic`... [visualizer](https://greensock.com/docs/v3/Eases)
- `repeat`: -1 pour l'infini
- `yoyo`: true pour une animation alternate
- `onUpdate`: prend une fonction js qui permet de lancer la fonction lorsque l'animation est en cours
- `stagger`: permet de donner un temps de decalage si plusieurs elements sont dans la meme animation
  - le petit soucis et que du coup l'animation recommence toujours a partir de zero. On peut donc mettre un objet dans stagger qui prendre les propriete `yoyo` et `repeat` et prendre `each` qui permet de donner le decallage
- on peut egalement donncer la propriete `from` dans `stagger` pour savoir a partir de quel position l'animation commence. Par exemple `center` pour la faire partir du centre

```js
gsap.to('.circle', {
    y: -300,
    duration: 1,
    onUpdate: () => {
        document.querySelector('.circle img').setAttribute('src', 'hello.png')
    },
    stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true,
        from: 'center'
    }
})
```

## Les timelines

```js
const timeline = gsap.timeline(repeat: -1, yoyo: true);
timeline.to('.bob', {x: 100});
timeline.to('.bob', {y: -250});
time.to('.bob', {x: 250});
```
