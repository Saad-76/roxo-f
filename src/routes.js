import React from "react";
import HomePage from "./HomePage/homePage";
import Login from "./HomePage/login"
import SignUp from "./HomePage/signUp"
import Dashboard from "./Dashboard/dashboard";
import NftDashboard from "./NFT-Dashboard/nftDashboard"
import OurGames from "./OurGames/ourGames"
import ContactUs from "./More/contactUs"
import Careers from "./Careers/careers"
import Engineering from "./Careers/engineering"
import Art from "./Careers/art"
import Design from "./Careers/design"
import Operation from "./Careers/operation"
import Other from "./Careers/other"
import { BrowserRouter as Router, Route, Redirect ,Switch} from "react-router-dom";
import Apply from "./Careers/apply";
import ApplyForm from "./Careers/applyForm";
import Support from "./Support/support";
import BuyForm from "./HomePage/buyForm";
import PortSideBar from "./PortFolio/portSideBar"
import MarketPlace from "./MarketPlace/marketPlace";
import MarketProductDetail from "./MarketPlace/marketProductDetail";
// import sectionOne from "./PortFolio/sectionOne"
// import sectionTwo from "./PortFolio/sectionTwo"
// import sectionThree from "./PortFolio/sectionThree"
// import sectionFour from "./PortFolio/sectionFour"
// import sectionFive from "./PortFolio/sectionFive"



const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/homepage" component={HomePage}>
          <HomePage />
        </Route>
        <Route path="/signUp" component={SignUp}>
          <SignUp />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route path="/ourgames" component={OurGames}>
          <OurGames />
        </Route>
        <Route path="/contactus" component={ContactUs}>
          <ContactUs />
        </Route>
        <Route path="/careers" component={Careers}>
          <Careers />
        </Route>
        <Route path="/support" component={Support}>
          <Support />
        </Route>
        <Route path="/apply" component={Apply}>
          <Apply />
        </Route>
        <Route path="/applyform" component={ApplyForm}>
          <ApplyForm />
        </Route>
        <Route path="/engineering" component={Engineering}>
          <Engineering />
        </Route>
         <Route path="/design" component={Design}>
          <Design />
        </Route>
        <Route path="/art" component={Art}>
          <Art />
        </Route>
        <Route path="/operation" component={Operation}>
          <Operation />
        </Route>
        <Route path="/other" component={Other}>
          <Other />
        </Route>
        <Route path="/buyForm" component={BuyForm}>
          <BuyForm/>
        </Route>
        <Route path="/portfolio" component={PortSideBar}>
          <PortSideBar/>
        </Route>
        <Route path="/portfolio" component={PortSideBar}>
          <PortSideBar/>
        </Route>

        <Route path="/marketPlace" component={MarketPlace}>
          <MarketPlace/>
        </Route>
        <Route path="/market_product_detail" component={MarketProductDetail}>
          <MarketProductDetail/>
        </Route>
        {/* <Route path="/one">
          <sectionOne/>
        </Route>
        <Route path="/two">
          <sectionTwo/>
        </Route>
        <Route path="/three">
          <sectionThree/>
        </Route>
        <Route path="/four">
          <sectionFour/>
        </Route>
        <Route path="/five">
          <sectionFive/>
        </Route> */}
        


        {/* -----------------Private-------- */}
        <Route path="/dashboard" component={Dashboard}>
          <Dashboard />
        </Route>
        <Route path="/nftdashboard" component={NftDashboard}>
          <NftDashboard />
        </Route>
        <Redirect  to="/homepage" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
