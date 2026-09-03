'use client'; // ← Directive pour configurer composant en mode "client"

import { handleContactSubmitAction } from '@/actions/contact.action';
import { useActionState } from 'react';

// Composant Client (CSR)
// - Interaction avec l'utilisateur (onClic, onHover, ...)
// - Utilisation des hooks (useState, useEffect, ...)

export default function ContactForm() {

    // ↓ Lien entre l'action serveur et le composant react (client) avec un state
    const [state, handleSubmit, isPending] = useActionState(handleContactSubmitAction, { data: null, error: null });

    return (
        <form action={handleSubmit}>
            <div>
                <label htmlFor='input-email'>Email : </label>
                <input name='email' id='input-email' type='text' className='border'
                    defaultValue={state.formData?.get('email')}/>
                { state.error?.fieldErrors?.email && (
                    <span className='text-red-600'>{state.error.fieldErrors.email}</span>
                )}
            </div>
            <div>
                <label htmlFor='input-msg'>Message : </label>
                <textarea name='msg' id='input-msg'  className='border'
                    defaultValue={state.formData?.get('msg')}/>
                { state.error?.fieldErrors?.msg && (
                    <span className='text-red-600'>{state.error.fieldErrors.msg}</span>
                )}
            </div>
            <div>
                <button type="submit" disabled={isPending}>Envoyer</button>
            </div>
        </form>
    )
}