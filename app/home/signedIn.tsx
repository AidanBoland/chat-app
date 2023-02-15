//displays if the user has logged in

import Link from 'next/link';
import SignOut from '../../components/signOut';
import UserCreation from './userCreation';

import { useQuery } from '@apollo/client';
import { getUserQuery } from '../../components/gqlQueries';

export default function SignedIn(session: any) {
    //the user has logged in with discord or github but i don't know if they have actually filled in details for my site yet
    //so i grab their email from the session and query the backend to see if they're in my db as a user
    const { loading, error, data } = useQuery(getUserQuery, {
        variables: { email: session.session.user.email },
    });

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

    //the query will return a user object if the user is in the db and null otherwise
    //the user object will contain their id, their displayname (like a discord nickname) and their chosen display colour
    else if (data.checkForUser != null && data.checkForUser != undefined) {
        return (
            <div className='infoContainer'>
                <div className='infoSubContainer'>
                    <h2>REBAR.CHAT</h2>
                    <h1>Thank you for Signing In!</h1>
                    <p>
                        Signed in as:<span style={{ color: `#${data.displayColour}` }}></span>
                    </p>
                    <input></input>
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

    //if the user is not in the db yet, they will be prompted to create a new user account
    //the user account will just contain the displayname and their chosen colour, and their id.
    //i dont want to jus display their email or real name so they need a displayname
    //id will be displayed on every message, becuase the displayname will be changeable to i want to prevent immitation of others
    //i also plan to make peoples ids mentionable, so a message mentioning them will be highlighted on their screen
    return <UserCreation />;
}
