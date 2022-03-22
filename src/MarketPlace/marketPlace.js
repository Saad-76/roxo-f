import React from "react";
import MarketHeader from "./marketHeader";
import "./marketPlace.css"
import MarketProduct from "./marketProduct";
import MarketProductDetail from "./marketProductDetail";
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"

const MarketPlace=()=>{
    return(
        <>
       <Header/>
        <MarketHeader/>
        <MarketProduct/>
        {/* <MarketProductDetail/> */}
        <Footer/>
        </>
    );
}
export default MarketPlace;