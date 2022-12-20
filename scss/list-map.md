# Les listes et les maps

## Creer une liste

```scss
$padding-dimensions: 1rem 2rem 3rem;
```

Maintenant, utilisons la valeur 2rem issue de $font-size pour renseigner la valeur de la taille de texte de nos labels. Pour accéder aux valeurs individuelles d’une liste, utilisez la fonction  nth()  suivie du nom de la liste et l’index de l’élément souhaité au sein de la liste :

```scss
$font-size: 7rem 5rem 4rem 2rem;
.form{
  &__field {
      & label {
        font-size: nth($font-size, 2);
      }
  }
}
```

On veut utiliser la valeur 5rem située dans la liste `$font-size` pour le label
de notre formulaire `font-size`,  on appelle donc `nth($font-size, 2)`. Pourquoi 2 ? 5rem est la deuxieme valeur dans $font-size.

Les listes permettent de regrouper des ensembles de valeurs. Mais si vous revenez sur votre code, disons dans quelques mois, elles peuvent être un peu difficiles à lire. Regarder une liste et essayer de se rappeler l’usage de ses éléments  peut vous filer une bonne migraine ou alors vous forcer à scroller dans toute votre codebase. Dans quelques mois, même dans quelques minutes, vous aurez probablement oublié les indices des différentes valeurs de $font-size. Et c’est normal, mais il existe une solution.

## Creer des maps

Les listes sont souvent difficiles à lire et à mémoriser parce qu’il n’y a pas vraiment de contexte pour lister leur contenu, c’est juste un ensemble de valeurs regroupées. C’est pour ça qu’existent les maps de Sass ! Elles sont très semblables aux listes, sauf qu’elles assignent à chaque valeur un nom sous forme d’une paire clé/valeur :

```scss
$font-size: (logo:7rem, heading:5rem, project-heading:4rem, label:2rem);
```

En assignant chaque valeur à une clé, ou un nom,  c’est beaucoup plus simple de se souvenir et de comprendre son utilité. Ici nous avons assigné la valeur 7rem à la clé logo, 2rem à la clé label, etc. Si c’est plus clair, c’est plus simple. Si c’est plus simple, c’est mieux .👍 

Pour ceux d’entre vous qui connaissent d’autres langages informatiques, sachez qu’en Sass les maps sont l’équivalents des hashs, ou objets en JavaScript, mais ne portent juste pas le même nom.

Pour accéder à la valeur d’une map, c’est aussi un peu différent. Avec les maps, il faut utiliser la fonction  map-get() ; celle-ci nécessite deux arguments : le premier est le nom de la map (ici $font-size), et le second est le nom de la clé (ici label).

```scss
$font-size: (logo:7rem, heading:5rem, project-heading:4rem, label:2rem);
.form{
  &__field {
    & label {
        font-size: map-get($font-size, label);
      }
  }
}
```
