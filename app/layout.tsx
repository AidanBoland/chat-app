'use client';

import '../styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const client = new ApolloClient({
        uri: 'http://localhost:4000',

        cache: new InMemoryCache(),
    });

    return (
        <html lang="en">
            <head />
            <body>
                <SessionProvider>
                    <ApolloProvider client={client}>
                        <div className="mainContainer">{children}</div>
                    </ApolloProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
