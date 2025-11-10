const {
  getAllHeaders,
  getAllSliders,
  getAllAbouts,
  getAllPrincipals,
  getAllFacilities,
  getAllNews,
  getAllVideos,
  getAllApply,
  getAllTestimonials,
  getAllWhyUs,
  getAllContact,
} = require("../services/homeServiceApi");

// ✅ Helper function for clean, consistent responses
const sendResponse = (res, data, error) => {
  if (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      isResult: false,
      message: error.message,
    });
  }

  return res.status(200).json({
    isResult: true,
    data,
  });
};

// 🏫 Header
exports.getHeader = async (req, res) => {
  try {
    const data = await getAllHeaders();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 🎞️ Slider
exports.getSlider = async (req, res) => {
  try {
    const data = await getAllSliders();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 📄 About
exports.getAbout = async (req, res) => {
  try {
    const data = await getAllAbouts();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 👨‍🏫 Principal
exports.getPrincipal = async (req, res) => {
  try {
    const data = await getAllPrincipals();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 🏫 Facilities
exports.getFacilities = async (req, res) => {
  try {
    const data = await getAllFacilities();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 📰 News
exports.getNews = async (req, res) => {
  try {
    const data = await getAllNews();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 🎥 Videos
exports.getVideos = async (req, res) => {
  try {
    const data = await getAllVideos();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 📝 Apply
exports.getApply = async (req, res) => {
  try {
    const data = await getAllApply();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 💬 Testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const data = await getAllTestimonials();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// ❓ Why Us
exports.getWhyUs = async (req, res) => {
  try {
    const data = await getAllWhyUs();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};

// 📞 Contact
exports.getContact = async (req, res) => {
  try {
    const data = await getAllContact();
    sendResponse(res, data);
  } catch (err) {
    sendResponse(res, null, err);
  }
};
