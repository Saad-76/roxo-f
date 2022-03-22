import React from 'react';
import "./contactUs.css"
import AboutUs  from "./aboutUs"
import ContactUsForm  from "./contactUsForm"
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"
import ContactUsIcon from './contactUsIcon';

const  ContactUs=()=> {
  return (
      <>
      
      <Header/>
      <AboutUs/>
      <ContactUsIcon/>
<ContactUsForm/>  
<Footer/> 


      </>
  );
}

export default ContactUs;
