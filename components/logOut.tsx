'use client';

import { signOut } from 'next-auth/react';

export default function SignOut() {
    return (
        <button onClick={() => signOut()} className="signOut">
            Sign Out
        </button>
    );
}
