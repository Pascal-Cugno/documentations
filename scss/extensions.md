# Les extensions

Une mixin produit de grandes quantite de code repetitifs, et un selecteur normal ne sera pas compatible avec BEM.

## Utilisez les extensions Sass

Les extensions sont tres similaires aux mixins. Vous ecrivez un bloc de code et vous comptez sur Sass pour le reutiliser, ce qui nous epargne la tache de devoir le retaper indefiniment. Mais contrairement au mixins, pas besoin de les declarer avec un identifiant specifique - il suffit de les ecrire comme un simple selecteur

```scss
.typography{
    color: #15dea5;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.7;
}
```

Ensuite, pour etendre un selecteur a `.typography` ,tapez `@extend` suivi du nom du selecteur

```scss
h1{
    @extend .typography;
}
```

## Uilisez les placeholders

Vous remarquez que j'ai dit "etendre a" et pas juste "etendre" dans le paragraphe ci-dessus ? C'est parce que vous n'etes pas en train d'etendre le selecteur `.typography-content`. Vous etes en train d'etendre le selecteur `h1` ou selecteur `.typography`

Regardons le CSS compile pour y voir plus clair

```scss
.typography, h1{
    color: #15dea5;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.7;
}
```

Notez que vous ne voyez pas de code issu de l'extension au sein du selecteur `h1`, mais que Sass a ajoute `h1` a la liste des selecteurs  pour l'ensemble des regles

Avec les mixins, Sass inclut le contenu du mixin partout où il est appelé, ce qui a pour conséquence un tas de répétitions. Mais si vous utilisez @extend sur h1, vous dites à Sass que plutôt que de dupliquer les propriétés au sein de h1, vous voulez que h1 utilise l’ensemble de règles issu d’un autre sélecteur – dans le cas présent,  .typography. Du coup, Sass “étend” h1 aux règles de  .typography dans toute la feuille de style et l’ajoute à la liste.

Mixin duplique un ensemble de règles alors que @extend duplique le sélecteur.

Si vous déployez @extend .typography dans plein d’autres sélecteurs, vous ne vous retrouverez pas avec des tas de règles dupliquées. À la place, tous les sélecteurs concernés seront ajoutés à la liste aux côtés de  .typography 

Avec les mixins, Sass inclut le contenu du mixin parout ou il est appele, ce qui a pour consequence un tas de repetitions. Mais si vous utilisez `@extend` sur `h1`, vous dites a Sass que plutot que de dupliquer les proprietes au sein de `h1`, vous voulez que `h1` utilise l'ensemble de regles issu d'un autre selecteur - dans le cas present, `.typography`. Du coup, Sass etend `h1` aux regles de `.typagraphy` dans toute la feuille de style et l'ajoute a la liste

Quand vous regardez la liste des sélecteurs qui suivent  .typography, vous voyez beaucoup d’éléments que nous utilisons déjà un peu partout dans notre code mais pas  .typography. C’est parce que son but n’est pas de modifier un élément, mais plutôt de servir de placeholder (ou de terrain de base, si on veut) pour d’autres sélecteurs auxquels il doit être étendu.

Okay ; donc, en suivant cette logique on pourrait décider de renommer .typography par  .placeholder-typography  , mais avoir dans son CSS des sélecteurs qui ne sont utilisés nulle part est une mauvaise idée 🔥. Les sélecteurs inutilisés augmentent la taille de votre fichier et ajoutent de la confusion inutilement. Ce n’est pas notre but. En plus, ils pourraient sérieusement vous compliquer la tâche le jour où vous aurez besoin de déchiffrer ce qui se passe.

N’oublions pas que nous essayons de faire en sorte que votre futur vous soit content, ne serait-ce que pour lui éviter de construire une machine à voyager dans le temps pour revenir se venger, et ce au risque de créer une faille spatio-temporelle qui aurait pour inévitable conséquence d’annihiler le reste de l’humanité.

L’humanité vous remercie donc pour vos efforts.

Comment faire pour utiliser `.typography` et l'etendre aux autres classes sans le declarer comme un selecteur ? Sass a la rescousse. Sass a un placeholder integre pret a l'emploi, que vous pouvez utiliser pour contenir votre ensemble de regles et garder un code propre et ordonne plutot que d'utiliser un selecteur standard - il se materialise avec le prefixe `%`

```scss
%typography {
  color: $colour-primary;
  font-size: 2rem;
  font-weight: 100;
  line-height: 1.7;
}
```

Lorsque vous utilisez le préfixe pourcentage (%) devant votre sélecteur plutôt que le point qu’on utilise d’habitude pour les classes, Sass crée un placeholder.

On peut créer des extensions aux placeholders Sass, aussi appelés “classes silencieuses”, de la même façon qu’on le fait avec les sélecteurs. On peut réutiliser nos placeholders partout dans le code, comme on le ferait avec des sélecteurs.

```scss
%typography {
  color: $colour-primary;
  font-size: 2rem;
  font-weight: 100;
  line-height: 1.7;
}
h1 {
@extend %typography;
}
textarea {
  @extend %typography;
}
button {
  @extend %typography;
}
input {
  @extend %typography;
}
```

En n’appliquant que les sélecteurs qui s’étendent au placeholder, votre CSS devient plus propre et plus explicite. Aucune confusion et pas de code dupliqué : jackpot ! 🙌
