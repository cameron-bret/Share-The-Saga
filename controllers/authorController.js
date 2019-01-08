const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const authorController = {
    index: (req, res) => {
        const newslinkId = req.params.id
        console.log(newslinkId)
        Books.findById(newslinkId).populate('comments').then((newslink) => {
            const comments = newslink.comments
            res.render('comments/index', {
                comments,
                newslinkId
            })
        })
    },
    new: (req, res) => {
        const newslinkId = req.params.id
        res.render('comments/new', {
            newslinkId: newslinkId
        })
    },
    create: (req, res) => {
        const newslinkId = req.params.id
        Books.findById(newslinkId)
            .then((newslink) => {
                Pages.create(req.body)
                    .then((comment) => {
                        newslink.comments.push(comment)
                        newslink.save()
                        res.redirect(`/${newslink._id}/comments`)
                    })
            })
    },
    show: (req, res) => {
        const commentId = req.params.commentId
        const newsLinkId = req.params.id
        Pages.findById(commentId).then((comment) => {
            res.render('comments/show', {
                comment: comment,
                newsLinkId: newsLinkId
            })
        }).catch((err) => {
            console.log(err)
        })
    },

    delete: (req, res) => {
        const newslinkId = req.params.id
        const commentId = req.params.commentId
        Pages.findByIdAndDelete(commentId)
            .then(() => {
                res.redirect(`/${newslinkId}/comments`)
            })
    }
}

module.exports = authorController