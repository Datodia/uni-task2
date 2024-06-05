const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovieById);
router.get('/category/:categoryId', movieController.getMoviesByCategory);
router.get('/title/:title', movieController.findMovieByTitle);

module.exports = router;