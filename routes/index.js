const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const booksController = require('../controllers/booksController')
const pagesController = require('../controllers/pagesController')

router.get('/', authorController.index)
router.get('/new', authorController.new)
router.get('/show', authorController.show)
router.post('/create', authorController.create)
router.delete('/delete', authorController.delete)

router.get('/', booksController.index)
router.get('/new', booksController.new)
router.get('/show', booksController.show)
router.get('/edit', booksController.edit)
router.patch('/update', booksController.update)
router.post('/create', booksController.create)
router.delete('/delete', booksController.delete)

router.get('/', pagesController.index)
router.get('/new', pagesController.new)
router.get('/show', pagesController.show)
router.post('/create', pagesController.create)
router.delete('/delete', pagesController.delete)

module.exports = router