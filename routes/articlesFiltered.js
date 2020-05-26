const express = require('express');
const router = express.Router();
const { getArticlesFilter } = require('../controllers/articlesFiltered');

router
  .route('/')
  .get(getArticlesFilter)

module.exports = router;