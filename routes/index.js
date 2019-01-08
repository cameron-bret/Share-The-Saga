const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const bookController = require('../controllers/booksController')
const pagesController = require('../controllers/pagesController')

router.get('/', bookController.index)
router.post('/', bookController.create)
router.get('/create', bookController.new)
router.get('/:id', bookController.show)
router.get('/:id/update', bookController.edit)
router.patch('/:id', bookController.update)
router.delete('/:id', bookController.delete)

router.get('/:id/comments', pagesController.index)
router.get('/:id/comments/create', pagesController.new)
router.post('/:id/comments', pagesController.create)
router.get('/:id/comments/:commentId', pagesController.show)
router.get('/:id/comments/:commentId/update', pagesController.edit)
router.patch('/:id/comments/:commentId', pagesController.update)
router.delete('/:id/comments/:commentId', pagesController.delete)

module.exports = router