// import mongoose
const mongoose = require('mongoose');

// this is the connection to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/optimus-crime', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose.connection;                                                      