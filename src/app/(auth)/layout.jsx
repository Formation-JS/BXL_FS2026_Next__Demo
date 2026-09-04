// Le dossier (auth) permet de grouper un ensemble de route pour permettre d'appliquer les mêmes fichier (layout, not-found, loading...). Celui-ci n'est pas reprit dans le routing !

export default function AuthLayout({ children }) {
  return (
    <main className='p-3'>
      <h1 className='text-3xl text-pink-600'>Authentification</h1>
      { children }
    </main>
  );
}
