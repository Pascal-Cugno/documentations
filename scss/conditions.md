# Les conditions

```scss
@mixin heading-shadow($colour: $colour-primary, $size: $heading-shadow-size){
  @if ( lightness($colour) < 25% ) {
      $colour: lighten($colour, 10%);
  }@else{
      $colour: darken($colour, 10%);
  }
  text-shadow: $size $size $colour;
}
```
