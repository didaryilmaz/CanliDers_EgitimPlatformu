import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import "./Payment.css";

function Payment() {
  const { courseId } = useParams();
  const navigate = useNavigate(); 
  const { user } = useAuth();

  const [course, setCourse] = useState(null);
  const [loadingCourse, setLoadingCourse] = useState(true);
  const [paying, setPaying] = useState(false);

  const [email, setEmail] = useState(user?.email || "");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  useEffect(() => {
    api.get("/api/course")
      .then(res => {
        const found = res.data.find(c => c.id === Number(courseId));
        setCourse(found || null);
      })
      .catch(() => {
        alert("Kurs bilgileri yüklenemedi");
      })
      .finally(() => {
        setLoadingCourse(false);
      });
  }, [courseId]);

  /* ödeme */
  const pay = async () => {
    if (!user) {
      alert("Ödeme yapabilmek için giriş yapmalısınız");
      return;
    }

    if (!course) {
      alert("Kurs bulunamadı");
      return;
    }

    if (!cardNumber || !expiry || !cvc) {
      alert("Lütfen kart bilgilerini doldurun");
      return;
    }

    try {
      setPaying(true);

      await api.post("/api/payment", {
        userId: user.id,
        courseId: course.id
      });

      alert("Ödeme başarılı 🎉 Eğitim hesabınıza tanımlandı");

      // Satın alınan kurslara yönlendirme
      navigate("/my-courses");

    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data || "Ödeme sırasında hata oluştu");
    } finally {
      setPaying(false);
    }
  };

  if (loadingCourse) {
    return <div className="loading">Kurs bilgileri yükleniyor...</div>;
  }

  if (!course) {
    return <div className="loading">Kurs bulunamadı</div>;
  }

  return (
    <div className="payment-container">
      <div className="payment-card">

        {/* satın alınan kurs */}
        <div className="course-summary">
          <img src={course.image} alt={course.title} />
          <div>
            <h3>{course.title}</h3>
            <p className="instructor">{course.instructor}</p>
            <p className="desc">{course.description}</p>
            <span className="course-price">₺{course.price}</span>
          </div>
        </div>

        {/* ödeme formu */}
        <label>E-posta</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
        />

        <label>Kart Numarası</label>
        <input
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
          placeholder="1234 1234 1234 1234"
          inputMode="numeric"
        />

        <div className="row">
          <input
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            placeholder="AA / YY"
          />
          <input
            value={cvc}
            onChange={e => setCvc(e.target.value)}
            placeholder="CVC"
            inputMode="numeric"
          />
        </div>

        <button
          className="pay-btn"
          onClick={pay}
          disabled={paying}
        >
          {paying ? "Ödeme yapılıyor..." : `₺${course.price} Öde`}
        </button>

      </div>
    </div>
  );
}

export default Payment;
