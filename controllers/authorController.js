const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const authorController = {
        index: (req, res) => {
                Author.find({}).then(authorIndex => {
                        res.render('author/index', {
                                authorIndex
                        })
                })
        },
        new: (req, res) => {
                Author.find({}).then(authorNew => {
                        res.render('author/new', {
                                authorNew
                        })
                })
        },
        show: (req, res) => {
                const authorId = req.params.authorId
                Author.findById(authorId).then((author) => {
                        res.render('author/show', {
                                author: author
                        })
                })
        },
        update: (req, res) => {
                const authorId = req.params.authorId
                res.render('author/edit', {
                        authorId
                })
        },
        edit: (req, res) => {
                const authorId = req.params.authorId
                const newDescription = req.params.newDescription
                Author.findByIdAndUpdate(authorId, {
                        description: newDescription
                }).then(() => {

                        console.log(newDescription)
                        res.redirect(`/author/${authorId}`)
                })
        },
        create: (req, res) => {
                Author.create({
                        userName: req.body.userName,
                        password: req.body.password,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        phone: req.body.phone,
                        location: req.body.location,
                }).then(backHome => {
                        res.redirect('/')
                })
        },
        delete: (req, res) => {
                Author.find({}).then(authorDelete => {
                        res.render('author/delete', {
                                authorDelete
                        })
                })
        }
}

module.exports = authorController