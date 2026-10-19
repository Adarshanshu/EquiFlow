const { spawn } = require("node:child_process");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "../../..");
const services = [
  {
    name: "backend",
    cwd: path.join(repoRoot, "backend"),
    command: process.execPath,
    args: ["index.js"],
  },
  {
    name: "dashboard",
    cwd: path.join(repoRoot, "dashboard"),
    command: process.execPath,
    args: [path.join(repoRoot, "dashboard", "node_modules", "vite", "bin", "vite.js")],
  },
  {
    name: "frontend",
    cwd: path.resolve(__dirname, ".."),
    command: process.execPath,
    args: [path.join(__dirname, "..", "node_modules", "vite", "bin", "vite.js"), "--configLoader", "native"],
  },
];

const children = [];
let stopping = false;

function stopAll(exitCode = 0) {
  if (stopping) return;
  stopping = true;

  const stopChild = (child) => new Promise((resolve) => {
    if (!child.pid) return resolve();
    if (process.platform !== "win32") {
      child.kill("SIGTERM");
      return resolve();
    }

    const killer = spawn("taskkill.exe", ["/PID", String(child.pid), "/T", "/F"], { stdio: "ignore" });
    killer.on("error", () => {
      child.kill("SIGTERM");
      resolve();
    });
    killer.on("close", resolve);
  });

  Promise.all(children.map(stopChild)).finally(() => process.exit(exitCode));
  setTimeout(() => process.exit(exitCode), 5000).unref();
}

for (const service of services) {
  const child = spawn(service.command, service.args, {
    cwd: service.cwd,
    env: {
      ...process.env,
      VITE_FRONTEND_URL: process.env.VITE_FRONTEND_URL || "http://localhost:5173",
    },
    stdio: ["inherit", "pipe", "pipe"],
  });
  children.push(child);

  child.stdout.on("data", (chunk) => process.stdout.write(`[${service.name}] ${chunk}`));
  child.stderr.on("data", (chunk) => process.stderr.write(`[${service.name}] ${chunk}`));
  child.on("error", (error) => {
    console.error(`[${service.name}] Could not start: ${error.message}`);
    stopAll(1);
  });
  child.on("exit", (code, signal) => {
    if (!stopping) {
      console.error(`[${service.name}] stopped (${signal || (code ?? "unknown")}); shutting down the other services.`);
      stopAll(code || 1);
    }
  });
}

process.on("SIGINT", () => stopAll(0));
process.on("SIGTERM", () => stopAll(0));

console.log("Starting backend, dashboard, and frontend. Open http://localhost:5173");
