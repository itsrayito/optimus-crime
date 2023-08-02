const express = require('express'); // this will import express
const path = require('path'); // this will import path to access file and directory paths
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001; // the local port
const app = express(); // this will represent express server

app.use(express.urlencoded({ extended: true })); // this will parse incoming string or array data
app.use(express.json()); // this will parse incoming JSON data 

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});


// this will connect to the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})