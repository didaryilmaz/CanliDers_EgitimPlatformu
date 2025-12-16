import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ role, children }) {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Lütfen giriş yapın</p>;
  if (role && user.role !== role) return <p>Yetkisiz erişim</p>;

  return children;
}
