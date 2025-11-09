const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const appRoutes = require("./routes/appRoutes");
const userRoutes = require("./routes/userRoutes");
const auth = require("./middleware/authMiddleware");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");

dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(" MongoDB Connection Error:", err.message));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout/layout");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", appRoutes);

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Page Not Found",
    layout: false,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
