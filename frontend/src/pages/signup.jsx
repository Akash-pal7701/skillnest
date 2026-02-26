import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/register", form);

    alert("Signup Successful");
    navigate("/login");
  };

  return (
    <form
      className="sign-up"
      onSubmit={handleSignup}>
      <h2>Signup</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({...form, email: e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({...form, password: e.target.value})}
      />

      <button type="submit">Signup</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default Signup;
