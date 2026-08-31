import Link from 'next/link';

export default function NotFoundPage() {

    return (
        <main className='p-3'>
            <h1 className='text-3xl'>Perdu ?</h1>
            <p className='mb-5'>Vous êtes ici → •</p>

            <Link href='/' className='text-pink-300'>Retour à la page d'accueil</Link>
        </main>
    )
}