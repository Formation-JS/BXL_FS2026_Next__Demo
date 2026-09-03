'use server'; // ← Directive pour m'assurer que les actions sont du "coté" serveur
import { redirect } from 'next/navigation';
import { z } from 'zod';

// ! ↓ Code minimum pour une action utilisé avec le "useActionState"
// export async function nomDeLaFonctionQuiFaitLeTraitement(state, formData) {
//
//     return state;
// } 


const contactDataSchema = z.object({
    email: z.email({ error: 'L\'email n\'est pas valide' }),
    msg: z.string({ error: 'Le message est requis' })
        .trim()
        .min(5, { error: 'Le message doit contenir minimum 5 caracteres' })
});

export async function handleContactSubmitAction(_state, formData) {

    // Validation et conversion des données du formulaire
    const { success, data, error } = await contactDataSchema.safeParseAsync(Object.fromEntries(formData));

    // Gestion des erreurs du formulaires
    if (!success) {
        //? Renvoi un state avec les données du formulaire éronné et la liste d'erreurs
        console.log(formData, error);
        return {
            formData,
            error: z.flattenError(error)
        };
    }

    // Traitement des données

    // TODO Faire des intéractions avec : WebAPI, DB, Service web,...
    console.log('Traitement du fomulaire de contact !!!');
    console.log(data);

    // Cloture du traitement possible :
    // - Renvoi un state et actualise la page
    // - Redirection vers une autre page
    redirect('/');
}


