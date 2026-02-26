import {useEffect, useState} from "react";
import api from "../utils/axiosInstance";

function Courses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    api
      .get("/api/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleEnroll = async (id) => {
    try {
      await api.post(`/api/enroll/${id}`);
      alert("Enrolled Successfully 🎉");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/delete-course/${id}`);
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2 style={{color: "white"}}>Explore Courses</h2>

      <div className="grid">
        {courses.map((course) => (
          <div
            key={course._id}
            className="card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>
              <strong>₹ {course.price}</strong>
            </p>

            <button
              className="button button-success"
              onClick={() => handleEnroll(course._id)}>
              Enroll
            </button>

            <button
              className="button button-danger"
              style={{marginLeft: "10px"}}
              onClick={() => handleDelete(course._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
