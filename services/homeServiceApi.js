const Home = require("../models/SchoolInfo");

const getAllHeaders = async () => Home.Header.find();
const getAllSliders = async () => Home.Slider.find();
const getAllAbouts = async () => Home.About.find();
const getAllPrincipals = async () => Home.Principal.find();
const getAllFacilities = async () => Home.Facilities.find();
const getAllNews = async () => Home.News.find();
const getAllVideos = async () => Home.Videos.find();
const getAllApply = async () => Home.Apply.find();
const getAllTestimonials = async () => Home.Testimonials.find();
const getAllWhyUs = async () => Home.WhyUs.find();
const getAllContact = async () => Home.Contact.find();

module.exports = {
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
};
