import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Courses.css";
import UserNavbar from "../../components/UserNavbar";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/course").then(res => setCourses(res.data));
  }, []);

  const addToCart = (course) => {
    navigate(`/payment/${course.id}`);
  };

  return (
    <>
      <UserNavbar />

        <div className="courses-page">
          <h2 className="page-title">Kurslar</h2>

          <div className="courses-wrapper">
            {courses.map(course => (
              <div className="course-item" key={course.id}>

                <img src={course.image} alt={course.title} className="course-image" />

                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p className="desc">{course.description}</p>
                  <p className="instructor">{course.instructor}</p>
                </div>

                <div className="course-price-box">
                  <div className="course-price">₺{course.price}</div>
                  <button
                    className="add-cart-btn"
                    onClick={() => addToCart(course)}
                  >
                    Satın Al
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
    </>
  );
}

export default Courses;
