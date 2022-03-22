import React from 'react'
import "./careers.css"
import PDF from "../Assests/PDF.pdf"

const WhitePaper=()=> {
    const  onResumeClick=()=> {
        window.open(PDF);
      }
    return (
        <div>
              <a onClick={onResumeClick}>
      Resume
   </a>

        </div>
    )
}

export default WhitePaper;
