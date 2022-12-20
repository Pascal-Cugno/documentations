# Les mixins

Les mixins stockent des blocks entiers de code.

```scss
@mixin mixin-name{
    css-property: value;
}
```

## Exemple

```scss
@mixin heading-shadow{
    text-shadow: 0.55rem 0.55rem #15DEA5;
}
```

## utilisation

```scss
.form{
    &__heading{
        @include heading-shadow;
    }
}
```

## Mixins customisable

```scss
@mixin heading-shadow($color){
    text-shadow: 0.55rem 0.55rem $color;
}

.heading{
    @include heading-shadow(#fff);
}
```

## Valeur par defaut

```scss
@mixin heading-shadow($color: $color-primary){
    text-shadow: 0.55rem 0.55rem $color;
}

.heading{
    @include heading-shadow(#fff);
}

.form{
    @include heading-shadow;
}
```

## Les mixins ameliorees

Jusqu'a maintenant nos mixins sont plutot cool, on peut customiser la couleur au gre de nos besoins ou laisser telle quelle pour que ce soit la valeur par defaut qui soit utilisee. Mais il y a encore quelques petites choses que l'on peut faire pour ameliorer tout ca. Idealement, les valeurs de couleur et de taille doivent etre contenues dans des variables, pour qu'elles soient faciles a trouver et a modifier si necessaire.. Mais la mixin utilie des valeurs fixes pour la taille de l'ombre sur le texte. Remedions a cela en declarant une variable `$heading-shadow-size`

```scss
$heading-shadow-size: 0.55rem;
```

Mais plutot que de simplement remplacer les tailles d'ombres dans la mixin, mettons en application un argument `$shadow-size` et definissons `$heading-shadow-size` en tant que reglage par defaut

```scss
$heading-shadow-size: 0.55rem;
@mixin heading-shadow($color: $color-primary, $shadow-size: $heading-shadow-size){
    text-shadow: $shadow-size solid $color;
}
```

## Utiliser la directive @content

Plutôt que de devoir coder en dur le contenu d’une mixin, Sass vous offre la possibilité de déployer la directive @content.  

```scss
@mixin mobile-only {
  @media screen and (max-width: map-get($breakpoints, mobile)){
      @content;
  }
}
```

Quand Sass compile les instances de la mixin, il remplace @content par le code que vous aurez placé à l’intérieur de l’instance de la mixin.

```scss
@mixin mobile-only {
  @media screen and (max-width: map-get($breakpoints, mobile)){
      @content;
  }
}
.proj-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @include mobile-only{
      grid-template-columns: 1fr;
  }
}
```

Désormais, Sass remplacera @content par grid-template-columns: 1fr quand il compile le code :

```scss
.proj-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width: 599px) {
.proj-grid {
  grid-template-columns: 1fr;
}
}
```

En réalité, @content est un placeholder pour du code qui sera remplacé au moment de la compilation, instance par instance. En l’appliquant, nous avons créé une mixin très flexible et simple à la fois pour nos media queries.

Nous pouvons maintenant utiliser notre mixin mobile-only dans tout notre site pour l’adapter aux appareils mobiles. Utilisons-la pour ajuster la font-size du bloc .quote, tant qu’on y est :

```scss
$font-size: (
  logo:7rem, 
  quote: 6rem,
  heading:5rem, 
  project-heading:4rem, 
  label:2rem);
.quote {
  font-size: map-get($font-size, quote);
  @include mobile-only {
      font-size: map-get($font-size, quote)*0.4;
  }
```

Devient

```scss
.quote {
font-size: 6rem;
}
@media screen and (max-width: 599px) {
    .quote {
        font-size: 2.4rem;
    }
}
```
