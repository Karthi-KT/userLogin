// login.js
const users = require("./Students");
const login = (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
};

const logout = () => {
  // Logic for logout if needed
  return { success: true, message: "Logged out successfully" };
};

module.exports = { login, logout };
