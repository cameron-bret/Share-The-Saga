const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const bookController = require('../controllers/booksController')
const pagesController = require('../controllers/pagesController')

router.get('/', bookController.index)
router.post('/', bookController.create)
router.get('/new', bookController.new)
router.get('/:id', bookController.show)
router.get('/:id/update', bookController.edit)
router.patch('/:id', bookController.update)
router.delete('/:id', bookController.delete)

// router.get('/:id/pages', pagesController.index)
// router.get('/:id/pages/new', pagesController.new)
// router.post('/:id/pages/create', pagesController.create)
// router.get('/:id/pages/:commentId', pagesController.show)
// router.delete('/:id/pages/:commentId', pagesController.delete)

module.exports = router