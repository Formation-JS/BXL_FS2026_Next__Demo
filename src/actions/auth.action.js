'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function authLoginAction(prevState, formData) {
    // Pour la démo : pas de validation avec zod (no time :D)
    const data = Object.fromEntries(formData);

    // Traitement des erreurs du form
    if (!data.email || !data.pwd) {
        return {
            error: 'Le formulaire est invalide'
        };
    }
    console.log(data);

    // Contacter la web api pour se connecter (→ JWT)
    const res = await fetch(`${process.env.URL_WEB_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: data.email,
            password: data.pwd
        })
    });

    // Traitement de la requete
    // - En cas d'erreur
    if (!res.ok) {
        console.log(await res.json());

        return {
            error: 'Les crédentials sont invalides'
        };
    }

    // - En cas de succes
    const resData = await res.json();

    //? Création d'une session dans les cookies
    const cookieManager = await cookies();

    cookieManager.set(
        "session", // Nom du cookie
        JSON.stringify(resData), // Les données du cookie (en string !!!)
        { // La config du cookie
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60,
            path: '/'
        }
    );

    //? Redirection en fin de traitement
    redirect('/');
}

export async function authLogoutAction() {
    const cookieManager = await cookies();
    cookieManager.delete('session');

    redirect('/')
}

export async function authGetSession() {
    return (await cookies()).get('session')?.value;
} 