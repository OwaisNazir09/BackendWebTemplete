const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  try {
    
    const token = req.cookies.token;

    if (!token) {
      return res.redirect("/users/signin");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    return res.redirect("/users/signin");
  }
};

module.exports = Auth;
