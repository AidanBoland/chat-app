'use client';
import { signOut } from 'next-auth/react';

//a sign out button

export default function SignOut() {
    return (
        <button onClick={() => signOut()} className='button'>
            Sign Out
        </button>
    );
}
