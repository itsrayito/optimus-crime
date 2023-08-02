const express = require("express"); // this will import express
const path = require("path"); // this will import path to access file and directory paths
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001; // the local port
const app = express(); // this will represent express server

app.use(express.urlencoded({ extended: true })); // this will parse incoming string or array data
app.use(express.json()); // this will parse incoming JSON data 

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

// this will serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// this will connect to the server
DEC8_BIN.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});