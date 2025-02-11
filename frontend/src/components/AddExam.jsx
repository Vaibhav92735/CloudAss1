import React, { useState } from 'react';

const AddExam = ({ fetchExams }) => {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [score, setScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://10.10.88.61:3000/api/exams', {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Add New Exam</h2>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Exam
      </button>
    </form>
  );
};

export default AddExam;
