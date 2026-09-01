# Demo NextJS

## Description de la démo

### Structure choisi 
- Langage JS / JSX
- Utilisation d'un folder `/src`
- Pas de coabitation
  - Seul les éléments necessaire au routing sont dans le dossier `/app`
  - Les autres éléments sont dans des dossiers au niveau de `/src`

### Fonctionnalité
- `/plante` : Affichage simple basé sur des données json
- `/fleur` : Affichage de donnée asynchrone _(via un service)_
  - `/fleur/v1` : Chargement de page
  - `/fleur/v2` : Streaming de composant