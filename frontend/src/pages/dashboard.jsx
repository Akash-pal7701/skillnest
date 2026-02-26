import {useEffect, useState} from "react";
import api from "../utils/axiosInstance";
import {Link} from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api
      .get("/api/my-courses")
      .then((res) => {
        console.log("Enrolled Courses:", res.data);
        setCourses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <h3 style={{marginTop: "30px"}}>My Enrolled Courses</h3>

      {courses.length === 0 ? (
        <p>No enrolled courses yet.</p>
      ) : (
        courses.map((course) => (
          <div
            key={course._id}
            className="card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>₹{course.price}</p>
          </div>
        ))
      )}

      <div style={{marginTop: "30px"}}>
        <Link to="/courses">
          <button className="button button-primary">Browse Courses</button>
        </Link>

        <button
          onClick={handleLogout}
          className="button button-danger">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
