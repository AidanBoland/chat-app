'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import SignOut from '../components/logOut';
import SignIn from '../components/SignIn';

export default function HomePage() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <h1>Signed in as {session.user?.email}</h1> <br />
                <SignOut />
                <Link href={'/message'}>lol</Link>
            </>
        );
    }

    return (
        <>
            <h1>Not signed in</h1> <br />
            <SignIn />
        </>
    );
}
