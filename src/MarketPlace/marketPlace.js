import React from "react";
import MarketHeader from "./marketHeader";
import "./marketPlace.css"
import MarketProduct from "./marketProduct";
import MarketProductDetail from "./marketProductDetail";
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"
import NotAvailable from "./notAvailable";

const MarketPlace=()=>{
    return(
        <div style={{backgroundColor:"#201d47"}}>
       <Header/>
       <NotAvailable/>
        {/* <MarketHeader/>
        <MarketProduct/> */}
        {/* <MarketProductDetail/> */}
        <Footer/>
        </div>
    );
}
export default MarketPlace;