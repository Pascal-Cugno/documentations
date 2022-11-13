# jQuery

## .ready()

La methode `.ready()` attend que le DOM de la page HTML soit pret a etre manipule. On enveloppe donc tout le comportement JavaScript a l'interieur de la methode `.ready()`. Cela garantira que la page web est rendue dans le navigateur est rendue dans le navigateur avant l'execution de tout code jQuery

```js
$(document).ready(() => {
    
});
```

## Cibler des elements

Pour creer des objets jQuery nous transmettons une chaine de caracteres a l'element `$()` qui representera un element, une classe ou un id

```js
$('p').handlerMethod();
$('.someClass').handlerMethod();
$('#someId').handlerMethod();
```

## Variable et jQuery

Il est possible de mettre un objet jQuery dans une variable. Dans ce cas la convention de nommage veut que nous la nommions avec un `$` devant son nom

```js
const $jQueryObject = $('.someClass');
```

## Le gestionnaire d'evenement

Nous utilisons le mot cle `on` qui remplecera `addEventListener`

```js
$('#login').on('click', () => {
    $loginForm.show();
}
```

## Methodes

- `.show()`: prend trois parametres optionnels pour la gestion de l'animation
- `.hide()`: prend trois parametres optionnels pour la gestion de l'animation
- `.toggle()`: prend trois parametres optionnels pour la gestion de l'animation
- `.fadeIn()`: prend trois parametres optionnels pour la gestion du temps de l'animation `$('div').fadein(1000);`
- `.fadeOut()`: prend trois parametres optionnels pour la gestion du temps de l'animation `$('div').fadeout(1000);'
- `.fadeToggle()`: prend trois parametres optionnels, la vitesse (`slow`, `fast`, duree en millisecond), easing (`linear`, `swing` par defaut), une fonction de callback
- `.slideUp()`
- `.slideDown()`
- `.slideToggle()`
- `.addClass()`
- `.removeClass()`
- `.toggleClass()`
- `.val()`
- `.html()`
- `.focus()`
- `.css()`: prend deux parametre, la regle css et sa valeur. Peut egalement prendre un objet en parametre pour utiliser plusieurs regles css (dans ce cas les regles css sont en camelCase)
  - `${'.element'}.css('color', '#000')`
  - `${'.element'}.css({color: '#000', backgroundColor: '#555', fontSize: '20px'})`
  - `.animate()`: prend deux parametres. un objet pour les regles css et une duree pour le temps de l'animation

## Evenements

- `click`
- `mouseenter`
- `mouseleave`
- `dblclick`
- `mousemove`
- `keydown`
- `keypress`
- `keyup`

## Le DOM

- `.children()`
- `.parent()`
- `siblings()`
- `.closest('.another-class')`
- `.next()`
- `.find('.another-class')`
