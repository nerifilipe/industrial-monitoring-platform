import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${API_URL}/auth/login`, formData);

      localStorage.setItem("token", response.data.token);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      onLogin(response.data.token);
    } catch {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="brand login-brand">
          <div className="brand-icon">IM</div>
          <div>
            <strong>Industrial</strong>
            <span>Monitoring</span>
          </div>
        </div>

        <h1>Welcome back</h1>
        <p>Sign in to access the monitoring dashboard.</p>

        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <span className="login-error">{error}</span>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;