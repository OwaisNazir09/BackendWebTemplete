const Home = require("../models/SchoolInfo");


const getAllHeaders = async () => {
  try {
    return await Home.Header.find();
  } catch (error) {
    throw new Error("Failed to fetch headers: " + error.message);
  }
};

const createHeader = async (data) => {
  try {
    const header = new Home.Header(data);
    return await header.save();
  } catch (error) {
    throw new Error("Failed to create header: " + error.message);
  }
};

const updateHeaderById = async (id, data) => {
  try {
    const updated = await Home.Header.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new Error("Header not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update header: " + error.message);
  }
};

const deleteHeaderById = async (id) => {
  try {
    const deleted = await Home.Header.findByIdAndDelete(id);
    if (!deleted) throw new Error("Header not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete header: " + error.message);
  }
};

const getAllSliders = async () => {
  try {
    return await Home.Slider.find();
  } catch (error) {
    throw new Error("Failed to fetch sliders: " + error.message);
  }
};

const createSlider = async (data) => {
  try {
    const slider = new Home.Slider(data);
    return await slider.save();
  } catch (error) {
    throw new Error("Failed to create slider: " + error.message);
  }
};

const updateSliderById = async (id, data) => {
  try {
    const updated = await Home.Slider.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new Error("Slider not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update slider: " + error.message);
  }
};

const deleteSliderById = async (id) => {
  try {
    const deleted = await Home.Slider.findByIdAndDelete(id);
    if (!deleted) throw new Error("Slider not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete slider: " + error.message);
  }
};

const getAllAbouts = async () => {
  try {
    return await Home.About.find();
  } catch (error) {
    throw new Error("Failed to fetch about records: " + error.message);
  }
};

const createAbout = async (data) => {
  try {
    const about = new Home.About(data);
    return await about.save();
  } catch (error) {
    throw new Error("Failed to create about record: " + error.message);
  }
};

const updateAboutById = async (id, data) => {
  try {
    const updated = await Home.About.findByIdAndUpdate(id, data, { new: true });
    if (!updated) throw new Error("About record not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update about record: " + error.message);
  }
};

const deleteAboutById = async (id) => {
  try {
    const deleted = await Home.About.findByIdAndDelete(id);
    if (!deleted) throw new Error("About record not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete about record: " + error.message);
  }
};

const getAllPrincipals = async () => {
  try {
    return await Home.Principal.find();
  } catch (error) {
    throw new Error("Failed to fetch principal data: " + error.message);
  }
};

const createPrincipal = async (data) => {
  try {
    const principal = new Home.Principal(data);
    return await principal.save();
  } catch (error) {
    throw new Error("Failed to create principal data: " + error.message);
  }
};

const updatePrincipalById = async (id, data) => {
  try {
    const updated = await Home.Principal.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new Error("Principal record not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update principal record: " + error.message);
  }
};

const deletePrincipalById = async (id) => {
  try {
    const deleted = await Home.Principal.findByIdAndDelete(id);
    if (!deleted) throw new Error("Principal record not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete principal record: " + error.message);
  }
};

const getAllFacilities = async () => {
  try {
    return await Home.Facilities.find();
  } catch (error) {
    throw new Error("Failed to fetch facilities: " + error.message);
  }
};

const createFacilities = async (data) => {
  try {
    const facility = new Home.Facilities(data);
    return await facility.save();
  } catch (error) {
    throw new Error("Failed to create facility: " + error.message);
  }
};

const updateFacilitiesById = async (id, data) => {
  try {
    const updated = await Home.Facilities.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new Error("Facility not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update facility: " + error.message);
  }
};

const deleteFacilitiesById = async (id) => {
  try {
    const deleted = await Home.Facilities.findByIdAndDelete(id);
    if (!deleted) throw new Error("Facility not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete facility: " + error.message);
  }
};
const getAllNews = async () => {
  try {
    return await Home.News.find();
  } catch (error) {
    throw new Error("Failed to fetch news: " + error.message);
  }
};

const createNews = async (data) => {
  try {
    const news = new Home.News(data);
    return await news.save();
  } catch (error) {
    throw new Error("Failed to create news: " + error.message);
  }
};

const updateNewsById = async (id, data) => {
  try {
    const updated = await Home.News.findByIdAndUpdate(id, data, { new: true });
    if (!updated) throw new Error("News not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update news: " + error.message);
  }
};

const deleteNewsById = async (id) => {
  try {
    const deleted = await Home.News.findByIdAndDelete(id);
    if (!deleted) throw new Error("News not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete news: " + error.message);
  }
};

/* -------------------------------------------------------------------------- */
/* 🎥 VIDEOS SERVICES */
/* -------------------------------------------------------------------------- */
const getAllVideos = async () => {
  try {
    return await Home.Videos.find();
  } catch (error) {
    throw new Error("Failed to fetch videos: " + error.message);
  }
};

