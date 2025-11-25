import { useState } from "react";

export default function ResultsTab({ students, results, setResults }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResult, setEditingResult] = useState(null);

  const [form, setForm] = useState({
    studentId: "",
    subject: "",
    marks: "",
    examDate: "",
  });

  const resetForm = () => {
    setForm({
      studentId: "",
      subject: "",
      marks: "",
      examDate: "",
    });
    setEditingResult(null);
  };

  const openCreate = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEdit = (res) => {
    setEditingResult(res);
    setForm({
      studentId: res.studentId,
      subject: res.subject,
      marks: res.marks,
      examDate: res.examDate,
    });
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calcGrade = (marks) => {
    if (marks >= 95) return "A+";
    if (marks >= 85) return "A";
    if (marks >= 75) return "B";
    if (marks >= 60) return "C";
    if (marks >= 40) return "D";
    return "F";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.studentId || !form.subject.trim() || form.marks === "") {
      alert("Student, Subject & Marks required");
      return;
    }

    const grade = calcGrade(Number(form.marks));

    if (editingResult) {
      setResults((prev) =>
        prev.map((r) =>
          r.id === editingResult.id ? { ...r, ...form, marks: Number(form.marks), grade } : r
        )
      );
    } else {
      setResults((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
          marks: Number(form.marks),
          grade,
        },
      ]);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this?")) {
      setResults((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const studentName = (id) => {
    return students.find((s) => s.id === id)?.name || "-";
  };

  return (
    <>

      <div className="section-header">
        <h2>Results</h2>
        <button className="btn btn-primary" onClick={openCreate}>
          + Add New Result
        </button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Exam Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.length === 0 ? (
            <tr>
              <td colSpan={6} className="empty">
                No records found
              </td>
            </tr>
          ) : (
            results.map((r) => (
              <tr key={r.id}>
                <td>{studentName(r.studentId)}</td>
                <td>{r.subject}</td>
                <td>{r.marks}</td>
                <td>
                  <span className="grade-badge">{r.grade}</span>
                </td>
                <td>{r.examDate}</td>
                <td>
                  <button className="btn btn-secondary btn-sm" onClick={() => openEdit(r)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">

            <div className="modal-header">
              <h3>{editingResult ? "Edit Result" : "Add Result"}</h3>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            </div>

            <form className="modal-body" onSubmit={handleSubmit}>

              <label>
                Student*
                <select
                  name="studentId"
                  value={form.studentId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Student</option>
                  {students.map((s) => (
                    <option value={s.id} key={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Subject*
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Marks*
                <input
                  type="number"
                  name="marks"
                  value={form.marks}
                  min="0"
                  max="100"
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Exam Date
                <input
                  type="date"
                  name="examDate"
                  value={form.examDate}
                  onChange={handleChange}
                />
              </label>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingResult ? "Update" : "Create"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </>
  );
}