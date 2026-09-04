
export default function AuthLayout({ children }) {
  return (
    <main className='p-3'>
      <h1 className='text-3xl text-pink-600'>Authentification</h1>
      { children }
    </main>
  );
}
