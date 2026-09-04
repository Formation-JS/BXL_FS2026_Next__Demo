'use client';

import { authGetSession, authLogoutAction } from '@/actions/auth.action';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {

    const [session, setSession] = useState(null);

    useEffect(() => {
        authGetSession().then(currentSession => {
            setSession(currentSession);
        })
        console.log('NavBar Effect !');
    });

    console.log('NavBar Render !');
    
    return (
        <nav className='flex flex-row gap-6'>
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
            <ul className='flex flex-row gap-1'>
                {session ? (
                    <li>
                        <button onClick={authLogoutAction}>
                            Deconnexion
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <button>
                                <Link href="/login">Connexion</Link>
                            </button>
                        </li>
                        <li>
                            <button>
                                <Link href="/register">S'enregistrer</Link>
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}