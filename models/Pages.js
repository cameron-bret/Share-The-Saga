const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Pages = new Schema({
    name: String,
    source: String,
    date: String,
    description: String,
    subGenre: String,
})

module.exports = mongoose.model("Pages", Pages)