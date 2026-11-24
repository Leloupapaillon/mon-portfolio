# Portfolio de Léane Colombet

Cette version au style carnet présente Léane et reprend toutes les informations de son CV fourni. Le site utilise HTML, CSS et un peu de JavaScript, sans framework ni installation.

## Ouvrir le portfolio

Décompresser le ZIP puis ouvrir `index.html` dans un navigateur. Tous les fichiers doivent rester dans le même dossier, avec le sous-dossier `assets`.

## Où modifier chaque chose ?

| À modifier | Fichier |
| --- | --- |
| Présentation, âge, niveau d'études, expériences, coordonnées | `index.html` |
| Projets, titres, descriptions et liens | `index.html`, section « PROJETS » |
| Couleurs, tailles, espacements et adaptation au téléphone | `style.css` |
| Menu mobile et année du pied de page | `script.js` |
| Photo | `assets/leane-colombet.webp` |
| CV téléchargeable | `assets/CV_Leane_Colombet.pdf` |
| Petit papillon | `assets/papillon.svg` |

Les fichiers HTML, CSS et JavaScript sont mis en forme avec des sauts de ligne et des commentaires. Le CSS est organisé en dix parties numérotées : polices, réglages, base, menu, présentation, projets, CV, contact, tablettes et téléphones.

## Changer les couleurs

Les couleurs sont regroupées dans `:root`, au début de `style.css`. Par exemple, `--background` est le fond crème et `--accent` est la couleur des titres, boutons et liens.

Le papillon est un dessin SVG léger. Sa couleur est indiquée dans `assets/papillon.svg`, dans l'attribut `stroke`. La modifier également si la couleur d'accent change.

## Ajouter les vrais projets

Le CV ne détaille aucun projet. La rubrique comporte donc un espace à compléter et le lien GitHub réel de Léane. Aucune réalisation scolaire ou professionnelle n'a été inventée.

Un exemple de bloc HTML à recopier est fourni dans un commentaire à la fin de la rubrique projets. Remplacer l'encadré « Un espace pour mes réalisations » par ces blocs, puis modifier leurs titres, descriptions et liens.

## Les fichiers .woff, c'est quoi ?

WOFF signifie « Web Open Font Format ». Ce sont des fichiers de polices d'écriture : ils permettent au navigateur d'afficher les typographies choisies même si elles ne sont pas installées sur l'ordinateur du visiteur.

- `editorial.woff` : les titres.
- `editorial-italic.woff` : les titres en italique.
- `sans.woff` : les paragraphes et le menu.

Le CSS les charge avec les trois blocs `@font-face` au début de `style.css`. Les polices sont locales : aucune connexion à Google Fonts n'est nécessaire.

Pour utiliser uniquement des polices classiques, supprimer les trois blocs `@font-face` et remplacer les variables par :

```css
--font-title: Georgia, serif;
--font-text: Arial, sans-serif;
```

L'apparence de la typographie changera légèrement. Les fichiers WOFF pourront alors être supprimés.

Les polices URW Base35 utilisées sont P052 et Nimbus Sans. Leur licence est fournie dans `assets/FONT-LICENSE.txt`.

## Informations du CV

L'adresse complète, le téléphone, l'e-mail et GitHub sont présents dans la rubrique contact, conformément à la demande de reprendre toutes les informations.

Les liens e-mail et téléphone ouvrent les applications correspondantes du visiteur. Le site n'utilise aucun service d'envoi de messages.

## Touches de style

Le prénom en grand et le nom en petites capitales, la photo façon polaroid, le tracé de papillon, le carnet de projets et les cartes de CV gardent le site personnel. Les couleurs se règlent dans `:root`. Les classes `experience-card`, `skills-card` et `interests-card` servent uniquement à colorer les cartes.

Le tracé décoratif est dans `assets/envol.svg`. Les interactions restent limitées au menu mobile et à la mise à jour de l'année ; aucune bibliothèque JavaScript supplémentaire n'est ajoutée.

## Carte de contact

Les coordonnées sont présentées en lignes avec une icône, un libellé et un séparateur. Les icônes SVG sont directement dans `index.html` ; leur taille et leur couleur sont réglées par `.contact-icon` dans la partie 8 de `style.css`. Les liens e-mail, téléphone et GitHub s'appliquent à toute leur ligne.

### Centrage du contact

Sur ordinateur, la première colonne prend exactement la largeur du titre. La seconde s'étend jusqu'au bord droit de la page. `justify-self: center` centre la carte dans cet espace ; `width: min(520px, calc(100% - 48px))` conserve sa largeur maximale et une marge minimale de chaque côté. Sur téléphone, la carte passe sous le titre et occupe la largeur du contenu.

## Boutons

Tous les liens d'action utilisent maintenant la classe `button` : projets, téléchargement du CV, GitHub, message et retour en haut. Ils ont le même style, sans soulignement. Seul le bouton « Retour en haut » comporte une flèche vers le haut. Pour ajouter une action, reprendre `<a class="button" href="...">Texte du bouton</a>`. Les coordonnées conservent leurs lignes cliquables et leurs icônes.
