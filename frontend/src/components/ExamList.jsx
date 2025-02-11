import React from 'react';
import UpdateScore from './UpdateScore';

const ExamList = ({ exams, fetchExams }) => {
  return (
    <div>
      <h2>Exam Timetable</h2>
      <ul>
        {exams.map((exam) => (
          <li key={exam._id}>
            {exam.subject} - {exam.date} at {exam.time} (Score: {exam.score})
            <UpdateScore examId={exam._id} fetchExams={fetchExams} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamList;