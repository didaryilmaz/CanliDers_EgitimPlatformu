import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post(
        "/api/auth/login",
        `"${email}"`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      login(res.data);

      if (res.data.role === "user") navigate("/courses");
      if (res.data.role === "admin") navigate("/admin");
      if (res.data.role === "instructor") navigate("/instructor");
    } catch (err) {
      console.error("Login error:", err);
      alert("Giriş başarısız");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Mini Platform Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Giriş Yap</button>

        

        <div className="login-hints">
          <p>user@test.com</p>
          <p>instructor@test.com</p>
          <p>admin@test.com</p>
          <p>şifre: 123456</p>
        </div>
        <button
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Üye Ol
        </button>
      </div>
    </div>
  );
}

export default Login;
