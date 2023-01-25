'use client';

import '../styles/message.scss';

export default function TypeBox() {
    return (
        <div className='typeBox'>
            <form>
                <input type='text' placeholder='Type a message...' />
                <input type='reset' value='x' />
                <input type='submit' value='>' />
            </form>
        </div>
    );
}
