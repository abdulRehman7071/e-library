const express = require('express');
const router = express.Router();
const BookController = require('../controllers/booksController')
router.get('/', BookController.getAllBooks)
router.get('/:id', BookController.singleBook)
router.post('/', BookController.addBook)
router.put('/:id', BookController.updateBook)
router.delete('/:id', BookController.deleteBook)


module.exports = router

