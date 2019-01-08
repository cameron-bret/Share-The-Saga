const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const booksController = require('../controllers/booksController')
const pagesController = require('../controllers/pagesController')

router.get('/', authorController.index)
// router.post('/', authorController.create)
// router.get('/new', authorController.new)
// router.get('/:id', authorController.show)
// router.delete('/:id', authorController.delete)

module.exports = router