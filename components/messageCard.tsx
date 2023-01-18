interface messageCardProps {
    userDisplayName: String;
    userDisplayColour: String;
    messageId: String;
    messageContent: String;
}

export default function MessageCard(props: messageCardProps) {
    return (
        <li className="contentBox">
            <div className="profilePicture" />

            <div className="contentWrapper">
                <div className="messageHeader">
                    <h1 style={{ color: `#${props.userDisplayColour}` }}>{props.userDisplayName}</h1>
                    <div />
                    <p className="messageIdDisplay">{props.messageId}</p>
                </div>
                <p>{props.messageContent}</p>
            </div>
        </li>
    );
}
