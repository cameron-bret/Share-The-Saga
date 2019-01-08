const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Pages = new Schema({
    name: String,
    source: String,
    date: Date,
    description: String,
    genre: String,
    tags: String
});

module.exports = mongoose.model("Pages", Pages)