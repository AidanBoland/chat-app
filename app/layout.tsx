'use client';

import '../styles/globals.scss';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />
            <body>
                <SessionProvider>
                    <div className="mainContainer">{children}</div>
                </SessionProvider>
            </body>
        </html>
    );
}
