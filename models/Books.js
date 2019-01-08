const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Books = new Schema({
    title: String,
    date: Date,
    setting: String,
    description: String,
    genre: String,
})

module.exports = mongoose.model("Books", Books)