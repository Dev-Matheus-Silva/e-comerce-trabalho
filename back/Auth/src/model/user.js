const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    salt: String
});

module.exports = mongoose.model('user', bookSchema);