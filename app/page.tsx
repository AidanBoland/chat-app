'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function HomePage() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <h1>Signed in as {session.user?.email}</h1> <br />
                <button onClick={() => signOut()}>Sign out</button>
                <Link href={'/messagePage'}>lol</Link>
            </>
        );
    }

    return (
        <>
            <h1>Not signed in</h1> <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
}
