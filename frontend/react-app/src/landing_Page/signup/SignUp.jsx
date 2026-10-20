import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer.jsx";
import { authRequest, DASHBOARD_URL } from "../../api.js";
import "./auth.css";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [openingDashboard, setOpeningDashboard] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await authRequest("/auth/signup", form);
      setOpeningDashboard(true);
      await new Promise((resolve) => window.setTimeout(resolve, 250));
      window.location.assign(DASHBOARD_URL);
    } catch (requestError) {
      setError(requestError.message);
      setSubmitting(false);
    }
  };

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  if (openingDashboard) return <main className="auth-transition" role="status" aria-live="polite"><span className="auth-transition-spinner" /><h1>Account created</h1><p>Opening your dashboard…</p></main>;

  return (
    <div className="auth-page">
      <main className="auth-card">
        <h1>Create your account</h1>
        <p>Sign up to open your EquiFlow dashboard.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" autoComplete="name" required minLength="2" maxLength="80" value={form.name} onChange={update} /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required value={form.email} onChange={update} /></label>
          <label>Password<input name="password" type="password" autoComplete="new-password" required minLength="8" value={form.password} onChange={update} /></label>
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="auth-submit" type="submit" disabled={submitting}>{submitting ? "Creating account..." : "Sign up"}</button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
