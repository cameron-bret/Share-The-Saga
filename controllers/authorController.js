const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const authorController = {
    index: (req, res) => {
        const bookId = req.params.id
        console.log(bookId)
        Books.findById(bookId).populate('pages').then((bookId) => {
            const pages = bookId.pages
            res.render('pages/index', {
                pages,
                bookId
            })
        })
    },
    new: (req, res) => {
        const bookId = req.params.id
        res.render('pages/new', {
            bookId: bookId
        })
    },
    create: (req, res) => {
        const bookId = req.params.id
        Books.findById(bookId)
            .then((bookId) => {
                Pages.create(req.body)
                    .then((page) => {
                        bookId.pages.push(page)
                        bookId.save()
                        res.redirect(`/${bookId._id}/pages`)
                    })
            })
    },
    show: (req, res) => {
        const pageId = req.params.pageId
        const bookId = req.params.id
        Pages.findById(pageId).then((page) => {
            res.render('pages/show', {
                page: page,
                bookId: bookId
            })
        }).catch((err) => {
            console.log(err)
        })
    },

    delete: (req, res) => {
        const bookId = req.params.id
        const pageId = req.params.pageId
        Pages.findByIdAndDelete(pageId)
            .then(() => {
                res.redirect(`/${bookId}/pages`)
            })
    }
}

module.exports = authorController