NewsLink = require("../models/Newslinks")

const linkController = {
    index: (req, res) => {
        NewsLink.find({}).then(links => {
            res.render('app/index', {
                links
            })
        })
    },
    new: (req, res) => {
        res.render("app/new")
    },
    create: (req, res) => {
        console.log(req.body)
        NewsLink.create({
            name: req.body.name,
            link: req.body.link,
            content: req.body.content,
            img: req.body.img,
            createdAt: req.body.createdAt
        }).then(newLink => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const newslinkId = req.params.id
        NewsLink.findById(newslinkId).then((newslink) => {
            console.log(newslink)
            res.render('app/show', {
                newslink
            })
        })
    },
    edit: (req, res) => {
        const newslinkId = req.params.id
        // console.log(newslinkId)
        res.render('app/edit', {
            newslinkId
        })
    },
    update: (req, res) => {
        const newslinkId = req.params.id
        console.log(req.body)
        NewsLink.findByIdAndUpdate(newslinkId, req.body, {
            new: true
        }).then((newslink) => {
            res.redirect(`/${newslinkId}`)
        })
    },
    delete: (req, res) => {
        const newslinkId = req.params.id
        NewsLink.findByIdAndRemove(newslinkId).then(() => {
            res.redirect('/')
        })
    }
}



module.exports = linkController