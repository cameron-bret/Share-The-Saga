const Pages = require('../models/Pages')

const pagesController = {
        index: (req, res) => {
                Pages.find({}).then(pagesIndex => {
                        res.render('pages/index', {
                                pagesIndex
                        })
                })
        },
        new: (req, res) => {
                Pages.find({}).then(pagesNew => {
                        res.render('pages/new', {
                                pagesNew
                        })
                })
        },
        show: (req, res) => {
                const pagesId = req.params.pagesId
                Pages.findById(pagesId).then((pages) => {
                        res.render('pages/show', {
                                pages: pages
                        })
                })
        },
        update: (req, res) => {
                const pagesId = req.params.pagesId
                res.render('pages/edit', {
                        pagesId
                })
        },
        edit: (req, res) => {
                const pagesId = req.params.pagesId
                const newDescription = req.body.newDescription
                Pages.findByIdAndUpdate(pagesId, {
                        description: newDescription
                }).then(() => {
                        console.log(newDescription)
                        res.redirect(`/pages/${pagesId}`)
                })
        },
        create: (req, res) => {
                Pages.create({
                        name: req.body.name,
                        source: req.body.source,
                        date: req.body.date,
                        description: req.body.description,
                        subGenre: req.body.subGenre,
                }).then(backHome => {
                        res.redirect('/pages')
                })
        },
        delete: (req, res) => {
                const pagesId = req.params.pagesId
                Pages.findByIdAndDelete(pagesId).then(() => {
                        res.redirect(`/pages`)
                })
        }
}

module.exports = pagesController