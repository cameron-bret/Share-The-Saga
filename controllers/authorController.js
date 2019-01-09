const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const authorController = {
        index: (req, res) => {
                Author.find({}).then(authorAccount => {
                        res.render('author/index', {
                                authorAccount
                        })
                })
        },
        new: (req, res) => {
                res.send('this is where our new author form will render')
        },
        show: (req, res) => {
                res.send('this is an author')
        },
        create: (req, res) => {
                res.send('you have made a new author')
        },
        delete: (req, res) => {
                res.send('author deleted')
        }
}

module.exports = authorController