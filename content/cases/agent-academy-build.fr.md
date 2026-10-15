## Le brief
Agent Academy est une école que lisent les agents : de vrais skills, prompts, serveurs MCP et modèles de bots, classés par métier, chacun avec son lien source et sa licence. L’accueil a une seule mission : montrer ce qu’il y a dedans et remettre un prompt à copier. Contraintes : 10 langues, clair et sombre, les liens longs ne débordent jamais, le même padding de carte partout.

## Les règles qui ont tenu
- **Du neutre plus un accent.** Chaque style utilise une gamme neutre et un seul accent ; le contraste du texte reste à 4,5:1 ou plus.
- **Chaque module vient d’UI Hub.** Chaque bloc nomme l’élément Hub dont il est porté : id, aperçu et code d’origine. Quand le portage s’en écarte, la raison est notée.
- **Les captures tranchent.** Rien n’est livré avant que les captures ordinateur et mobile, dans les deux thèmes, soient vérifiées : débordements, coupures, padding inégal.

## Ce qui a changé d’un tour à l’autre
Les premiers tours choisissaient d’abord un look, puis cherchaient des composants. Résultat : du décor sans fonction, refusé. À partir du tour quatre, l’ordre s’est inversé : choisir le composant Hub de chaque module, le porter depuis sa source, puis le thématiser avec des tokens. C’est aussi pourquoi trois styles peuvent partager une même structure de page : seuls les tokens, les polices et les modules signature changent.

## Comment fonctionne le changement de style
Un petit script fixe `<html data-skin>` avant le premier rendu, à partir de `?skin=`, puis du choix enregistré, sinon A. Clair et sombre sont un interrupteur à part. Le CSS de chaque style est limité à son skin : changer de style ne charge rien de nouveau et ne clignote jamais.
