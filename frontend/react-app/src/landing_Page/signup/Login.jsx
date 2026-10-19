import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import { authRequest, DASHBOARD_URL } from "../../api.js";
import "./auth.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await authRequest("/auth/login", form);
      window.location.assign(DASHBOARD_URL);
    } catch (requestError) {
      setError(requestError.message);
      setSubmitting(false);
    }
  };

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <div className="auth-page">
      <main className="auth-card">
        <h1>Welcome back</h1>
        <p>Log in to continue to your EquiFlow dashboard.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Email<input name="email" type="email" autoComplete="email" required value={form.email} onChange={update} /></label>
          <label>Password<input name="password" type="password" autoComplete="current-password" required value={form.password} onChange={update} /></label>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="auth-submit" type="submit" disabled={submitting}>{submitting ? "Logging in..." : "Log in"}</button>
        </form>
        <p className="auth-switch">New to EquiFlow? <Link to="/signup">Create an account</Link></p>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
