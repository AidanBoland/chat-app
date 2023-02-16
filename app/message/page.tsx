'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@apollo/client';
import { useEffect, useRef } from 'react';

import { getMessageQuery, postMessageQuery, messageSubscriptionQuery } from '../../components/gqlQueries'; //getting query definitions from a seperate file for the sake of tidyness
import SignOut from '../../components/signOut'; //a signout button
import SignInScreen from '../../components/signInScreen'; //if a user gets to this page without being signed in, they will be prompted to sign in
import TypeBox from './typeBox'; //the area aat the bottom for typing messages, seperated for tidyness
import '../../styles/message.scss'; //styling

export default function MessagePage() {
    //initialising a ref. i had  a problem with subscriptions firing multiple times, so i
    //made this ref, which would be set to the last subscription's data. if a new subscription firing matched
    //this ref it would be ignored. if not, then i'd set the ref to the new subscription's data.
    //probably not the best solution but it works.
    let previousInput: any;
    const prevInRef = useRef(previousInput);

    //ref to allow auto scrolling when new messages are added
    const bottomRef = useRef<HTMLDivElement>(null);

    //nextauth session
    const { data: session } = useSession();

    //querying the db for the 20 latest messages
    const { loading, error, data, subscribeToMore } = useQuery(getMessageQuery, {
        onCompleted: (data) => {
            let tempMessageArray = [];
            for (let i: number = 0; i < data.getMessages.length; i++) {
                tempMessageArray.push(data.getMessages[i]);
            }
            //making an array of the query results
        },
    });

    useEffect(() => {
        subscribeToMore({
            document: messageSubscriptionQuery,
            updateQuery: (prev: any, { subscriptionData }: any) => {
                //that check i mentioned in the comment above, will only continue if the subscription data
                //is not identical to the previous subscription data
                if (subscriptionData.data.newMessage != prevInRef.current) {
                    //set the ref to the new subscription data
                    prevInRef.current = subscriptionData.data.newMessage;

                    //making a new array containing the new message, with the old array concatenated
                    let tempMessageArray = [
                        {
                            __typename: 'Message',
                            id: subscriptionData.data.newMessage.id,
                            content: subscriptionData.data.newMessage.content,
                            sender: subscriptionData.data.newMessage.sender,
                        },
                    ].concat(prev.getMessages);

                    subscriptionData = null;
                    return {
                        //updating the message array to be the new array of the new message + old array
                        getMessages: tempMessageArray,
                    };
                }
            },
        });
    }, [subscribeToMore]);

    if (session) {
        //if the user is logged in, render the message page

        //apollo loading and error handling
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

        //triggers on every rerender, scrolls the newest message into view
        if (bottomRef && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }

        return (
            <>
                <div className='messagePageSignOut'>
                    <SignOut />
                </div>
                <ul className='messageScroller'>
                    {/*constructs the list of messages from the message array*/}
                    {/*reversed because we want the newest message, which is at the top of the list, to be at the bottom of the screen*/}
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
                                        <p className='messageIdDisplay' style={{ marginRight: `2rem`, width: `max-content` }}>
                                            usr ID: {Message.sender.id}
                                        </p>
                                        <p className='messageIdDisplay' style={{ width: `max-content` }}>
                                            msg ID: {Message.id}
                                        </p>
                                    </div>
                                    <p>{Message.content}</p>
                                </div>
                            </li>
                        ))}

                    <li>
                        <div ref={bottomRef} className='scrollTo' /> {/*a div at the bottom with the ref to be scrolled to*/}
                    </li>
                </ul>
                <TypeBox /> {/*the typing area*/}
            </>
        );
    }

    //redering the sign in screen if the user is not logged in
    return <SignInScreen />;
}
