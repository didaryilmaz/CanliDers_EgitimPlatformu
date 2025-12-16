import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post("/api/auth/register", {
        email,
        password,
        role
      });

      alert("Kayıt başarılı, giriş yapabilirsiniz");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Kayıt başarısız");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Üye Ol</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">Öğrenci</option>
          <option value="instructor">Eğitmen</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={handleRegister}>Üye Ol</button>
      </div>
    </div>
  );
}

export default Register;
