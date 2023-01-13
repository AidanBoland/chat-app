'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import SignOut from '../components/logOut';
import SignIn from '../components/SignIn';
import '../styles/home.scss';

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
        <div className="infoContainer">
            <div>
                <h2>Retar.Chat</h2>
                <h1>Please sign in to access the chat</h1>
                <SignIn />
            </div>
        </div>
    );
}
