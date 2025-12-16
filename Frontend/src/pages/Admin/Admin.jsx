import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import Users from "./Users";
import LiveLessons from "./AdminLiveLessons";
import "./Admin.css";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const { logout } = useAuth();    
  const navigate = useNavigate();   

  const handleLogout = () => {
    logout();           
    navigate("/login");  
  };

  return (
    <div className="admin-container">

      <div className="admin-header">
        <h2>Admin Paneli</h2>

        <button className="logout-btn" onClick={handleLogout}>
          Çıkış
        </button>
      </div>

      <div className="admin-tabs">
        <button
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          Kullanıcılar
        </button>
        <button
          className={activeTab === "livelessons" ? "active" : ""}
          onClick={() => setActiveTab("livelessons")}
        >
          Canlı Dersler
        </button>
      </div>

      {activeTab === "dashboard" && <AdminDashboard />}
      {activeTab === "users" && <Users />}
      {activeTab === "livelessons" && <LiveLessons />}

    </div>
  );
}
