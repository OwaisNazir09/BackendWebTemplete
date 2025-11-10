const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
router.get("/header", auth, homeController.getHeader);

router.post(
  "/header",
  auth,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "bannerImage", maxCount: 1 },
  ]),
  homeController.createHeaderCtrl
);

router.put(
  "/header/:id",
  auth,
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "bannerImage", maxCount: 1 },
  ]),
  homeController.updateHeaderCtrl
);

router.get("/header/:id", auth, homeController.deleteHeaderCtrl);

router.get("/slider", auth, homeController.getSlider);
router.post(
  "/slider",
  auth,
  upload.single("imageUrl"),
  homeController.createSliderCtrl
);
router.post(
  "/slider/:id",
  auth,
  upload.single("imageUrl"),
  homeController.updateSliderCtrl
);
router.get("/deleteslider/:id", auth, homeController.deleteSliderCtrl);

router.get("/about", auth, homeController.getAbout);
router.post(
  "/about",
  auth,
  upload.single("image"),
  homeController.createAboutCtrl
);
router.post(
  "/about/:id",
  auth,
  upload.single("image"),
  homeController.updateAboutCtrl
);
router.get("/about/:id", auth, homeController.deleteAboutCtrl);

////////////////////
router.get("/principal", auth, homeController.getPrincipal);
router.post(
  "/principal",
  auth,
  upload.single("image"),
  homeController.createPrincipalCtrl
);
router.post(
  "/principal/:id",
  auth,
  upload.single("image"),
  homeController.updatePrincipalCtrl
);
router.get("/principal/:id", auth, homeController.deletePrincipalCtrl);

router.get("/facilities", auth, homeController.getFacilities);
router.post(
  "/facilities",
  auth,
  upload.single("image"),
  homeController.createFacilitiesCtrl
);
router.post(
  "/facilities/:id",
  auth,
  upload.single("image"),
  homeController.updateFacilitiesCtrl
);
router.get("/facilities/:id", auth, homeController.deleteFacilitiesCtrl);

router.get("/news", auth, homeController.getNews);
router.post(
  "/news",
  auth,
  upload.single("image"),
  homeController.createNewsCtrl
);
router.post(
  "/news/:id",
  auth,
  upload.single("image"),
  homeController.updateNewsCtrl
);
router.get("/videos", auth, homeController.getVideos);
router.post(
  "/videos",
  auth,
  upload.single("thumbnail"),
  homeController.createVideosCtrl
);
router.post(
  "/videos/:id",
  auth,
  upload.single("thumbnail"),
  homeController.updateVideosCtrl
);
router.get("/videos/:id", auth, homeController.deleteVideosCtrl);

router.get("/apply", auth, homeController.getApply);
router.post("/apply", auth, homeController.createApplyCtrl);
router.put("/apply/:id", auth, homeController.updateApplyCtrl);
router.delete("/apply/:id", auth, homeController.deleteApplyCtrl);

/* -------------------------------------------------------------------------- */
/* 💬 TESTIMONIALS */
/* -------------------------------------------------------------------------- */
router.get("/testimonials", auth, homeController.getTestimonials);
router.post(
  "/testimonials",
  auth,
  upload.single("image"),
  homeController.createTestimonialsCtrl
);
router.post(
  "/testimonials/:id",
  auth,
  upload.single("image"),
  homeController.updateTestimonialsCtrl
);
router.get("/testimonials/:id", auth, homeController.deleteTestimonialsCtrl);

/* -------------------------------------------------------------------------- */
/* 💡 WHY US */
/* -------------------------------------------------------------------------- */
router.get("/whyus", auth, homeController.getWhyUs);
router.post("/whyus", auth, homeController.createWhyUsCtrl);
router.post("/whyus/:id", auth, homeController.updateWhyUsCtrl);
router.get("/whyus/:id", auth, homeController.deleteWhyUsCtrl);

/* -------------------------------------------------------------------------- */
/* 📞 CONTACT */
/* -------------------------------------------------------------------------- */
router.get("/contact", auth, homeController.getContact);
router.post("/contact", auth, homeController.createContactCtrl);
router.post("/contact/:id", auth, homeController.updateContactCtrl);
router.get("/contact/:id", auth, homeController.deleteContactCtrl);

module.exports = router;
