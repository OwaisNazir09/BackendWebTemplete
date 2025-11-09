const express = require("express");
const {
  getSignUpPage,
  signUp,
  getSignInPage,
  signIn,
  logout,
} = require("../controllers/userController");
const Auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/signup", getSignUpPage);
router.get("/signin", getSignInPage);

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/logout", logout);

module.exports = router;
