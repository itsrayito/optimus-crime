const express = require("express"); // this will import express
const path = require("path"); // this will import path to access file and directory paths
const { authMiddleware } = require("./utils/auth");

// this will import Apollo server
const { ApolloServer } = require('apollo-server-express');

// this will import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001; // the local port
const app = express(); // this will represent express server

// this will create a new Apollo server and pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// this will integrate the Apollo server with express app. as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true })); // this will parse incoming string or array data
app.use(express.json()); // this will parse incoming JSON data

// this will serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// this will connect to the server
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});