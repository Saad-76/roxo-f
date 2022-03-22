import React from 'react';
import "./cardProp.css"
import { Link } from 'react-router-dom';
const  CardProp=({headLg,headSm,content,button,link})=> {
  return (
      <>
      <div>
          <div className="card-main-style">
              <h4 className="large-heading"> {headLg}</h4>
              <h6 className="small-heading">{headSm}</h6>
              <p className="content-card">{content}</p>
              <div className='card-button-outer-style'>
       <button className="card-button-style">      <Link to={link}>{button} </Link> </button>
          </div>
          </div>
      </div>
      </>
  );
}

export default CardProp;
