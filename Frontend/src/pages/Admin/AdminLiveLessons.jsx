import { useEffect, useState } from "react";

export default function LiveLessons() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Simülasyon
    setRequests([
      {
        id: 1,
        userId: 3,
        instructorId: 2,
        status: "Assigned"
      },
      {
        id: 2,
        userId: 1,
        instructorId: 2,
        status: "Accepted"
      }
    ]);
  }, []);

  return (
    <div>
      <h2>🔔 Canlı Ders Talepleri</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Öğrenci</th>
            <th>Eğitmen</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.userId}</td>
              <td>{r.instructorId}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
