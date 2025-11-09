const {
  // 🏠 HEADER
  getAllHeaders,
  createHeader,
  updateHeaderById,
  deleteHeaderById,

  // 🎞️ SLIDER
  getAllSliders,
  createSlider,
  updateSliderById,
  deleteSliderById,

  // 📄 ABOUT
  getAllAbouts,
  createAbout,
  updateAboutById,
  deleteAboutById,

  // 👨‍🏫 PRINCIPAL
  getAllPrincipals,
  createPrincipal,
  updatePrincipalById,
  deletePrincipalById,

  // 🏫 FACILITIES
  getAllFacilities,
  createFacilities,
  updateFacilitiesById,
  deleteFacilitiesById,

  // 📰 NEWS
  getAllNews,
  createNews,
  updateNewsById,
  deleteNewsById,

  // 🎥 VIDEOS
  getAllVideos,
  createVideos,
  updateVideosById,
  deleteVideosById,

  // 📝 APPLY NOW
  getAllApply,
  createApply,
  updateApplyById,
  deleteApplyById,

  // 💬 TESTIMONIALS
  getAllTestimonials,
  createTestimonials,
  updateTestimonialsById,
  deleteTestimonialsById,

  // 💡 WHY US
  getAllWhyUs,
  createWhyUs,
  updateWhyUsById,
  deleteWhyUsById,

  getAllContact,
  createContact,
  updateContactById,
  deleteContactById,
} = require("../services/homeService");

const getHeader = async (req, res) => {
  try {
    const headers = await getAllHeaders();
    res.render("home/header", { title: "Header Section", data: headers });
  } catch (error) {
    console.error("Error loading header:", error.message);
    res.render("home/header", {
      title: "Header Section",
      message: error.message,
    });
  }
};

const createHeaderCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.files) {
      if (req.files.logo && req.files.logo[0]) {
        data.logo = `/uploads/${req.files.logo[0].filename}`;
      }
      if (req.files.bannerImage && req.files.bannerImage[0]) {
        data.bannerImage = `/uploads/${req.files.bannerImage[0].filename}`;
      }
    }

    await createHeader(data);
    res.redirect("/home/header");
  } catch (error) {
    console.error(" Error creating header:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updateHeaderCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.files) {
      if (req.files.logo && req.files.logo[0]) {
        data.logo = `/uploads/${req.files.logo[0].filename}`;
      }
      if (req.files.bannerImage && req.files.bannerImage[0]) {
        data.bannerImage = `/uploads/${req.files.bannerImage[0].filename}`;
      }
    }

    await updateHeaderById(req.params.id, data);
    res.redirect("/home/header");
  } catch (error) {
    console.error("Error updating header:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const deleteHeaderCtrl = async (req, res) => {
  try {
    await deleteHeaderById(req.params.id);
    res.redirect("/home/header");
  } catch (error) {
    console.error("Error deleting header:", error.message);
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 🎞️ SLIDER SECTION */
/* -------------------------------------------------------------------------- */
const getSlider = async (req, res) => {
  try {
    const sliders = await getAllSliders();
    res.render("home/slider", { title: "Slider Section", data: sliders });
  } catch (error) {
    res.render("home/slider", {
      title: "Slider Section",
      message: error.message,
    });
  }
};

const createSliderCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.imageUrl = `/uploads/${req.file.filename}`;
    }

    if (!data.imageUrl) {
      throw new Error("Image is required for slider.");
    }

    await createSlider(data);
    res.redirect("/home/slider");
  } catch (error) {
    console.error("Error creating slider:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updateSliderCtrl = async (req, res) => {
  try {
    await updateSliderById(req.params.id, req.body);
    res.redirect("/home/slider");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteSliderCtrl = async (req, res) => {
  try {
    await deleteSliderById(req.params.id);
    res.redirect("/home/slider");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 📄 ABOUT SECTION */
/* -------------------------------------------------------------------------- */
const getAbout = async (req, res) => {
  try {
    const abouts = await getAllAbouts();
    res.render("home/about", { title: "About Section", data: abouts });
  } catch (error) {
    res.render("home/about", {
      title: "About Section",
      message: error.message,
    });
  }
};

const createAboutCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    await createAbout(data);
    res.redirect("/home/about");
  } catch (error) {
    console.error("Error creating About:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updateAboutCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    await updateAboutById(req.params.id, data);

    res.redirect("/home/about");
  } catch (error) {
    console.error("Error updating About:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const deleteAboutCtrl = async (req, res) => {
  try {
    await deleteAboutById(req.params.id);
    res.redirect("/home/about");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getPrincipal = async (req, res) => {
  try {
    const principals = await getAllPrincipals();
    res.render("home/principal", {
      title: "Principal Section",
      data: principals,
    });
  } catch (error) {
    res.render("home/principal", {
      title: "Principal Section",
      message: error.message,
    });
  }
};

const createPrincipalCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    // ✅ Handle uploaded image if present
    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    await createPrincipal(data);
    res.redirect("/home/principal");
  } catch (error) {
    console.error("Error creating principal:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updatePrincipalCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    await updatePrincipalById(req.params.id, data);
    res.redirect("/home/principal");
  } catch (error) {
    console.error("Error updating principal:", error.message);
    res.status(400).send({ message: error.message });
  }
};
const deletePrincipalCtrl = async (req, res) => {
  try {
    await deletePrincipalById(req.params.id);
    res.redirect("/home/principal");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 🏫 FACILITIES SECTION */
/* -------------------------------------------------------------------------- */
const getFacilities = async (req, res) => {
  try {
    const facilities = await getAllFacilities();
    res.render("home/facilities", {
      title: "Facilities Section",
      data: facilities,
    });
  } catch (error) {
    res.render("home/facilities", {
      title: "Facilities Section",
      message: error.message,
    });
  }
};
const createFacilitiesCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    await createFacilities(data);
    res.redirect("/home/facilities");
  } catch (error) {
    console.error("Error creating facility:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updateFacilitiesCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    await updateFacilitiesById(req.params.id, data);
    res.redirect("/home/facilities");
  } catch (error) {
    console.error("Error updating facility:", error.message);
    res.status(400).send({ message: error.message });
  }
};
const deleteFacilitiesCtrl = async (req, res) => {
  try {
    await deleteFacilitiesById(req.params.id);
    res.redirect("/home/facilities");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 📰 NEWS SECTION */
/* -------------------------------------------------------------------------- */
const getNews = async (req, res) => {
  try {
    const news = await getAllNews();
    res.render("home/news", { title: "News Section", data: news });
  } catch (error) {
    res.render("home/news", { title: "News Section", message: error.message });
  }
};
const createNewsCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    if (!data.date) {
      data.date = new Date();
    }

    await createNews(data);
    res.redirect("/home/news");
  } catch (error) {
    console.error("Error creating news:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updateNewsCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    await updateNewsById(req.params.id, data);
    res.redirect("/home/news");
  } catch (error) {
    console.error("Error updating news:", error.message);
    res.status(400).send({ message: error.message });
  }
};
const deleteNewsCtrl = async (req, res) => {
  try {
    await deleteNewsById(req.params.id);
    res.redirect("/home/news");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 🎥 VIDEOS SECTION */
/* -------------------------------------------------------------------------- */
const getVideos = async (req, res) => {
  try {
    const videos = await getAllVideos();
    res.render("home/videos", { title: "Videos Section", data: videos });
  } catch (error) {
    res.render("home/videos", {
      title: "Videos Section",
      message: error.message,
    });
  }
};

const createVideosCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    // ✅ Add thumbnail if uploaded
    if (req.file) {
      data.thumbnail = `/uploads/${req.file.filename}`;
    }

    await createVideos(data);
    res.redirect("/home/videos");
  } catch (error) {
    console.error("Error creating video:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updateVideosCtrl = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.thumbnail = `/uploads/${req.file.filename}`;
    }

    await updateVideosById(req.params.id, data);
    res.redirect("/home/videos");
  } catch (error) {
    console.error("Error updating video:", error.message);
    res.status(400).send({ message: error.message });
  }
};
const deleteVideosCtrl = async (req, res) => {
  try {
    await deleteVideosById(req.params.id);
    res.redirect("/home/videos");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getApply = async (req, res) => {
  try {
    const apply = await getAllApply();
    res.render("home/apply", { title: "Apply Section", data: apply });
  } catch (error) {
    res.render("home/apply", {
      title: "Apply Section",
      message: error.message,
    });
  }
};

const createApplyCtrl = async (req, res) => {
  try {
    await createApply(req.body);
    res.redirect("/home/apply");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateApplyCtrl = async (req, res) => {
  try {
    await updateApplyById(req.params.id, req.body);
    res.redirect("/home/apply");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteApplyCtrl = async (req, res) => {
  try {
    await deleteApplyById(req.params.id);
    res.redirect("/home/apply");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 💬 TESTIMONIALS SECTION */
/* -------------------------------------------------------------------------- */
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await getAllTestimonials();
    res.render("home/testimonials", {
      title: "Testimonials Section",
      data: testimonials,
    });
  } catch (error) {
    res.render("home/testimonials", {
      title: "Testimonials Section",
      message: error.message,
    });
  }
};

const createTestimonialsCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }
    await createTestimonials(data);
    res.redirect("/home/testimonials");
  } catch (error) {
    console.error("Error creating testimonial:", error.message);
    res.status(400).send({ message: error.message });
  }
};

const updateTestimonialsCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }
    await updateTestimonialsById(req.params.id, data);
    res.redirect("/home/testimonials");
  } catch (error) {
    console.error("Error updating testimonial:", error.message);
    res.status(400).send({ message: error.message });
  }
};
const deleteTestimonialsCtrl = async (req, res) => {
  try {
    await deleteTestimonialsById(req.params.id);
    res.redirect("/home/testimonials");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 💡 WHY US SECTION */
/* -------------------------------------------------------------------------- */
const getWhyUs = async (req, res) => {
  try {
    const whyus = await getAllWhyUs();
    res.render("home/whyus", { title: "Why Us Section", data: whyus });
  } catch (error) {
    res.render("home/whyus", {
      title: "Why Us Section",
      message: error.message,
    });
  }
};

const createWhyUsCtrl = async (req, res) => {
  try {
    await createWhyUs(req.body);
    res.redirect("/home/whyus");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateWhyUsCtrl = async (req, res) => {
  try {
    await updateWhyUsById(req.params.id, req.body);
    res.redirect("/home/whyus");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteWhyUsCtrl = async (req, res) => {
  try {
    await deleteWhyUsById(req.params.id);
    res.redirect("/home/whyus");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 📞 CONTACT SECTION */
/* -------------------------------------------------------------------------- */
const getContact = async (req, res) => {
  try {
    const contact = await getAllContact();
    res.render("home/contact", { title: "Contact Section", data: contact });
  } catch (error) {
    res.render("home/contact", {
      title: "Contact Section",
      message: error.message,
    });
  }
};

const createContactCtrl = async (req, res) => {
  try {
    await createContact(req.body);
    res.redirect("/home/contact");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateContactCtrl = async (req, res) => {
  try {
    await updateContactById(req.params.id, req.body);
    res.redirect("/home/contact");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteContactCtrl = async (req, res) => {
  try {
    await deleteContactById(req.params.id);
    res.redirect("/home/contact");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

/* -------------------------------------------------------------------------- */
/* 📦 EXPORT ALL CONTROLLERS */
/* -------------------------------------------------------------------------- */
module.exports = {
  getHeader,
  createHeaderCtrl,
  updateHeaderCtrl,
  deleteHeaderCtrl,
  getSlider,
  createSliderCtrl,
  updateSliderCtrl,
  deleteSliderCtrl,
  getAbout,
  createAboutCtrl,
  updateAboutCtrl,
  deleteAboutCtrl,
  getPrincipal,
  createPrincipalCtrl,
  updatePrincipalCtrl,
  deletePrincipalCtrl,
  getFacilities,
  createFacilitiesCtrl,
  updateFacilitiesCtrl,
  deleteFacilitiesCtrl,
  getNews,
  createNewsCtrl,
  updateNewsCtrl,
  deleteNewsCtrl,
  getVideos,
  createVideosCtrl,
  updateVideosCtrl,
  deleteVideosCtrl,
  getApply,
  createApplyCtrl,
  updateApplyCtrl,
  deleteApplyCtrl,
  getTestimonials,
  createTestimonialsCtrl,
  updateTestimonialsCtrl,
  deleteTestimonialsCtrl,
  getWhyUs,
  createWhyUsCtrl,
  updateWhyUsCtrl,
  deleteWhyUsCtrl,
  getContact,
  createContactCtrl,
  updateContactCtrl,
  deleteContactCtrl,
};
