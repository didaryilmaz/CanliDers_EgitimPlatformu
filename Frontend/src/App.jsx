import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Courses from "./pages/Courses/Courses";
import MyCourses from "./pages/MyCourses/MyCourses";
import Admin from "./pages/Admin/Admin";
import Instructor from "./pages/Instructor/Instructor";
import { useAuth } from "./context/AuthContext";
import Payment from "./pages/Payment/Payment";
import LiveLessonRequest from "./pages/LiveLesson/LiveLessonRequest";
import Register from "./pages/Register/Register";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/courses"
        element={user?.role === "user" ? <Courses /> : <Navigate to="/" />}
      />

      <Route path="/payment/:courseId" element={<Payment />} />

      <Route path="/live-lesson" element={<LiveLessonRequest />} />

      <Route
        path="/my-courses"
        element={user?.role === "user" ? <MyCourses /> : <Navigate to="/" />}
      />

      <Route
        path="/admin"
        element={user?.role === "admin" ? <Admin /> : <Navigate to="/" />}
      />

      <Route
        path="/instructor"
        element={user?.role === "instructor" ? <Instructor /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
