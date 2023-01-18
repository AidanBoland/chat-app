import { gql } from '@apollo/client';

export const getMessageQuery = gql`
    query {
        getMessages {
            id
            content
            sender {
                displayName
                displayColour
            }
        }
    }
`;

export const postMessageQuery = gql`
    mutation createMessage($sendId: Int!, $content: String!) {
        createMessage(senderId: $sendId, content: $content) {
            id
            content
            senderId
        }
    }
`;
