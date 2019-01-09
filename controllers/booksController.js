const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const booksController = {
        index: (req, res) => {
                res.send('this is all books')
        },
        new: (req, res) => {
                res.send('this is where our new book form will render')
        },
        create: (req, res) => {
                res.send('you have made a new book')
        },
        show: (req, res) => {
                res.send('this is a book')
        },
        edit: (req, res) => {
                res.send('this is where you edit a book')
        },
        update: (req, res) => {
                res.send('this is where the edited book will render')
        },
        delete: (req, res) => {
                res.send('book deleted')
        }
}

module.exports = booksController