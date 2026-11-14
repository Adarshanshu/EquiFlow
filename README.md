# EquiFlow

EquiFlow is a Zerodha-inspired stock trading dashboard demo. It includes a public landing site with account signup and login, plus an authenticated dashboard for viewing portfolio data and placing simulated buy/sell orders.

> **Note:** This project is for demonstration purposes. Orders are recorded in the application database; they are not sent to a stock exchange. The project does not provide live market data or financial services.

## Features

- Landing pages for the home, about, products, pricing, and support sections.
- User signup and login with scrypt password hashing and signed, HTTP-only session cookies.
- Authenticated dashboard views for holdings, positions, and orders, along with watchlist, funds, and app sections.
- Buy and sell order forms with server-side validation and MongoDB persistence.
- Portfolio value and profit/loss calculations for holdings.
- Responsive React frontends backed by an Express REST API and MongoDB.

## Tech stack

- **Frontend:** React, React Router, Vite
- **Dashboard:** React, Axios, Chart.js
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Deployment configuration:** Render static-site configuration in `render.yaml`

## Project structure

```text
backend/                 Express API, authentication, and Mongoose models/schemas
dashboard/               Authenticated trading dashboard (Vite app)
frontend/react-app/      Public landing site and signup/login (Vite app)
render.yaml              Render configuration for the two static frontends
```

## Prerequisites

- Node.js and npm
- A MongoDB database (local or hosted)

## Run locally

1. Install dependencies in each app:

   ```powershell
   cd backend
   npm install
   cd ..\dashboard
   npm install
   cd ..\frontend\react-app
   npm install
   ```

2. Create `backend/.env`:

   ```env
   MONGO_URL=mongodb://127.0.0.1:27017/equiflow
   AUTH_SECRET=replace-with-a-long-random-secret
   PORT=3002
   ```

   `MONGO_URL` must point to a reachable MongoDB database. In local development, the backend generates a temporary session secret if `AUTH_SECRET` is omitted, so sessions expire when it restarts. Set a securely generated `AUTH_SECRET` for stable sessions and always set it in production.

3. Start all three services from `frontend/react-app`:

   ```powershell
   npm run dev
   ```

   This starts the public site, dashboard, and backend together:

   | Service | Local URL |
   | --- | --- |
   | Public site | http://localhost:5173 |
   | Dashboard | http://localhost:5174 |
   | Backend API | http://localhost:3002 |

   Stop the services with `Ctrl+C`.

## API overview

Authentication uses the `equiflow_session` HTTP-only cookie. The browser requests include credentials, and the dashboard API routes require a valid session.

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/auth/signup` | Create an account |
| `POST` | `/auth/login` | Sign in |
| `GET` | `/auth/me` | Get the current session's user |
| `POST` | `/auth/logout` | Clear the session cookie |
| `GET` | `/allHoldings` | Retrieve holdings |
| `GET` | `/allPositions` | Retrieve positions |
| `POST` | `/newOrder` | Validate and record a buy/sell order |
| `GET` | `/allOrders` | Retrieve the signed-in user's orders |

## Configuration

- Backend: `MONGO_URL`, `AUTH_SECRET`, and optionally `PORT`, `FRONTEND_ORIGIN`, and `DASHBOARD_ORIGIN`.
- Frontend and dashboard API URL overrides: `VITE_API_URL`.
- Dashboard's public-site URL override: `VITE_FRONTEND_URL`.
- Public site's dashboard URL override: `VITE_DASHBOARD_URL`.

The local Vite defaults are ports `5173` and `5174`, and the backend defaults to `3002`. The backend's CORS allowlist must include the origins used by your frontend and dashboard.

## Build and lint

Run these commands from the relevant app directory:

```powershell
npm run build
npm run lint
```

The backend package does not currently define an automated test suite.
