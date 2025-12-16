import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./UserNavbar.css";

function UserNavbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="user-navbar">
      <button onClick={() => navigate("/courses")}>Eğitimler</button>
      <button onClick={() => navigate("/my-courses")}>Öğrenim İçeriğim</button>
      <button onClick={() => navigate("/live-lesson")}>Canlı Ders Talebi</button>
      <button className="logout" onClick={logout}>Çıkış</button>
    </div>
  );
}

export default UserNavbar;
