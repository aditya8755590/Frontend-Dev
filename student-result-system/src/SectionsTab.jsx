import { useState } from "react";

export default function SectionsTab({ sections, setSections }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
    });
    setEditingSection(null);
  };

  const openCreate = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEdit = (section) => {
    setEditingSection(section);
    setForm({
      name: section.name,
      description: section.description || "",
    });
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Name is required");
      return;
    }

    if (editingSection) {
      setSections((prev) =>
        prev.map((s) =>
          s.id === editingSection.id ? { ...s, ...form } : s
        )
      );
    } else {
      setSections((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
          totalStudents: 0,
        },
      ]);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this section?")) {
      setSections((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <>
      <div className="section-header">
        <h2>Sections</h2>
        <button className="btn btn-primary" onClick={openCreate}>
          + Add New Section
        </button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Total Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sections.length === 0 ? (
            <tr>
              <td colSpan={4} className="empty">
                No records found
              </td>
            </tr>
          ) : (
            sections.map((sec) => (
              <tr key={sec.id}>
                <td>{sec.name}</td>
                <td>{sec.description || "-"}</td>
                <td>{sec.totalStudents}</td>
                <td>
                  <button className="btn btn-secondary btn-sm" onClick={() => openEdit(sec)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(sec.id)}>
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
              <h3>{editingSection ? "Edit Section" : "Add Section"}</h3>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                ×
              </button>
            </div>

            <form className="modal-body" onSubmit={handleSubmit}>
              <label>
                Name*
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Description
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
              </label>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingSection ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}