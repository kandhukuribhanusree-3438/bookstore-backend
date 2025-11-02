const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /api/books - Fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

