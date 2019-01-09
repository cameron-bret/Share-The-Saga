const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const authorController = {
        index: (req, res) => {
                // console.log('this is all books')
                Author.find({}).then(authorIndex => {
                        res.render('author/index', {
                                authorIndex
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
                        res.render('author/show', {
                                authorShow
                        })
                })
        },
        create: (req, res) => {
                // console.log('you have made a new author')
                Author.find({}).then(authorCreate => {
                        res.render('author/create', {
                                authorCreate
                        })
                })
        },
        delete: (req, res) => {
                // console.log('author deleted')
                Author.find({}).then(authorDelete => {
                        res.render('author/delete', {
                                authorDelete
                        })
                })
        }
}

module.exports = authorController