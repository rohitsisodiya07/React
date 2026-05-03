import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentList = ({ setEditStudent }) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem("studentData")) || [];
    setStudents(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (id) => {
    const updatedData = students.filter((s) => s.id !== id);
    localStorage.setItem("studentData", JSON.stringify(updatedData));
    setStudents(updatedData);
  };

  const courses = [...new Set(students.map((s) => s.course))];

  const filteredStudents = students.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());

    const matchCourse = courseFilter ? s.course === courseFilter : true;

    return matchName && matchCourse;
  });

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
        📋 Student List
      </h2>

      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow">
          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Search student by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>

          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">All Courses</option>

            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course?.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg font-semibold text-gray-600">Loading...</p>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <div className="text-center text-gray-500 bg-white p-6 rounded shadow">
            No students found 😢
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-indigo-500 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Age</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Course</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((s, index) => (
                <tr
                  key={s.id}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-indigo-50 transition`}
                >
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.age}</td>
                  <td className="p-2">{s.email}</td>
                  <td className="p-2">{s.phone}</td>

                  <td className="p-2 font-semibold text-indigo-600">
                    {s.course?.toUpperCase()}
                  </td>

                  <td className="p-2">{s.gender}</td>

                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        s.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>

                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => {
                        setEditStudent(s);
                        navigate("/StudentForm");
                      }}
                      className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm cursor-pointer"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => handleDelete(s.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;
