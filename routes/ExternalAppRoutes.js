const express = require("express");
const router = express.Router();
const homeAPI = require("../controllers/apiHomeController");
const homeController = require("../controllers/homeController");

router.get("/header", homeAPI.getHeader);
router.get("/slider", homeAPI.getSlider);
router.get("/about", homeAPI.getAbout);
router.get("/principal", homeAPI.getPrincipal);
router.get("/facilities", homeAPI.getFacilities);
router.get("/news", homeAPI.getNews);
router.get("/videos", homeAPI.getVideos);
router.post("/apply", homeController.createApplyCtrl);
router.get("/testimonials", homeAPI.getTestimonials);
router.get("/whyus", homeAPI.getWhyUs);
router.get("/contact", homeAPI.getContact);

module.exports = router;
