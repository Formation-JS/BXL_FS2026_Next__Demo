'use server'; // ← Directive pour m'assurer que les actions sont du "coté" serveur

// ! ↓ Code minimum pour une action utilisé avec le "useActionState"
// export async function nomDeLaFonctionQuiFaitLeTraitement(state, formData) {
//
//     return state;
// } 


export async function handleContactSubmitAction(state, formData) {

    console.log('Donnée recu !');
    console.log(formData);
    

    return state;
} 


