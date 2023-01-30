'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@apollo/client';
import { useState, useEffect, useRef } from 'react';

import { getMessageQuery, postMessageQuery, messageSubscriptionQuery } from '../../components/gqlQueries';
import SignOut from '../../components/signOut';
import SignInScreen from '../../components/singInScreen';
import TypeBox from '../../components/typeBox';
import '../../styles/message.scss';

export default function MessagePage() {
    const messageArrayInit: any = [];
    let previousInput: any;
    const prevInRef = useRef(previousInput);
    const bottomRef = useRef<HTMLDivElement>(null);
    const [messageArray, setMessageArray] = useState(messageArrayInit);

    const { data: session } = useSession();

    const { loading, error, data, subscribeToMore } = useQuery(getMessageQuery, {
        onCompleted: (data) => {
            let tempMessageArray = [];
            for (let i: number = 0; i < data.getMessages.length; i++) {
                tempMessageArray.push(data.getMessages[i]);
            }
            setMessageArray(tempMessageArray);
        },
    });

    useEffect(() => {
        subscribeToMore({
            document: messageSubscriptionQuery,
            updateQuery: (prev: any, { subscriptionData }: any) => {
                // if (!subscriptionData.data) return prev;
                console.log('___________________________________________________________________________');
                console.log('prev no wayayay', prev, prevInRef.current);
                console.log('new', subscriptionData.data.newMessage);
                if (subscriptionData.data.newMessage != prevInRef.current) {
                    prevInRef.current = subscriptionData.data.newMessage;
                    console.log(subscriptionData.data.newMessage.id, subscriptionData.data.newMessage.content);
                    let tempMessageArray = [
                        {
                            __typename: 'Message',
                            id: subscriptionData.data.newMessage.id,
                            content: subscriptionData.data.newMessage.content,
                            sender: subscriptionData.data.newMessage.sender,
                        },
                    ].concat(prev.getMessages);

                    // console.log(tempMessageArray);
                    subscriptionData = null;
                    console.log('grr');
                    return {
                        getMessages: tempMessageArray,
                    };
                }
                // return;
            },
        });
    }, [previousInput, subscribeToMore]);

    if (session) {
        if (loading) {
            return (
                <div className='flexCenter'>
                    <h1>Loading...</h1>
                </div>
            );
        } else if (error) {
            return (
                <div className='flexCenter'>
                    <h1>Error fetching messages: {error.message}</h1>
                </div>
            );
        }

        if (bottomRef && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }

        // console.log('previous', prevInRef.current);

        return (
            <>
                <div className='messagePageSignOut'>
                    <SignOut />
                </div>

                <ul className='messageScroller'>
                    {data.getMessages
                        .slice(0)
                        .reverse()
                        .map((Message: any) => (
                            <li className='contentBox' key={Message.id}>
                                <div className='profilePicture' />

                                <div className='contentWrapper'>
                                    <div className='messageHeader'>
                                        <h1 style={{ color: `#${Message.sender.displayColour}` }}>{Message.sender.displayName}</h1>
                                        <div />
                                        <p className='messageIdDisplay'>{Message.id}</p>
                                    </div>
                                    <p>{Message.content}</p>
                                </div>
                            </li>
                        ))}

                    <li>
                        <div ref={bottomRef} className='scrollTo' />
                    </li>
                </ul>

                <TypeBox />
            </>
        );
    }

    return <SignInScreen />;
}
