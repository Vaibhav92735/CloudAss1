import React, { useState } from 'react';

const AddExam = ({ fetchExams }) => {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [score, setScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://192.168.56.101:3000/api/exams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, date, time, score }),
    });
    if (response.ok) {
      fetchExams();
      setSubject('');
      setDate('');
      setTime('');
      setScore(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Exam</h2>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />
      <button type="submit">Add Exam</button>
    </form>
  );
};

export default AddExam;