import gql from 'graphql-tag';

export const LOGIN = gql`
mutation login($email: String!, $password: ) {
    login(email: $email, password: $password) {
    token
    user {
        _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($firstName: String!, $$lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        token
        user {
            _id
        }
      }
   }
`;

export const ADD_POST = gql`
mutation {
    addPost($title: String!, $body: String!) {
        _id
        title
        body
    }
}
`;