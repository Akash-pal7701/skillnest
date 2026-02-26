import {Link, useNavigate} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo">
        SkillNest
      </Link>

      <div className="nav-links">
        {token && <Link to="/dashboard">Dashboard</Link>}
        {token && <Link to="/courses">Courses</Link>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/signup">Signup</Link>}
        {token && (
          <button
            onClick={handleLogout}
            className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
