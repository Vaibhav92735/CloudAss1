import React, { useState, useEffect } from 'react';
import ExamList from './components/ExamList';
import AddExam from './components/AddExam';
import './App.css';

function App() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    const response = await fetch('http://10.10.88.61:3000/api/exams');
    const data = await response.json();
    setExams(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Student Exam Helper</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <AddExam fetchExams={fetchExams} />
      </div>
      <div className="w-full max-w-3xl mt-6">
        <ExamList exams={exams} fetchExams={fetchExams} />
      </div>
    </div>
  );
}

export default App;
