import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protected_route";
import Courses from "./pages/courses";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={<Login />}
        /> */}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
