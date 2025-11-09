const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String, 
      trim: true,
    },
    bannerImage: {
      type: String,
      trim: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const sliderSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    caption: String,
    description: String,
    order: Number,
  },
  { timestamps: true }
);

const aboutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    mission: String,
    vision: String,
  },
  { timestamps: true }
);

const principalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    image: String,
  },
  { timestamps: true }
);

const facilitiesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
  },
  { timestamps: true }
);
const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: String,
    date: { type: Date, default: Date.now },
    image: String,
  },
  { timestamps: true }
);
const videosSchema = new mongoose.Schema(
  {
    title: String,
    videoUrl: { type: String, required: true },
    thumbnail: String,
  },
  { timestamps: true }
);
const applySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    classApplied: String,
    message: String,
  },
  { timestamps: true }
);

const testimonialsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    role: String,
    image: String,
  },
  { timestamps: true }
);

const whyUsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    icon: String,
  },
  { timestamps: true }
);

const contactSchema = new mongoose.Schema(
  {
    address: String,
    email: String,
    phone: String,
    mapEmbed: String,
  },
  { timestamps: true }
);

const Home = {
  Header: mongoose.model("Header", headerSchema),
  Slider: mongoose.model("Slider", sliderSchema),
  About: mongoose.model("About", aboutSchema),
  Principal: mongoose.model("Principal", principalSchema),
  Facilities: mongoose.model("Facilities", facilitiesSchema),
  News: mongoose.model("News", newsSchema),
  Videos: mongoose.model("Videos", videosSchema),
  Apply: mongoose.model("Apply", applySchema),
  Testimonials: mongoose.model("Testimonials", testimonialsSchema),
  WhyUs: mongoose.model("WhyUs", whyUsSchema),
  Contact: mongoose.model("Contact", contactSchema),
};

module.exports = Home;