const createVideos = async (data) => {
  try {
    const video = new Home.Videos(data);
    return await video.save();
  } catch (error) {
    throw new Error("Failed to create video: " + error.message);
  }
};

const updateVideosById = async (id, data) => {
  try {
    const updated = await Home.Videos.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new Error("Video not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update video: " + error.message);
  }
};

const deleteVideosById = async (id) => {
  try {
    const deleted = await Home.Videos.findByIdAndDelete(id);
    if (!deleted) throw new Error("Video not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete video: " + error.message);
  }
};

/* -------------------------------------------------------------------------- */
/* 📝 APPLY SERVICES */
/* -------------------------------------------------------------------------- */
const getAllApply = async () => {
  try {
    return await Home.Apply.find();
  } catch (error) {
    throw new Error("Failed to fetch applications: " + error.message);
  }
};

const createApply = async (data) => {
  try {
    const apply = new Home.Apply(data);
    return await apply.save();
  } catch (error) {
    throw new Error("Failed to create application: " + error.message);
  }
};

const updateApplyById = async (id, data) => {
  try {
    const updated = await Home.Apply.findByIdAndUpdate(id, data, { new: true });
    if (!updated) throw new Error("Application not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update application: " + error.message);
  }
};

const deleteApplyById = async (id) => {
  try {
    const deleted = await Home.Apply.findByIdAndDelete(id);
    if (!deleted) throw new Error("Application not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete application: " + error.message);
  }
};

/* -------------------------------------------------------------------------- */
/* 💬 TESTIMONIALS SERVICES */
/* -------------------------------------------------------------------------- */
const getAllTestimonials = async () => {
  try {
    return await Home.Testimonials.find();
  } catch (error) {
    throw new Error("Failed to fetch testimonials: " + error.message);
  }
};

const createTestimonials = async (data) => {
  try {
    const testimonial = new Home.Testimonials(data);
    return await testimonial.save();
  } catch (error) {
    throw new Error("Failed to create testimonial: " + error.message);
  }
};

const updateTestimonialsById = async (id, data) => {
  try {
    const updated = await Home.Testimonials.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new Error("Testimonial not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update testimonial: " + error.message);
  }
};

const deleteTestimonialsById = async (id) => {
  try {
    const deleted = await Home.Testimonials.findByIdAndDelete(id);
    if (!deleted) throw new Error("Testimonial not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete testimonial: " + error.message);
  }
};

/* -------------------------------------------------------------------------- */
/* 💡 WHY US SERVICES */
/* -------------------------------------------------------------------------- */
const getAllWhyUs = async () => {
  try {
    return await Home.WhyUs.find();
  } catch (error) {
    throw new Error("Failed to fetch Why Us records: " + error.message);
  }
};

const createWhyUs = async (data) => {
  try {
    const whyus = new Home.WhyUs(data);
    return await whyus.save();
  } catch (error) {
    throw new Error("Failed to create Why Us record: " + error.message);
  }
};

const updateWhyUsById = async (id, data) => {
  try {
    const updated = await Home.WhyUs.findByIdAndUpdate(id, data, { new: true });
    if (!updated) throw new Error("Why Us record not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update Why Us record: " + error.message);
  }
};

const deleteWhyUsById = async (id) => {
  try {
    const deleted = await Home.WhyUs.findByIdAndDelete(id);
    if (!deleted) throw new Error("Why Us record not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete Why Us record: " + error.message);
  }
};

/* -------------------------------------------------------------------------- */
/* 📞 CONTACT SERVICES */
/* -------------------------------------------------------------------------- */
const getAllContact = async () => {
  try {
    return await Home.Contact.find();
  } catch (error) {
    throw new Error("Failed to fetch contact details: " + error.message);
  }
};

const createContact = async (data) => {
  try {
    const contact = new Home.Contact(data);
    return await contact.save();
  } catch (error) {
    throw new Error("Failed to create contact: " + error.message);
  }
};

const updateContactById = async (id, data) => {
  try {
    const updated = await Home.Contact.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new Error("Contact not found");
    return updated;
  } catch (error) {
    throw new Error("Failed to update contact: " + error.message);
  }
};

const deleteContactById = async (id) => {
  try {
    const deleted = await Home.Contact.findByIdAndDelete(id);
    if (!deleted) throw new Error("Contact not found");
    return deleted;
  } catch (error) {
    throw new Error("Failed to delete contact: " + error.message);
  }
};

/* -------------------------------------------------------------------------- */
/* ✅ EXPORT ALL SERVICES */
/* -------------------------------------------------------------------------- */
module.exports = {
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
};
