const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Author = new Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    location: String
})

module.exports = mongoose.model("Author", Author)