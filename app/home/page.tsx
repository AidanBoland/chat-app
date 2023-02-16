'use client';

import { useSession } from 'next-auth/react';
import NeedToSignIn from '../../components/signInScreen';
import SignedIn from './signedIn';

export default function HomePage() {
    const { data: session } = useSession();
    if (session) {
        //had to extract this into another component to query the server
        return <SignedIn session={session} />;
    }

    //extracted this to be reused in the message page
    return <NeedToSignIn />;
}
