const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (name, email, password, role) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword, role });

  return user;
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const verifyPassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};

module.exports = {
  createUser,
  findUserByEmail,
  verifyPassword,
};
