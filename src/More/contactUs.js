import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutUs from "./aboutUs";
import ContactUsForm from "./contactUsForm";
import Header from "../HomePage/header";
import Footer from "../HomePage/footer";
import ContactUsIcon from "./contactUsIcon";
import "./contactUs.css";

const ContactUs = () => {
  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 4);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
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
