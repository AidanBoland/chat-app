import SignIn from './SignIn';

export default function NeedToSignIn() {
    return (
        <div className="infoContainer">
            <div className="infoSubContainer">
                <h2>Retar.Chat</h2>
                <h1>Please sign in to access the chat</h1>
                <SignIn />
            </div>
        </div>
    );
}
