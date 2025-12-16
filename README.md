## 📦 Project Setup

Clone the repository and install dependencies for both frontend and backend:

## ⚙️ Backend (NestJS)

```bash
cd Backend
dotnet restore
dotnet run
```
## 🎨 Frontend (React + TypeScript + Vite)

```bash
cd Frontend
npm install
```

MiniProje – Canlı Ders & Eğitim Platformu
1. Kullanılan Teknolojiler ve Nedenleri
Backend
- ASP.NET Core Web API: Katmanlı mimari, güvenli ve ölçeklenebilir yapı
- In-Memory Data (Mock Data) Proje süresince hızlı geliştirme ve test amacıyla tercih edilmiştir,
kolayca Entity Framework + SQL Server’a taşınabilir
Frontend
- React: Component tabanlı yapı ve dinamik UI
- React Router: Rol bazlı yönlendirme
- Axios: Backend ile yönetilebilir HTTP iletişimi
Mimari Yaklaşım
Backend: Controller → Service → Data
Frontend: Pages → Components → Services

2. Ödeme Akışının Mantığı

Projede ödeme simülasyonu kullanılmıştır.
- Kullanıcı eğitimleri listeler
- Bir eğitimi satın almak için ödeme ekranına yönlendirilir
- Ödeme başarıyla tamamlandığında:
  - Eğitim kullanıcıya atanır
  - Kullanıcı, eğitime erişim hakkı kazanır
- Backend tarafında ödeme sonucu doğrulanarak kayıt altına alınır
  
3. Eğitmen – Öğrenci Eşleştirme Mantığı
  
- Kullanıcı “Canlı Ders Talebi” oluşturur
- Sistem aktif ve uygun eğitmenleri listeler
- İlk uygun eğitmen otomatik olarak atanır
- Talep durumu Assigned olarak kaydedilir
- Eğitmen panelinde:
  - Sadece kendisine atanmış talepler görüntülenir
  
4. Gelecekte Ölçeklenebilirlik
- In-Memory Data → SQL Server / PostgreSQL
- SignalR ile gerçek zamanlı bildirimler
- Mikroservis mimarisine geçiş (Payment, LiveLesson, User servisleri)
- Docker, Redis ve performans iyileştirmeleri
  
5. Genel Değerlendirme
Bu proje Udemy ve Uber mimarilerini birleştiren, ölçeklenebilir bir sistem sunmaktadır.
