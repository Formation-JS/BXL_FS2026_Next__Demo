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
  - `/fleur/v3` : Streaming de composant + Pagination (SearchParams)
- `/contact` : Formulaire de contact avec Action server
- `/login` : Formulaire de connexion
- `/register` : Formulaire de création de compte

### Lien avec une WebAPI
Pour la démo, l'api utiliser est [WebAPI](https://github.com/Formation-JS/BXL_FS2026_Next__Demo_WebAPI).  
Celle-ci est basé sur json-server pour simuler une Web API.

#### Contenu de l'API
- **Users** → Login
- **Messages** → Page Contact 

### Gestion des utilisateurs
Dans la démo, l'authentification à été mis en place "à la main" en utilisant les cookies.  

Il est possible d'utiliser des packages qui permettre de mettre en place le mecansime d'authentification en Next.js. Ceux-ci vous permettre de gagner du temps et de bénificier de fonctionnalité avancé (exemple : Connection avec Google).  
Exemple non exhaustif des packages possible : 
- [Auth.js](https://authjs.dev/getting-started/installation?framework=next.js)
- [Supabase ](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Better-Auth](https://better-auth.com/docs/integrations/next)