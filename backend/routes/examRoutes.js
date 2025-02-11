const express = require('express');
const Exam = require('./Exam');
const router = express.Router();

// Get all exams
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new exam
router.post('/', async (req, res) => {
  const exam = new Exam({
    subject: req.body.subject,
    date: req.body.date,
    time: req.body.time,
    score: req.body.score,
  });

  try {
    const newExam = await exam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an exam score
router.patch('/:id', async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (req.body.score) exam.score = req.body.score;
    const updatedExam = await exam.save();
    res.json(updatedExam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;