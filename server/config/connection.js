// import mongoose
const mongoose = require('mongoose');

// this is the connection to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/optimus-crime', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;                                                      