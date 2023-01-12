'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import Router from 'next/router';

export default function SignOut() {
    return (
        <Link href={'/'}>
            <button onClick={() => signOut()} className="signOut">
                Sign Out
            </button>
        </Link>
    );
}
