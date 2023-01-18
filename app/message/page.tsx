'use client';

import '../../styles/message.scss';
import SignOut from '../../components/signOut';
import NeedToSignIn from '../../components/singInScreen';
import MessageCard from '../../components/messageCard';
import { useSession } from 'next-auth/react';
import { useQuery } from '@apollo/client';

import { getMessageQuery, postMessageQuery } from '../../components/gqlQueries';

export default function MessagePage() {
    const { data: session } = useSession();

    const { loading, error, data } = useQuery(getMessageQuery);

    if (session) {
        if (loading) {
            return (
                <>
                    <div className="messagePageSignOut">
                        <SignOut />
                    </div>
                    <div className="flexCenter">
                        <h1>Loading...</h1>
                    </div>
                </>
            );
        } else if (error) {
            return (
                <div className="flexCenter">
                    <h1>Error: Error fetching messages</h1>
                </div>
            );
        }
        console.log(data);

        return (
            <>
                <div className="messagePageSignOut">
                    <SignOut />
                </div>

                <ul className="messageScroller">
                    <MessageCard userDisplayName="test123" userDisplayColour="000000" messageId="4" messageContent="test456" />
                </ul>
            </>
        );
    }

    return <NeedToSignIn />;
}
