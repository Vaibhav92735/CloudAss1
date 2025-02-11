import React, { useState, useEffect } from 'react';
import ExamList from './components/ExamList';
import AddExam from './components/AddExam';
import UpdateScore from './components/UpdateScore';
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
    <div className="App">
      <h1>Student Exam Helper</h1>
      <AddExam fetchExams={fetchExams} />
      <ExamList exams={exams} fetchExams={fetchExams} />
    </div>
  );
}

export default App;