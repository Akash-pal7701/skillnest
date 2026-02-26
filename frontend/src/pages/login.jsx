import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Login() {
  const [form, setForm] = useState({email: "", password: ""});
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/login", form);

    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);

    navigate("/dashboard");
  };

  return (
    <form
      className="login-form"
      onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({...form, password: e.target.value})}
      />
      <button type="submit">Login</button>
      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </form>
  );
}

export default Login;
