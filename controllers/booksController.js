const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const booksController = {
        index: (req, res) => {
                Books.find({}).then(booksIndex => {
                        res.render('books/index', {
                                booksIndex
                        })
                })
        },
        new: (req, res) => {
                Books.find({}).then(booksNew => {
                        res.render('books/new', {
                                booksNew
                        })
                })
        },
        show: (req, res) => {
                const booksId = req.params.booksId
                Books.findById(booksId).then((books) => {
                        res.render('books/show', {
                                books: books
                        })
                })
        },
        update: (req, res) => {
                const booksId = req.params.booksId
                res.render('books/edit', {
                        booksId
                })
        },
        edit: (req, res) => {
                const booksId = req.params.booksId
                const newTitle = req.params.newTitle
                Books.findByIdAndUpdate(booksId, {
                        title: newTitle
                }).then(() => {

                        console.log(newDescription)
                        res.redirect(`/books/${booksId}`)
                })
        },
        create: (req, res) => {
                // console.log('you have made a new page')
                Books.create({
                        title: req.body.name,
                        setting: req.body.source,
                        description: req.body.description,
                }).then(backHome => {
                        res.redirect('/')
                })
        },
        delete: (req, res) => {
                // console.log('page deleted')
                Books.find({}).then(booksDelete => {
                        res.render('books/delete', {
                                booksDelete
                        })
                })
        }
}

module.exports = booksController