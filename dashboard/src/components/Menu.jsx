import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import api from "../api.js";

const FRONTEND_URL = import.meta.env.PROD
  ? "https://equiflow-frontend.onrender.com"
  : (import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173");

const Menu = ({ userName = "User" }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const selectedMenu = ({ "/": 0, "/orders": 1, "/holdings": 2, "/positions": 3, "/funds": 4, "/apps": 5 })[pathname] ?? 0;
  const initials = userName.trim().split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase() || "U";

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      window.location.replace(`${FRONTEND_URL}/login`);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <a href={FRONTEND_URL} aria-label="EquiFlow home" style={{ display: "inline-flex", alignItems: "center" }}>
        <img src="/logo.png" alt="EquiFlow" style={{ width: "120px", maxWidth: "100%" }} />
      </a>
      <div className="menus">
        <ul>
          <li>
            <a href={FRONTEND_URL} style={{ textDecoration: "none" }}>
              <p className={menuClass}>Home</p>
            </a>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{initials}</div>
          <p className="username">{userName}</p>
        </div>
        {isProfileDropdownOpen && <button className="dashboard-logout" type="button" onClick={handleLogout}>Log out</button>}
      </div>
    </div>
  );
};

export default Menu;

