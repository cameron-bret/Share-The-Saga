const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const appController = {
        index: (req, res) => {
                res.render('app/index')
        },
        view: (req, res) => {
                res.render('app/view')
        },
        create: (req, res) => {
                res.render('app/create')
        },
        update: (req, res) => {
                res.render('app/update')
        },
        delete: (req, res) => {
                res.render('app/delete')
        }
}

module.exports = appController