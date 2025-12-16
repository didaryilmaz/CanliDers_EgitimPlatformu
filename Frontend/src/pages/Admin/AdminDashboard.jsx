export default function AdminDashboard() {
  return (
    <div>
      <h2>📊 Sistem Özeti</h2>

      <div className="dashboard-cards">
        <div className="card">👤 Toplam Kullanıcı: 12</div>
        <div className="card">🧑‍🏫 Eğitmen: 4</div>
        <div className="card">🔔 Aktif Talepler: 3</div>
        <div className="card">✅ Kabul Edilen: 5</div>
      </div>
    </div>
  );
}
