import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Şimdilik simülasyon
    setUsers([
      { id: 1, name: "Ali", role: "user" },
      { id: 2, name: "Ayşe", role: "instructor" },
      { id: 3, name: "Mehmet", role: "user" }
    ]);
  }, []);

  return (
    <div>
      <h2>👥 Kullanıcı Yönetimi</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Rol</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>
                <button className="danger">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
