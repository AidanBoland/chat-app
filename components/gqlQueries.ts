import { gql } from '@apollo/client';

//graphql queries

//querying the initial 20 messages
export const getMessageQuery = gql`
    query {
        getMessages {
            id
            content
            sender {
                displayName
                displayColour
                id
            }
        }
    }
`;

//sending a new message to the backend to be put in the db and published to other users with a graphql subscription
export const postMessageQuery = gql`
    mutation createMessage($sendId: Int!, $content: String!) {
        createMessage(senderId: $sendId, content: $content) {
            id
            content
            senderId
        }
    }
`;

//subscribing to receive new messages
export const messageSubscriptionQuery = gql`
    subscription newMessage {
        newMessage {
            __typename
            id
            content
            sender {
                displayColour
                displayName
            }
        }
    }
`;

//checking if a user exists in the db
export const getUserQuery = gql`
    query ($email: String!) {
        checkForUser(email: $email) {
            id
            displayColour
            displayName
        }
    }
`;

export const createUserQuery = gql`
    mutation createUser($email: String!, $displayName: String!, $displayColour: String!) {
        createUser(email: $email, displayName: $displayName, displayColour: $displayColour) {
            id
            email
            displayName
            displayColour
        }
    }
`;
