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

        let messageArray = data.getMessages;

        let messageElements: any = [];
        for (let i = messageArray.length - 1; i >= 0; i--) {
            messageElements.push(
                <MessageCard
                    userDisplayName={`${messageArray[i].sender.displayName}`}
                    userDisplayColour={`${messageArray[i].sender.displayColour}`}
                    messageId={`${messageArray[i].id}`}
                    messageContent={`${messageArray[i].content}`}
                    key={i}
                />
            );
        }

        return (
            <>
                <div className="messagePageSignOut">
                    <SignOut />
                </div>

                <ul className="messageScroller">{messageElements}</ul>
            </>
        );
    }

    return <NeedToSignIn />;
}
