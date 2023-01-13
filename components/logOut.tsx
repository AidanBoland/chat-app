'use client';

import { signOut } from 'next-auth/react';

export default function SignOut() {
    return (
        <button onClick={() => signOut()} className="signInOutButton">
            Sign Out
        </button>
    );
}
