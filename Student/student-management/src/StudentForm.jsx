import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ editStudent, setEditStudent }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
    phone: "",
    gender: "",
    status: "Active",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    if (editStudent) {
      setForm(editStudent);
    }
  }, [editStudent]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {};

    if (!form.name.trim()) obj.name = "Name is required";
    if (!form.age) obj.age = "Age is required";
    if (!form.gender) obj.gender = "Gender is required";
    if (!form.email.trim()) obj.email = "Email is required";
    if (!form.phone.trim()) obj.phone = "Phone is required";
    if (!form.course.trim()) obj.course = "Course is required";

    let oldData = JSON.parse(localStorage.getItem("studentData")) || [];

    const emailExists = oldData.some(
      (s) =>
        s.email.toLowerCase() === form.email.toLowerCase() &&
        s.id !== editStudent?.id
    );

    const phoneExists = oldData.some(
      (s) => s.phone === form.phone && s.id !== editStudent?.id
    );

    if (emailExists) obj.email = "Email already exists";
    if (phoneExists) obj.phone = "Phone already exists";

    setError(obj);

    if (Object.keys(obj).length === 0) {
      if (editStudent) {
        const updatedData = oldData.map((s) =>
          s.id === editStudent.id ? form : s
        );

        localStorage.setItem("studentData", JSON.stringify(updatedData));
        setEditStudent(null);
      } else {
        const newStudent = {
          ...form,
          id: Date.now(),
        };

        const updatedData = [...oldData, newStudent];
        localStorage.setItem("studentData", JSON.stringify(updatedData));
      }

      setForm({
        name: "",
        age: "",
        email: "",
        course: "",
        phone: "",
        gender: "",
        status: "Active",
      });

      setError({});
      navigate("/StudentList");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          {editStudent ? "✏️ Edit Student" : "🎓 Add Student"}
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-3">
              Personal Info
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleForm}
                  placeholder="Full Name"
                  className="border px-4 py-2 rounded-lg w-full"
                />
                {error.name && (
                  <p className="text-red-500 text-sm">{error.name}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleForm}
                  placeholder="Age"
                  className="border px-4 py-2 rounded-lg w-full"
                />
                {error.age && (
                  <p className="text-red-500 text-sm">{error.age}</p>
                )}
              </div>

              <div>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleForm}
                  className="border px-4 py-2 rounded-lg w-full"
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {error.gender && (
                  <p className="text-red-500 text-sm">{error.gender}</p>
                )}
              </div>

              <div className="col-span-2">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleForm}
                  placeholder="Email Address"
                  className="border px-4 py-2 rounded-lg w-full"
                />
                {error.email && (
                  <p className="text-red-500 text-sm">{error.email}</p>
                )}
              </div>

              <div className="col-span-2">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleForm}
                  placeholder="Phone Number"
                  className="border px-4 py-2 rounded-lg w-full"
                />
                {error.phone && (
                  <p className="text-red-500 text-sm">{error.phone}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-3">
              Academic Info
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="course"
                  value={form.course}
                  onChange={handleForm}
                  placeholder="Course"
                  className="border px-4 py-2 rounded-lg w-full"
                />
                {error.course && (
                  <p className="text-red-500 text-sm">{error.course}</p>
                )}
              </div>

              <div>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleForm}
                  className="border px-4 py-2 rounded-lg w-full"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600"
          >
            {editStudent ? "Update Student" : "➕ Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;