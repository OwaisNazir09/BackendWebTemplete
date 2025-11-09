const express = require("express");
const userRoutes = require("./userRoutes");
const Dashboard = require("./Dashboard");
const Home = require("./Home");

const router = express.Router();
router.use("/", Dashboard);
router.use("/users", userRoutes);
router.use("/home", Home);

module.exports = router;
