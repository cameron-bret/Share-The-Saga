Books = require("../models/Books")

const booksController = {
    index: (req, res) => {
        Books.find({}).then(clickableLink => {
            res.render('app/index', {
                clickableLink
            })
        })
    },
    new: (req, res) => {
        res.render("app/new")
    },
    create: (req, res) => {
        console.log(req.body)
        Books.create({
            name: req.body.name,
            link: req.body.link,
            content: req.body.content,
            img: req.body.img,
            createdAt: req.body.createdAt
        }).then(book => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const booksId = req.params.id
        Books.findById(booksId).then((book) => {
            console.log(book)
            res.render('app/show', {
                book
            })
        })
    },
    edit: (req, res) => {
        const booksId = req.params.id
        // console.log(booksId)
        res.render('app/edit', {
            booksId
        })
    },
    update: (req, res) => {
        const booksId = req.params.id
        console.log(req.body)
        Books.findByIdAndUpdate(booksId, req.body, {
            new: true
        }).then((book) => {
            res.redirect(`/${booksId}`)
        })
    },
    delete: (req, res) => {
        const booksId = req.params.id
        Books.findByIdAndRemove(booksId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = booksController