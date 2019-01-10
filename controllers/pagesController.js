const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const pagesController = {
        index: (req, res) => {
                // console.log('this is all pages')
                Pages.find({}).then(pagesIndex => {
                        res.render('pages/index', {
                                pagesIndex
                        })
                })
        },
        new: (req, res) => {
                // console.log('this is where our new page form will render')
                Pages.find({}).then(pagesNew => {
                        res.render('pages/new', {
                                pagesNew
                        })
                })
        },
        show: (req, res) => {
                // console.log('this is a page')
                Pages.find({}).then(pagesShow => {
                        res.render('pages/show', {
                                pagesShow
                        })
                })
        },
        create: (req, res) => {
                // console.log('you have made a new page')
                Pages.find({}).then(pagesCreate => {
                        res.render('pages/create', {
                                pagesCreate
                        })
                })
        },
        delete: (req, res) => {
                // console.log('page deleted')
                Pages.find({}).then(pagesDelete => {
                        res.render('pages/delete', {
                                pagesDelete
                        })
                })
        }
}

module.exports = pagesController