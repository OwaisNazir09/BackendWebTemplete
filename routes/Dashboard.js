const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Home = require("../models/SchoolInfo");

router.get("/", auth, async (req, res) => {
  try {
    const [
      header,
      sliders,
      about,
      principal,
      facilities,
      news,
      videos,
      applyForms,
      testimonials,
      whyUs,
      contact,
    ] = await Promise.all([
      Home.Header.findOne().lean(),
      Home.Slider.find().sort({ createdAt: -1 }).lean(),
      Home.About.findOne().lean(),
      Home.Principal.findOne().lean(),
      Home.Facilities.find().sort({ createdAt: -1 }).lean(),
      Home.News.find().sort({ createdAt: -1 }).lean(),
      Home.Videos.find().sort({ createdAt: -1 }).lean(),
      Home.Apply.find().sort({ createdAt: -1 }).lean(),
      Home.Testimonials.find().sort({ createdAt: -1 }).lean(),
      Home.WhyUs.find().sort({ createdAt: -1 }).lean(),
      Home.Contact.findOne().lean(),
    ]);

    res.render("Dashboard/Dashboard", {
      title: "Admin Dashboard",
      message: null,
      header,
      sliders,
      about,
      principal,
      facilities,
      news,
      videos,
      applyForms,
      testimonials,
      whyUs,
      contact,
    });
  } catch (err) {
    console.error("Dashboard Error:", err.message);
    res.status(500).render("Dashboard/Dashboard", {
      title: "Dashboard",
      message: "Error fetching dashboard data.",
    });
  }
});

module.exports = router;
