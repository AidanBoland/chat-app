import { signOut } from 'next-auth/react';
import SignOut from '../../components/logOut';

export default function MessagePage() {
    return (
        <>
            <SignOut />
            <ul className="messageScroller">
                <li>
                    <div className="contentBox">
                        <div className="profilePicture" />
                        <div>
                            <h1>testUsername</h1>
                            <p>
                                Lorem ipsum dolor sit amet eiusmod sint ullamco quis proident non amet consequat aliquip sit sit amet sint. Reprehenderit nulla
                                consectetur aute cupidatat nostrud anim deserunt. Adipisicing voluptate sunt ut et exercitation eiusmod ea. Minim consectetur
                                non dolore occaecat reprehenderit nulla sint exercitation dolor enim veniam non est.
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="contentBox">
                        <div className="profilePicture" />
                        <div>
                            <h1>testUsername</h1>
                            <p>
                                Lorem ipsum dolor sit amet aboris occaecat culpa laborum aliqua aliqua mollit do veniam velit pariatur sit ipsum voluptate. Duis
                                id minim elit officia dolor fugiat excepteur voluptate commodo et. Culpa do enim ullamco pariatur et irure irure est quis
                                voluptate quis eu ipsum. Commodo officia culpa non veniam mollit ea id eiusmod Lorem sit commodo exercitation. Reprehenderit
                                Lorem dolore incididunt exercitation laborum cillum pariatur enim laboris eu ipsum. Voluptate nostrud nisi proident pariatur
                                exercitation deserunt aliqua duis.
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="contentBox">
                        <div className="profilePicture" />
                        <div>
                            <h1>testUsername</h1>
                            <p>Lorem ipsum dolor sit amet magna duis non sint quis laborum laborum cillum.</p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="contentBox">
                        <div className="profilePicture" />
                        <div>
                            <h1>testUsername</h1>
                            <p>
                                Lorem ipsum dolor sit amet officia consectetur voluptate elit Lorem nulla duis ut. Labore culpa in commodo Lorem aliquip
                                reprehenderit quis aliquip. Non cupidatat sint laboris officia exercitation nisi quis adipisicing exercitation velit. Eiusmod
                                occaecat laboris velit officia ex commodo non. Occaecat pariatur irure excepteur eu qui tempor tempor cupidatat. Dolor voluptate
                                consectetur aliqua tempor occaecat ullamco pariatur sit mollit in. Ad magna ipsum anim ex exercitation ad labore elit qui
                                consectetur dolor mollit velit aute. Proident dolore in laborum qui duis consequat cillum eu. Commodo aliqua deserunt et aliquip
                                deserunt et proident excepteur velit ea id proident aliqua cupidatat. Eu sit quis sit ut irure ex nisi id laboris aliquip.
                                Tempor officia incididunt ullamco minim. Lorem id laboris ipsum mollit commodo dolore aliquip occaecat quis. Cupidatat veniam
                                officia reprehenderit quis reprehenderit ad ipsum ipsum nulla nulla aliquip voluptate adipisicing eu.
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="contentBox">
                        <div className="profilePicture" />
                        <div>
                            <h1>testUsername</h1>
                            <p>
                                Lorem ipsum dolor sit amet ullamco et tempor ullamco laborum cillum duis tempor. Lorem Lorem eu quis proident quis pariatur est
                                culpa ipsum eiusmod nisi. Incididunt aliquip dolore nostrud labore laboris eiusmod nisi esse aliquip.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}
