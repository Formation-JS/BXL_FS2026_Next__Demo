'use client';

import { authLoginAction } from '@/actions/auth.action';
import { useActionState } from 'react';

export default function LoginForm() {

    const [state, handleSubmit, isPending] = useActionState(authLoginAction, { error: null });

    return (
        <form action={handleSubmit}>
            <div>
                <label htmlFor="input-email">Email : </label>
                <input type="email" id='input-email' name='email'
                    className='border border-pink-800' />
            </div>
            <div>
                <label htmlFor="input-pwd">Mot de passe : </label>
                <input type="password" id='input-pwd' name='pwd'
                    className='border border-pink-800' />
            </div>
            <div>
                <button type="submit" disabled={isPending}
                    className='bg-pink-800 px-2 py-1 rounded text-violet-200 disabled:bg-gray-700'>
                    Connexion
                </button>
                {state.error && (
                    <span className='text-violet-600'>{state.error}</span>
                )}
            </div>
        </form>
    );
}