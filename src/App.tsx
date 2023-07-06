import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isLoggedIn = user && user.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
