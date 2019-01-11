const Author = require('../models/Author')

const authorController = {
        home: (req, res) => {
                Author.find({}).then(authorHome => {
                        res.render('author/home', {
                                authorHome
                        })
                })
        },
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
                        phoneNumber: req.body.phone,
                        location: req.body.location,
                }).then(backHome => {
                        res.redirect('/author')
                })
        },
        delete: (req, res) => {
                const authorId = req.params.authorId
                Author.findByIdAndDelete(authorId).then(() => {
                        res.redirect(`/author`)
                })
        }
}

module.exports = authorController