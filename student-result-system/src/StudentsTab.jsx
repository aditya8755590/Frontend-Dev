import { useState } from "react";
import axios from "axios";

export default function StudentsTab({ students, sections, setStudents }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    sectionId: "",
    enrollmentDate: ""
  });

  const refresh = async () => {
    const res = await axios.get("http://localhost:3000/students");
    setStudents(res.data);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      sectionId: "",
      enrollmentDate: ""
    });
  };

  const openCreate = () => {
    resetForm();
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  const openEdit = (student) => {
    setEditingStudent(student);
    setForm(student);
    setIsModalOpen(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if(editingStudent){
      await axios.put(`http://localhost:3000/students/${editingStudent.id}`, form);
      alert("Student updated");
    } else {
      await axios.post("http://localhost:3000/students", form);
      alert("Student added");
    }

    setIsModalOpen(false);
    refresh();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
    alert("Deleted");
    refresh();
  };

  return (
    <>

      <div className="section-header">
        <h2>Students</h2>
        <button className="btn btn-primary" onClick={openCreate}>+ Add New Student</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Section</th>
            <th>Enroll Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{sections.find(x => x.id === s.sectionId)?.name || "-"}</td>
              <td>{s.enrollmentDate}</td>
              <td>
                <button className="btn btn-secondary btn-sm" onClick={() => openEdit(s)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">

            <form className="modal-body" onSubmit={handleSubmit}>

              <label>Name</label>
              <input name="name" value={form.name} onChange={handleChange} />

              <label>Email</label>
              <input name="email" value={form.email} onChange={handleChange} />

              <label>Section</label>
              <select name="sectionId" value={form.sectionId} onChange={handleChange}>
                <option value="">None</option>
                {sections.map(sec => (
                  <option value={sec.id} key={sec.id}>{sec.name}</option>
                ))}
              </select>

              <label>Enroll Date</label>
              <input type="date" name="enrollmentDate" value={form.enrollmentDate} onChange={handleChange} />

              <button className="btn btn-primary" type="submit">
                {editingStudent ? "Update" : "Add"}
              </button>

              <button className="btn btn-secondary" type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>

            </form>

          </div>
        </div>
      )}

    </>
  );
}