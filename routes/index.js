const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const booksController = require('../controllers/booksController')
const pagesController = require('../controllers/pagesController')

router.get('/', authorController.index)
router.get('/author/new', authorController.new)
router.get('/author/show', authorController.show)
router.post('/author/create', authorController.create)
router.delete('/author/delete', authorController.delete)

router.get('/', booksController.index)
router.get('/books/new', booksController.new)
router.get('/books/show', booksController.show)
router.get('/books/edit', booksController.edit)
router.patch('/books/update', booksController.update)
router.post('/books/create', booksController.create)
router.delete('/books/delete', booksController.delete)

router.get('/', pagesController.index)
router.get('/pages/new', pagesController.new)
router.get('/pages/show', pagesController.show)
router.post('/pages/create', pagesController.create)
router.delete('/pages/delete', pagesController.delete)

module.exports = router