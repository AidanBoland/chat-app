//user creation area
//seperated because i need to use useQuery

import SignOut from '../../components/signOut';

export default function UserCreation() {
    return (
        <div className='infoContainer'>
            <div className='infoSubContainer'>
                <h2>REBAR.CHAT</h2>
                <h1>Whoops! Looks like you don't have an account!</h1>
                <p>Can't have that can we?</p>

                <form className='userCreateForm'>
                    <input type='text' placeholder='The name you want others to see when you say something...' />
                    <input type='text' placeholder='The colour you want your name to be...' />
                    <button type='submit' className='button'>
                        Create Account
                    </button>
                </form>

                <p>Both your display name and your colour can be changed at any time</p>
                <p>Others can identify you using your unique ID number</p>
                <span />
                <span />
                <h1>IMPORTANT!</h1>
                <p>
                    Please input your colour as a hex, without the hashtag. If you don't know what that is, search "colour picker" in your browser, user the
                    picker to find a colour you like, and copy the hex (don't include the hashtag). It will look something like this: #2a4e53, or #adfefe, or
                    #341245
                </p>

                <span></span>
                <span></span>
                <div style={{ margin: 'auto', width: 'min-content' }}>
                    <SignOut />
                </div>
            </div>
        </div>
    );
}
