const express = require("express");
const { getAllBook, createBook, updateBook, deleteBook } = require("../controller/bookController");
const router = express.Router();

router.route('/book').get(getAllBook);

router.route('/create-book').post(createBook);

router.route('/book/:id').put(updateBook);

router.route('/book/:id').delete(deleteBook);

module.exports = router;