const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Books = new Schema({
    title: String,
    date: Date,
    setting: String,
    description: String,
    genre: String,
    pages: [{
        type: Schema.Types.ObjectId
        ref: 'Pages'
    }]
})

module.exports = mongoose.model("Books", Books)