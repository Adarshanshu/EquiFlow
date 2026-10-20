const crypto = require("node:crypto");
const { promisify } = require("node:util");

const scrypt = promisify(crypto.scrypt);
const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER === "true";
const sessionSecret = process.env.AUTH_SECRET || (isProduction ? null : crypto.randomBytes(32).toString("hex"));

if (!sessionSecret) {
  throw new Error("AUTH_SECRET must be set in production so sessions remain valid across backend restarts.");
}
if (!process.env.AUTH_SECRET) {
  console.warn("AUTH_SECRET is unset; local sessions will expire when the backend restarts.");
}

async function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const key = await scrypt(password, salt, 64);
  return { salt, hash: key.toString("hex") };
}

async function verifyPassword(password, salt, expectedHash) {
  const actual = await scrypt(password, salt, 64);
  const expected = Buffer.from(expectedHash, "hex");
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}

function createSession(userId) {
  const payload = Buffer.from(JSON.stringify({ sub: userId, exp: Date.now() + 7 * 24 * 60 * 60 * 1000 })).toString("base64url");
  const signature = crypto.createHmac("sha256", sessionSecret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function readSession(token) {
  if (!token || typeof token !== "string") return null;
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return null;

  const expected = crypto.createHmac("sha256", sessionSecret).update(payload).digest();
  let supplied;
  try {
    supplied = Buffer.from(signature, "base64url");
  } catch {
    return null;
  }
  if (supplied.length !== expected.length || !crypto.timingSafeEqual(supplied, expected)) return null;

  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return decoded.sub && decoded.exp > Date.now() ? decoded.sub : null;
  } catch {
    return null;
  }
}

module.exports = { hashPassword, verifyPassword, createSession, readSession };
