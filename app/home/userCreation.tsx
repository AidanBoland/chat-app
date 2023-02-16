/* eslint-disable react/no-unescaped-entities */
//user creation area
//seperated because i need to use useQuery

import SignOut from '../../components/signOut';
import { createUserQuery } from '../../components/gqlQueries';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Link from 'next/link';

export default function UserCreation(session: any) {
    const [displayNameState, setDisplayName] = useState('');
    const [displayColourState, setDisplayColour] = useState('');

    const [createUser, { loading, error, data }] = useMutation(createUserQuery);

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
    } else if (data) {
        return (
            <div className='infoContainer'>
                <div className='infoSubContainer'>
                    <h2>REBAR.CHAT</h2>
                    <h1>Thank you for Signing In!</h1>
                    <p>
                        Signed in as: <span style={{ color: `#${data.createUser.displayColour}` }}>{data.createUser.displayName}</span>
                    </p>
                    <span />
                    <Link href='/message' className='button' style={{ margin: 'auto' }}>
                        Continue to Chat
                    </Link>
                    <div style={{ margin: 'auto' }}>
                        <SignOut />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='infoContainer'>
            <div className='infoSubContainer'>
                <h2>REBAR.CHAT</h2>
                <h1>Whoops! Looks like you don't have an account!</h1>
                <p>Can't have that can we?</p>

                <form className='userCreateForm'>
                    <input
                        type='text'
                        placeholder='The name you want others to see when you say something...'
                        onChange={(e) => {
                            setDisplayName(e.target.value);
                        }}
                    />
                    <input
                        type='text'
                        placeholder='The colour you want your name to be...'
                        onChange={(e) => {
                            setDisplayColour(e.target.value);
                        }}
                    />
                </form>
                <input
                    type='button'
                    className='button'
                    style={{ margin: 'auto' }}
                    value={'Create Account'}
                    onClick={() => {
                        createUser({
                            variables: {
                                email: session.session.user.email,
                                displayName: displayNameState.toString(),
                                displayColour: displayColourState.toString(),
                            },
                        });
                    }}
                />

                <p>Both your display name and your colour can be changed at any time</p>
                <p>Others can identify you using your unique ID number</p>
                <span />
                <span />
                <h1>IMPORTANT!</h1>
                <p>
                    Please input your colour as a hex, without the hashtag. If you don't know what that is, search "colour picker" in your browser, user the
                    picker to find a colour you like, and copy the hex (don't include the hashtag). It will look something like this: #2a4e53, or #adfefe, or
                    #341245
                </p>

                <span></span>
                <span></span>
                <div style={{ margin: 'auto', width: 'min-content' }}>
                    <SignOut />
                </div>
            </div>
        </div>
    );
}
