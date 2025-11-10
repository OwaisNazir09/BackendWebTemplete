const {
  getAllHeaders,
  createHeader,
  updateHeaderById,
  deleteHeaderById,
  getAllSliders,
  createSlider,
  updateSliderById,
  deleteSliderById,
  getAllAbouts,
  createAbout,
  updateAboutById,
  deleteAboutById,
  getAllPrincipals,
  createPrincipal,
  updatePrincipalById,
  deletePrincipalById,
  getAllFacilities,
  createFacilities,
  updateFacilitiesById,
  deleteFacilitiesById,
  getAllNews,
  createNews,
  updateNewsById,
  deleteNewsById,
  getAllVideos,
  createVideos,
  updateVideosById,
  deleteVideosById,
  getAllApply,
  createApply,
  updateApplyById,
  deleteApplyById,
  getAllTestimonials,
  createTestimonials,
  updateTestimonialsById,
  deleteTestimonialsById,
  getAllWhyUs,
  createWhyUs,
  updateWhyUsById,
  deleteWhyUsById,
  getAllContact,
  createContact,
  updateContactById,
  deleteContactById,
} = require("../services/homeService");

const bufferToDataUri = (file) =>
  file
    ? `data:${file.mimetype};base64,${file.buffer.toString("base64")}`
    : null;

const getHeader = async (req, res) => {
  try {
    const headers = await getAllHeaders();
    res.render("home/header", { title: "Header Section", data: headers });
  } catch (error) {
    res.render("home/header", {
      title: "Header Section",
      message: error.message,
    });
  }
};

const createHeaderCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.files?.logo?.[0]) data.logo = bufferToDataUri(req.files.logo[0]);
    if (req.files?.bannerImage?.[0])
      data.bannerImage = bufferToDataUri(req.files.bannerImage[0]);
    await createHeader(data);
    res.redirect("/home/header");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateHeaderCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.files?.logo?.[0]) data.logo = bufferToDataUri(req.files.logo[0]);
    if (req.files?.bannerImage?.[0])
      data.bannerImage = bufferToDataUri(req.files.bannerImage[0]);
    await updateHeaderById(req.params.id, data);
    res.redirect("/home/header");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteHeaderCtrl = async (req, res) => {
  try {
    await deleteHeaderById(req.params.id);
    res.redirect("/home/header");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

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
    if (req.file) data.imageUrl = bufferToDataUri(req.file);
    await createSlider(data);
    res.redirect("/home/slider");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateSliderCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.imageUrl = bufferToDataUri(req.file);
    await updateSliderById(req.params.id, data);
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
    if (req.file) data.image = bufferToDataUri(req.file);
    await createAbout(data);
    res.redirect("/home/about");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateAboutCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = bufferToDataUri(req.file);
    await updateAboutById(req.params.id, data);
    res.redirect("/home/about");
  } catch (error) {
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
    if (req.file) data.image = bufferToDataUri(req.file);
    await createPrincipal(data);
    res.redirect("/home/principal");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updatePrincipalCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = bufferToDataUri(req.file);
    await updatePrincipalById(req.params.id, data);
    res.redirect("/home/principal");
  } catch (error) {
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
    if (req.file) data.image = bufferToDataUri(req.file);
    await createFacilities(data);
    res.redirect("/home/facilities");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateFacilitiesCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = bufferToDataUri(req.file);
    await updateFacilitiesById(req.params.id, data);
    res.redirect("/home/facilities");
  } catch (error) {
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
    if (req.file) data.image = bufferToDataUri(req.file);
    if (!data.date) data.date = new Date();
    await createNews(data);
    res.redirect("/home/news");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateNewsCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = bufferToDataUri(req.file);
    await updateNewsById(req.params.id, data);
    res.redirect("/home/news");
  } catch (error) {
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
    if (req.file) data.thumbnail = bufferToDataUri(req.file);
    await createVideos(data);
    res.redirect("/home/videos");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateVideosCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.thumbnail = bufferToDataUri(req.file);
    await updateVideosById(req.params.id, data);
    res.redirect("/home/videos");
  } catch (error) {
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
    if (req.file) data.image = bufferToDataUri(req.file);
    await createTestimonials(data);
    res.redirect("/home/testimonials");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateTestimonialsCtrl = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = bufferToDataUri(req.file);
    await updateTestimonialsById(req.params.id, data);
    res.redirect("/home/testimonials");
  } catch (error) {
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
