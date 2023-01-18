'use client';

import { signIn } from 'next-auth/react';

interface buttonProps {
    provider: string;
}

export default function SignIn(props: buttonProps) {
    return (
        <button onClick={() => signIn(`${props.provider}`)} className="button">
            SIGN IN WITH {props.provider.toUpperCase()}
        </button>
    );
}
