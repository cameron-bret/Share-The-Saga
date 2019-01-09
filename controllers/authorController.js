const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const authorController = {
        index: (req, res) => {
                // console.log('this is all books')
                Author.find({}).then(authorAccount => {
                        res.render('author/index', {
                                authorAccount
                        })
                })
        },
        new: (req, res) => {
                // console.log('this is where our new author form will render')
                Author.find({}).then(authorNew => {
                        res.render('author/new', {
                                authorNew
                        })
                })
        },
        show: (req, res) => {
                // console.log('this is an author')
                Author.find({}).then(authorShow => {
                        res.render('author/Show', {
                                authorShow
                        })
                })
        },
        create: (req, res) => {
                res.send('you have made a new author')
        },
        delete: (req, res) => {
                res.send('author deleted')
        }
}

module.exports = authorController