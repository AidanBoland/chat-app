'use client';

//a sign in button

import { signIn } from 'next-auth/react';

interface buttonProps {
    provider: string;
}

export default function SignIn(props: buttonProps) {
    return (
        <button onClick={() => signIn(`${props.provider}`)} className='button' style={{ margin: 'auto' }}>
            SIGN IN WITH {props.provider.toUpperCase()}
        </button>
    );
}
