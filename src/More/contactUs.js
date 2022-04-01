import React from "react";
import AboutUs from "./aboutUs";
import ContactUsForm from "./contactUsForm";
import Header from "../HomePage/header";
import Footer from "../HomePage/footer";
import ContactUsIcon from "./contactUsIcon";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <ContactUsIcon />
      <ContactUsForm />
      <div className="contact-us-footer-outer">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
