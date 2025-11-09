const jwt = require("jsonwebtoken");
const {
  createUser,
  findUserByEmail,
  verifyPassword,
} = require("../services/userService");

exports.getSignUpPage = (req, res) => {
  res.render("user/signup", { title: "Sign Up", layout: false, message: null });
};

exports.getSignInPage = (req, res) => {
  res.render("user/signin", { title: "Sign In", layout: false, message: null });
};

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    await createUser(name, email, password, role);
    res.render("user/signin", {
      title: "Sign In",
      message: "Account created successfully. Please log in.",
    });
  } catch (error) {
    res.render("user/signup", { title: "Sign Up", message: error.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user)
      return res.render("user/signin", {
        title: "Sign In",
        message: "Invalid email or password",
      });

    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch)
      return res.render("user/signin", {
        title: "Sign In",
        message: "Invalid email or password",
      });

    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect("/");
  } catch (error) {
    res.render("user/signin", {
      title: "Sign In",
      message: "Something went wrong. Try again.",
    });
  }
};
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user)
      return res.render("user/signin", {
        title: "Sign In",
        message: "Invalid email or password",
      });

    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch)
      return res.render("user/signin", {
        title: "Sign In",
        message: "Invalid email or password",
      });

    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect("/");
  } catch (error) {
    res.render("user/signin", {
      title: "Sign In",
      message: "Something went wrong. Try again.",
    });
  }
};
exports.logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.redirect("/users/signin");
  } catch (error) {
    console.error(" Logout Error:", error);
    res.status(500).render("user/signin", {
      title: "Sign In",
      message: "Server error during logout.",
    });
  }
};
