const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();

router.get('/', fileController.getFavs, (req, res) => {
  res.status(200).json(res.locals.favs);
  // or send res.locals through .json()
})

router.put('/', fileController.addFavs, (req, res) => {
  // possibly req.body or req.query.song
  res.status(200).json(res.locals.addFavs);
})

router.delete('/', fileController.deleteFavs, (req, res) => {
  res.status(200).send('Removed fav!');
})

module.exports = router;