import { React,useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import "./privacyPolicy.css";

const PrivacyPolicy = () => {
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
      <div className="backgroud-privacy-policy">
        <h1>Terms and Conditions</h1>
        <p>
          Your privacy is valuable to us and we take seriously our duty to take
          care of it. We respect your rights to privacy and are dedicated to
          protecting the sensitive information gathered about you. What data
          Roxo collects and how we use, reveal, move, and store it is defined in
          this Privacy Policy. You will not be able to play our games or use our
          services if you do not want Roxo to collect, store, use or share your
          data in the forms outlined in this Privacy Policy.
        </p>
        <p>
          In compliance with this privacy policy (‘Privacy Policy’), Roxo
          gathers, stores and uses your information as a data controller in
          connection with, and in order to provide and create, Roxo games,
          mobile applications, services and websites (collectively referred to
          as ‘Services’). This Privacy Policy governs all of our services,
          whether they are used on mobile devices, PCs or other platforms.{" "}
        </p>
        <h3>Children’ Privacy</h3>
        <p>
          These products are intended for those who are above 3 years of age. We
          are not gathering any personal information from its users.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. It was last modified on Feb 01, 2022.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or suggestions about our Privacy Policy,
          please do not hesitate to contact us at <b>support@roxo.fun</b>
        </p>
      </div>
      <Footer />
    </>
  );
};
export default PrivacyPolicy;
