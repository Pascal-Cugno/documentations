# Sass

## Les variables

- `$color: #000;`

## Les combinateurs

Combinateur parent

```css
.parent {
    background-color: red;
}
```

Combinateur descendant

```css
.parent .descendant {
    background-color: red;
}
```

Combinateur enfant

```css
.parent > .child{
    background-color: red;
}
```

Combinateur adjacent

```css
.parent + .adjacent{
    background-color: red;
}
```

## Combinateur et sass

```scss
.parent {
    background-color: red;
    .descendant{
        color: green;    
    }
    >.child{
        color: orange;
    }
    +.adjacent{
        color: yellow;
    }
    &__element{
        color: pink;
    }
    &:hover{
        background-color: orange;
    }
}
```
