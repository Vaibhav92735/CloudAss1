import React from 'react';
import UpdateScore from './UpdateScore';

const ExamList = ({ exams, fetchExams }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exam Timetable</h2>
      <div className="space-y-4">
        {exams.map((exam) => (
          <div
            key={exam._id}
            className="p-4 border border-gray-200 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-medium">{exam.subject}</p>
              <p className="text-sm text-gray-600">{exam.date} at {exam.time}</p>
              <p className="text-sm font-semibold text-green-600">Score: {exam.score}</p>
            </div>
            <UpdateScore examId={exam._id} fetchExams={fetchExams} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamList;
