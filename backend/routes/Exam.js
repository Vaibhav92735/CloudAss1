const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('Exam', examSchema);