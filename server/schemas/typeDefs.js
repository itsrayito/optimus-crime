// imports
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Case {
        _id: ID
        caseTitle: String
        caseDescription: String
        caseStartDate: String
        caseStatus: String
        caseAuthor: String
        createdAt: String
        username: String
        commentCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        cases: [Case]
        friends: [User]
        
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        cases:(username: String): [Case]
        case(_id: ID!): Case
        }

        type Mutation {
            login(email: String!, password: String!): Auth
            addUser(username: String!, email: String!, password: String!): Auth
            addCase(caseTitle: String!, caseDescription: String!, caseStartDate: String!, caseStatus: String!): Case
            addComment(caseId: ID!, commentText: String!): Case
            addFriend(friendId: ID!): User
        }
    `;

    
   // // incomplete
   // const typeDefs = gql`
   // type User {
    // _id: ID
    // username: String
    // email: String
    // friendCount: Int
    // friends: [User]
    // }
    // type Query {
        // me: User
        // users: [User]
        // user(username: String!): User
        // }

        // type Mutation {
            // login(email: String!, password: String!): User
            // addUser(username: String!, email: String!, password: String!): User
            // addFriend(friendId: ID!): User
            // addComment(commentText: String!): Comment
        // }

        // type Auth {
            // token: ID!
            // user: User
        // }
        // `;

        module.exports = typeDefs;