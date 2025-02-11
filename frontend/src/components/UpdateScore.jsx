import React, { useState } from 'react';

const UpdateScore = ({ examId, fetchExams }) => {
  const [score, setScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://10.10.88.61:3000/api/exams/${examId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score }),
    });
    if (response.ok) {
      fetchExams();
      setScore('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="number"
        placeholder="Update Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
        className="w-20 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateScore;
