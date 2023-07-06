import { useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <span className="welcome">Welcome {user.username}</span>
          <span className="role">
            Role: {user.role === "editor" ? "Editor" : "Viewer"}
          </span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
