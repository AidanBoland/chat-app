import { signOut } from 'next-auth/react';
import SignOut from '../../components/logOut';

export default function MessagePage() {
    return (
        <>
            <SignOut />
            <ul className="messageScroller">
                <div className="contentBox">
                    <div className="profilePicture" />
                    <div>
                        <h1>testUsername</h1>
                        <p>
                            Lorem ipsum dolor sit amet eiusmod sint ullamco quis proident non amet consequat aliquip sit sit amet sint. Reprehenderit nulla
                            consectetur aute cupidatat nostrud anim deserunt. Adipisicing voluptate sunt ut et exercitation eiusmod ea. Minim consectetur non
                            dolore occaecat reprehenderit nulla sint exercitation dolor enim veniam non est.
                        </p>
                    </div>
                </div>
            </ul>
        </>
    );
}
