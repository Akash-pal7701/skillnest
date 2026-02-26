import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to SkillNest 🚀</h1>
        <p>
          Discover short courses, upgrade your skills, and build your future
          smartly.
        </p>

        <Link to="/courses">
          <button className="hero-btn">Explore Courses</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
