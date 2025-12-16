import { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import UserNavbar from "../../components/UserNavbar";
import "./MyCourses.css";

function MyCourses() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!user) return;

    api.get(`/api/course/my/${user.id}`)
      .then(res => setCourses(res.data));
  }, [user]);

  return (
    <>
      <UserNavbar />

      <div className="mycourses-container">
        <h2>Satın Aldığım Eğitimler</h2>
        <hr />

        {courses.length === 0 && (
          <p>Henüz satın alınmış eğitim yok.</p>
        )}

        {courses.map(c => (
          <div className="mycourse-item" key={c.id}>
            ✔ {c.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyCourses;
