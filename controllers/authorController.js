const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const authorController = {
        index: (req, res) => {
                res.send('this is all authors')
        },
        new: (req, res) => {
                res.send('this is where our new author form will render')
        },
        create: (req, res) => {
                res.send('you have made a new author')
        },
        show: (req, res) => {
                res.send('this is a author')
        },
        delete: (req, res) => {
                res.send('author deleted')
        }
}

module.exports = authorController