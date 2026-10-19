import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3002";
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";

const links = [
  ["Login", "/login"],
  ["Signup", "/signup"],
  ["About", "/about"],
  ["Products", "/product"],
  ["Pricing", "/pricing"],
  ["Support", "/suport"],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/auth/me`, { credentials: "include" })
      .then((response) => {
        if (active && response.ok) setIsAuthenticated(true);
      })
      .catch(() => {
        // Keep public navigation available when the backend is offline.
      });
    return () => { active = false; };
  }, []);

  const visibleLinks = isAuthenticated
    ? links.filter(([label]) => label !== "Login" && label !== "Signup")
    : links;

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link className="site-nav-brand" to="/" aria-label="EquiFlow home" onClick={() => setMenuOpen(false)}>
          <img src="media/images/logo.png" alt="EquiFlow" />
        </Link>
        <button className="site-nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav-links" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
          <span></span><span></span><span></span>
        </button>
        <div className={`site-nav-links${menuOpen ? " is-open" : ""}`} id="site-nav-links">
          {visibleLinks.map(([label, to]) => <Link key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          {isAuthenticated && <a href={DASHBOARD_URL} onClick={() => setMenuOpen(false)}>Dashboard</a>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
