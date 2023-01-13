'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import SignOut from '../components/logOut';
import SignIn from '../components/SignIn';

export default function HomePage() {
    const { data: session } = useSession();
    if (session) {
        return (
            <div className="infoContainer">
                <div className="infoSubContainer">
                    <h2>Retar.Chat</h2>
                    <h1>Thank you for Signing In!</h1>
                    <Link href="/message" className="button">
                        Continue to Chat
                    </Link>
                    <SignOut />
                </div>
            </div>
        );
    }

    return (
        <div className="infoContainer">
            <div className="infoSubContainer">
                <h2>Retar.Chat</h2>
                <h1>Please sign in to access the chat</h1>
                <SignIn />
            </div>
        </div>
    );
}
