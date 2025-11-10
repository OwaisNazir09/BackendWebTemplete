const express = require("express");
const userRoutes = require("./userRoutes");
const Dashboard = require("./Dashboard");
const Home = require("./Home");
const ExternalApiRouter = require("./ExternalAppRoutes")
const router = express.Router();
router.use("/", Dashboard);
router.use("/users", userRoutes);
router.use("/home", Home);

//external api 
router.use("/api", ExternalApiRouter);
module.exports = router;
