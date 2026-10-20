import { useEffect, useState } from "react";
import api from "../api.js";
import Dashboard from "./Dashboard.jsx";
import TopBar from "./TopBar.jsx";

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || "https://equiflow-frontend.onrender.com";

const Home = () => {
  const [authState, setAuthState] = useState("checking");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const checkSession = async () => {
    setAuthState("checking");
    setError("");
    try {
      const { data } = await api.get("/auth/me");
      setUser(data.user);
      setAuthState("authenticated");
    } catch (requestError) {
      if (requestError.response?.status === 401) {
        window.location.replace(`${FRONTEND_URL}/login`);
        return;
      }
      setError("The backend is unavailable. Start the backend and try again.");
      setAuthState("error");
    }
  };

  useEffect(() => {
    let active = true;
    api.get("/auth/me")
      .then(({ data }) => {
        if (active) {
          setUser(data.user);
          setAuthState("authenticated");
        }
      })
      .catch((requestError) => {
        if (!active) return;
        if (requestError.response?.status === 401) {
          window.location.replace(`${FRONTEND_URL}/login`);
          return;
        }
        setError("The backend is unavailable. Start the backend and try again.");
        setAuthState("error");
      });
    return () => { active = false; };
  }, []);

  if (authState === "checking") return <main className="dashboard-auth-state">Checking your session...</main>;
  if (authState === "error") {
    return (
      <main className="dashboard-auth-state">
        <p role="alert">{error}</p>
        <button type="button" onClick={checkSession}>Retry connection</button>
      </main>
    );
  }

  return <><TopBar userName={user?.name} /><Dashboard userName={user?.name} /></>;
};

export default Home;
