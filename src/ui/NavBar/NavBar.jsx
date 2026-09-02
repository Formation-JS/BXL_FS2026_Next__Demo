import Link from 'next/link'

export default function NavBar() {

    return (
        <nav>
            <ul className='flex flex-row gap-1'>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/plante">Plantes</Link>
                </li>
                <li>
                    <Link href="/fleur/v1">Fleurs (v1)</Link>
                </li>
                <li>
                    <Link href="/fleur/v2">Fleurs (v2)</Link>
                </li>
                <li>
                    <Link href="/fleur/v3">Fleurs (v3)</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}