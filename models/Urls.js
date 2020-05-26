const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  urlText: {
    type: String,
    trim: true,
    required: [true, 'Please add url']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Url', UrlSchema);