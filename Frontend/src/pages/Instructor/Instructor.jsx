import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import "./Instructor.css";

export default function Instructor() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();     

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courses, setCourses] = useState([]);
  const [liveRequests, setLiveRequests] = useState([]);

  useEffect(() => {
    if (!user?.id) return;

    api
      .get(`/api/livelesson/assigned/${user.id}`)
      .then(res => setLiveRequests(res.data));
  }, [user]);

  // cikis yap
  const handleLogout = () => {
    logout();              
    navigate("/login");    
  };

  const handleCreateCourse = (e) => {
    e.preventDefault();
    setCourses([
      ...courses,
      { id: Date.now(), title, description }
    ]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="instructor-container">

      {/* Header */}
      <div className="instructor-header">
        <h2>Eğitmen Paneli</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Çıkış
        </button>
      </div>

      {/*Yeni Eğitim */}
      <section className="panel-section">
        <h3>➕ Yeni Eğitim Serisi Oluştur</h3>
        <form onSubmit={handleCreateCourse} className="course-form">
          <input
            type="text"
            placeholder="Eğitim başlığı"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Eğitim açıklaması"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit">Oluştur</button>
        </form>
      </section>
      {/*Yüklenen Eğitimler */}
      <section className="panel-section">
        <h3>Yüklediğim Eğitimler</h3>

        {courses.length === 0 ? (
          <p>Henüz eğitim eklemediniz.</p>
        ) : (
          <ul className="course-list">
            {courses.map(course => (
              <li key={course.id}>
                <strong>{course.title}</strong>
                <span>{course.description}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/*Canlı Ders Talepleri */}
      <section className="panel-section">
        <h3>Bana Atanan Canlı Ders Talepleri</h3>

        {liveRequests.length === 0 ? (
          <p>Şu an size atanmış canlı ders talebi yok.</p>
        ) : (
          <div className="live-requests">
            {liveRequests.map(req => (
              <div key={req.id} className="live-request-card">
                <p><strong>👤 Öğrenci ID:</strong> {req.userId}</p>
                <p><strong>📌 Konu:</strong> {req.topic}</p>
                <p>
                  <strong>⏰ Tarih:</strong>{" "}
                  {new Date(req.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
