
const db = require("../db");
const bcrypt = require("bcryptjs");

const getUserByEmail = async (email) => {
  const myDb = await db.getDb();
  const collection = myDb.collection("testApplication");
  return await collection.findOne({ email });
};

const createUser = async (user) => {
  const myDb = await db.getDb();
  const collection = myDb.collection("testApplication");
  return await collection.insertOne(user);
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
  getUserByEmail,
  createUser,
  hashPassword,
  comparePassword,
};
