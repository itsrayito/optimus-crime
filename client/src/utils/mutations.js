import gql from "graphql-tag";


export const ADD_CASE = gql`
mutation addCase($caseTitle: String!, $caseDescription: String!, $caseStatus: String!, $caseStartDate: String!) {
    addCase(caseTitle: $caseTitle, caseDescription: $caseDescription, caseStatus: $caseStatus, caseStartDate: $caseStartDate) {
        _id
        caseTitle
        caseDescription
        caseStatus
        caseStartDate
        createdAt
        username
        commentCount
        comments {
            _id
        }
    }
}

`;
export const ADD_COMMENT = gql`
mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
        _id
        commentText
        createdAt
        username
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;