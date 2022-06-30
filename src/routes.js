import React from "react";
import HomePage from "./HomePage/homePage";
import Login from "./HomePage/login";
import SignUp from "./HomePage/signUp";
import Dashboard from "./Dashboard/dashboard";
import NftDashboard from "./NFT-Dashboard/nftDashboard";
import OurGames from "./OurGames/ourGames";
import ContactUs from "./More/contactUs";
import Careers from "./Careers/careers";
import Engineering from "./Careers/engineering";
import Art from "./Careers/art";
import Design from "./Careers/design";
import Operation from "./Careers/operation";
import Other from "./Careers/other";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Apply from "./Careers/apply";
import ApplyForm from "./Careers/applyForm";
import Support from "./Support/support";
import BuyForm from "./HomePage/buyForm";
import PortSideBar from "./PortFolio/portSideBar";
import MarketPlace from "./MarketPlace/marketPlace";
import MarketProductDetail from "./MarketPlace/marketProductDetail";
import WalletModal from "./HomePage/walletModal";
import NoJob from "./Careers/noJob";
import TermsAndConditions from "./HomePage/termsAndConditions";
import PrivacyPolicy from "./HomePage/privacyPolicy";

const Routes = () => {
  return (
    <>
      <Router>
        <WalletModal />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/ourgames">
            <OurGames />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/apply">
            <Apply />
          </Route>
          <Route path="/applyform">
            <ApplyForm />
          </Route>
          <Route path="/engineering">
            <Engineering />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/operation">
            <Operation />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
          <Route path="/buySell">
            <BuyForm />
          </Route>
          <Route path="/portfolio">
            <PortSideBar />
          </Route>
          <Route path="/portfolio">
            <PortSideBar />
          </Route>

          <Route path="/marketPlace">
            <MarketPlace />
          </Route>
          <Route path="/market_product_detail">
            <MarketProductDetail />
          </Route>
          <Route path="/no_job">
            <NoJob />
          </Route>
          <Route path="/terms_conditions">
            <TermsAndConditions />
          </Route>
          <Route path="/privacy_policy">
            <PrivacyPolicy />
          </Route>
          {/* -----------------Private-------- */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/nftdashboard">
            <NftDashboard />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
