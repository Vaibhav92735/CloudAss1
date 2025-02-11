import React, { useState } from 'react';

const UpdateScore = ({ examId, fetchExams }) => {
  const [score, setScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://192.168.56.101:3000/api/exams/${examId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score }),
    });
    if (response.ok) {
      fetchExams();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Update Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateScore;