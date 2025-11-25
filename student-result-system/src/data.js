// src/data.js

export const initialStudents = [
  {
    id: 1,
    name: "Aditya Kumar",
    email: "aditya@example.com",
    sectionId: 1,
    enrollmentDate: "2024-06-01",
  },
  {
    id: 2,
    name: "Riya Sharma",
    email: "riya@example.com",
    sectionId: 2,
    enrollmentDate: "2024-06-10",
  },
];

export const initialSections = [
  { id: 1, name: "Section A", description: "Science batch", totalStudents: 1 },
  { id: 2, name: "Section B", description: "Commerce batch", totalStudents: 1 },
];

export const initialResults = [
  {
    id: 1,
    studentId: 1,
    subject: "Maths",
    marks: 92,
    grade: "A+",
    examDate: "2024-09-01",
  },
  {
    id: 2,
    studentId: 2,
    subject: "English",
    marks: 76,
    grade: "B",
    examDate: "2024-09-03",
  },
];