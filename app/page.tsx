'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import SignOut from '../components/signOut';
import NeedToSignIn from '../components/singInScreen';

export default function HomePage() {
    const { data: session } = useSession();
    if (session) {
        return (
            <div className="infoContainer">
                <div className="infoSubContainer">
                    <h2>REBAR.CHAT</h2>
                    <h1>Thank you for Signing In!</h1>
                    <input></input>
                    <Link href="/message" className="button">
                        Continue to Chat
                    </Link>
                    <SignOut />
                </div>
            </div>
        );
    }

    return <NeedToSignIn />;
}
