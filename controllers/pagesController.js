const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const pagesController = {
        index: (req, res) => {
                res.send('this is all pages')
        },
        new: (req, res) => {
                res.send('this is where our new page form will render')
        },
        show: (req, res) => {
                res.send('this is a page')
        },
        create: (req, res) => {
                res.send('you have made a new page')
        },
        delete: (req, res) => {
                res.send('page deleted')
        }
}

module.exports = pagesController