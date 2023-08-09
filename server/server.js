const express = require("express"); // this will import express
const path = require("path"); // this will import path to access file and directory paths
const { authMiddleware } = require("./utils/auth");
const { ApolloServer } = require("apollo-server-express"); // import apollo

// this will import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3002; // the local port
const app = express(); // this will represent express server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});



app.use(express.urlencoded({ extended: false })); // this will parse incoming string or array data
app.use(express.json()); // this will parse incoming JSON data

// this will serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
    
    const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
// this will connect to the server
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
        );
    });
});
};
startApolloServer();