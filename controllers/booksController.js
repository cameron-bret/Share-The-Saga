const Books = require('../models/Books')

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
                const newTitle = req.body.newTitle
                Books.findByIdAndUpdate(booksId, {
                        title: newTitle
                }).then(() => {

                        console.log(newTitle)
                        res.redirect(`/books/${booksId}`)
                })
        },
        create: (req, res) => {
                Books.create({
                        title: req.body.title,
                        setting: req.body.setting,
                        description: req.body.description,
                        genre: req.body.genre,
                }).then(backHome => {
                        res.redirect('/books')
                })
        },
        delete: (req, res) => {
                const booksId = req.params.booksId
                Books.findByIdAndDelete(booksId).then(() => {
                        res.redirect(`/books`)
                })
        }
}

module.exports = booksController