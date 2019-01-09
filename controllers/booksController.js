const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const booksController = {
        index: (req, res) => {
                // console.log('this is all books')
                Books.find({}).then(booksIndex => {
                        res.render('books/index', {
                                booksIndex
                        })
                })
        },
        new: (req, res) => {
                // console.log('this is where our new book form will render')
                Books.find({}).then(booksNew => {
                        res.render('books/New', {
                                booksNew
                        })
                })
        },
        show: (req, res) => {
                // console.log('this is a book')
                Books.find({}).then(booksShow => {
                        res.render('books/show', {
                                booksShow
                        })
                })
        },
        edit: (req, res) => {
                // console.log('this is where you edit a book')
                Books.find({}).then(booksEdit => {
                        res.render('books/edit', {
                                booksEdit
                        })
                })
        },
        update: (req, res) => {
                // console.log('this is where the edited book will render')
                Books.find({}).then(booksUpdate => {
                        res.render('books/Update', {
                                booksUpdate
                        })
                })
        },
        create: (req, res) => {
                // console.log('you have made a new book')
                Books.find({}).then(booksCreate => {
                        res.render('books/create', {
                                booksCreate
                        })
                })
        },
        delete: (req, res) => {
                res.send('book deleted')
                Books.find({}).then(booksDelete => {
                        res.render('books/delete', {
                                booksDelete
                        })
                })
        }
}

module.exports = booksController