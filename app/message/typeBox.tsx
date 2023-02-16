'use client';

//the area at the bottom of the screen where the user types their messages
//seperated from the main page file because it was getting long and messy
//figured it would be tidier this way

import '../../styles/message.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TypeBox() {
    return (
        <div>
            <form className='typeBox'>
                <span contentEditable />
                <button className='button sendButton' onClick={() => {}}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
        </div>
    );
}
