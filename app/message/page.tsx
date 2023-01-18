'use client';

import '../../styles/message.scss';
import SignOut from '../../components/signOut';
import NeedToSignIn from '../../components/singInScreen';
import { useSession } from 'next-auth/react';

export default function MessagePage() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <div className="messagePageSignOut">
                    <SignOut />
                </div>

                <ul className="messageScroller"></ul>
            </>
        );
    }

    return <NeedToSignIn />;
}
