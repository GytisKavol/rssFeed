const express = require('express');
const router = express.Router();
const { getUrls, addUrl, deleteUrl } = require('../controllers/urls');

router
  .route('/')
  .get(getUrls)
  .post(addUrl);

router
  .route('/:id')
  .delete(deleteUrl);

module.exports = router;