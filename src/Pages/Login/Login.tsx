import { useState, FormEvent } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../APIs/requests";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await getLogin({ username, password });
    if (response.status === 200) {
      const users = response.data;
      if (users.length > 0) {
        const user = users[0];
        setUsername("");
        setPassword("");
        setErrorMessage("");
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/home");
      } else {
        setErrorMessage("Invalid username or password.");
      }
    } else {
      setErrorMessage("An error occurred during login.");
    }
  };

  const handleFormAnimationEnd = () => {
    setFormVisible(true);
  };

  return (
    <div className="login-container">
      <h1 className="logo">Websight EDM Solutions</h1>
      <div className="form-wrapper">
        <div
          className={`login-wrapper ${isFormVisible ? "visible" : ""}`}
          onAnimationEnd={handleFormAnimationEnd}
        >
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
