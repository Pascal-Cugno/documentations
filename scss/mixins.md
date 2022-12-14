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
