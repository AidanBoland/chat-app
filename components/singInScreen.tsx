import SignIn from './signIn';

export default function NeedToSignIn() {
    return (
        <div className="infoContainer">
            <div className="infoSubContainer">
                <h2>REBAR.CHAT</h2>
                <h1>Please sign in to access the chat</h1>
                <SignIn provider="github" />
                <SignIn provider="discord" />
            </div>
        </div>
    );
}
