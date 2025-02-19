const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

/** Return signed JWT from user data. */
function createToken(user) {
  console.assert(user.isAdmin !== undefined,
    "createToken passed user without isAdmin property");

  let payload = {
    username: user.username,
    isAdmin: user.isAdmin || false,
  };

  // Add expiration (e.g., 24 hours)
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
}

module.exports = { createToken };
