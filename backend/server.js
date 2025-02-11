const express = require("express");
const pool = require("./db");
const app = express();

app.use(express.json());

// Get all students
app.get("/students", async (req, res) => {
  const result = await pool.query("SELECT * FROM students");
  res.json(result.rows);
});

// Add a student
app.post("/students", async (req, res) => {
  const { name, email, age } = req.body;
  const result = await pool.query(
    "INSERT INTO students (name, email, age) VALUES ($1, $2, $3) RETURNING *",
    [name, email, age]
  );
  res.json(result.rows[0]);
});

// Get all teachers
app.get("/teachers", async (req, res) => {
  const result = await pool.query("SELECT * FROM teachers");
  res.json(result.rows);
});

// Assign a teacher to a course
app.post("/courses", async (req, res) => {
  const { name, teacher_id } = req.body;
  const result = await pool.query(
    "INSERT INTO courses (name, teacher_id) VALUES ($1, $2) RETURNING *",
    [name, teacher_id]
  );
  res.json(result.rows[0]);
});

// Enroll a student in a course
app.post("/enrollments", async (req, res) => {
  const { student_id, course_id } = req.body;
  await pool.query("INSERT INTO enrollments (student_id, course_id) VALUES ($1, $2)", [student_id, course_id]);
  res.send("Student enrolled successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
