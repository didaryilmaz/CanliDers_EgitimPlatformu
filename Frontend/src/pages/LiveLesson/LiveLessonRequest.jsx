import { useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import UserNavbar from "../../components/UserNavbar";
import "./LiveLesson.css";

function LiveLessonRequest() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const requestLesson = async () => {
    if (!user) {
      alert("Giriş yapmalısınız");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/api/livelesson/request", {
        userId: user.id
      });

      setResult(res.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.title ||
        "Bir hata oluştu"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <UserNavbar />
    <div className="live-container">
      <div className="live-card">

        <h2>📞 Canlı Ders Talebi</h2>

        {!result && (
          <>
            <p>Uygun bir eğitmenle canlı ders başlatmak için talep oluştur.</p>

            <button
              className="request-btn"
              onClick={requestLesson}
              disabled={loading}
            >
              {loading ? "Eğitmen aranıyor..." : "Canlı Ders Talep Et"}
            </button>
          </>
        )}

        {result && (
          <div className="success-box">
            <h3>✅ Eğitmen Atandı</h3>
            <p><b>Eğitmen ID:</b> {result.instructorId}</p>
            <p><b>Eğitmen Adı:</b> {result.instructorName}</p>
            <p><b>Durum:</b> {result.status}</p>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </div>
    </div>
    </>
  );
}

export default LiveLessonRequest;
