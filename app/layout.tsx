'use client';

import '../styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const httpLink = new HttpLink({
        uri: 'http://localhost:4000/gql/api',
    });
    const wsLink = new GraphQLWsLink(
        createClient({
            url: 'ws://localhost:4000/gql/ws',
        })
    );

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        wsLink,
        httpLink
    );

    const client = new ApolloClient({
        link: splitLink,

        cache: new InMemoryCache(),
    });

    return (
        <html lang='en'>
            <head />
            <body>
                <SessionProvider>
                    <ApolloProvider client={client}>
                        <div className='mainContainer'>{children}</div>
                    </ApolloProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
