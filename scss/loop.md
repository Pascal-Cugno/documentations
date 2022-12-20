# Les boucles

Les boucles, qui automatisent les taches repetitive telles que la creation d'une serie de modificateurs de couleurs, par exemple, vous epargnent un vrai calvaire tout en gardant une codebase plus petite et plus simple a gerer

```scss
$colors: (
    mint: #15DEA5,
    navy: #001534,
    seafoam: #D6FFF5,
    white: #fff,
    rust: #DB464B
);

@each $color, $hex in $colors {
    .btn--#{$color}{
        background-color: $hex;
    }
}
```

## Les structures conditionnelles

Les operations logiques vous permettent d'ecrire un meme bloc de code que vous pouvez utiliser dans differentes circonstances et que le font reagir en consequence, comme changer la couleur du texte en fonction de la couleur du fond. Par exemple si le fond est bleu fonce, alors passer le texte en blanc. Avec le temps, cela vous donne une code base plus petite, plus conscise qui est donc beaucoup plus facile a maintenir

```scss
@if (lightness(#15DEAS) > 25){
    .header{
        color: #fff;
        background-color: $mint;
    }
} @else {
    .header{
        color: #000;
        background-color: $mint;
    }
}
```
