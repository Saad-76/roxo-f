import React from 'react';
import CareersHome from "./careersHome"
import Path from "./path"
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"
import "./careers.css"
const  Careers=()=> {
  return (
      <>
      <div className='careers-background-color'>
<Header/>
<CareersHome/>
<Path/>
<div className='carers-footer-height'>
<Footer/>
</div>
</div>
      </>
  );
}

export default Careers;
