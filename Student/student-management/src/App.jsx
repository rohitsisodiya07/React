import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
  const [editStudent, setEditStudent] = useState(null);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/StudentForm"
          element={
            <StudentForm
              editStudent={editStudent}
              setEditStudent={setEditStudent}
            />
          }
        />

        <Route
          path="/StudentList"
          element={<StudentList setEditStudent={setEditStudent} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
