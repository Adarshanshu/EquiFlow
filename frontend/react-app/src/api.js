const API_URL = import.meta.env.VITE_API_URL || "https://equiflow-backend-wb75.onrender.com";

export async function authRequest(path, body) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error("Could not reach the backend.");
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Request failed. Please try again.");
  return data;
}

export const DASHBOARD_URL = "https://equiflow-dashboard1.onrender.com";
