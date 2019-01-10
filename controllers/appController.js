const Author = require('../models/Author')
const Books = require('../models/Books')
const Pages = require('../models/Pages')

const appController = {
        index: (req, res) => {
                res.send('home page')
        },
        view: (req, res) => {
                res.send('view decision page')
        },
        create: (req, res) => {
                res.send('create decision page')
        },
        update: (req, res) => {
                res.send('update decision page')
        },
        delete: (req, res) => {
                res.send('delete decision page')
        }
}

module.exports = appController