const mongoose = require('mongoose');

const KeywordSchema = new mongoose.Schema({
  keywordText: {
    type: String,
    trim: true,
    required: [true, 'Please type a keyword']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Keyword', KeywordSchema);