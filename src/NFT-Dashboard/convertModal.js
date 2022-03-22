import React from 'react';
import "./convertModal.css";
import {VscArrowSwap} from "react-icons/vsc"
const  ConvertModal=()=> {
  return (
<>

      
<div
      class="modal fade"
      id="convertModal"
      tabindex="-1"
      aria-labelledby="EarningModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog covertModal-size">
        <div class="modal-content">
         
          <div class="convertModal-style ">
          <h5 className="convertModal-heading">Convert</h5>   
   

      <div className="convertModal-amount-flex">    

          <div>
          {/* <label for="amount">Amount</label><br/> */}
            <input className="amount-field-convertModal" type="text" id="amount"  placeholder="Amount" /> 
</div>

<div>
          <select
            
            className="convertModal-coinSelection" 
            >
              <option selected>Select</option>
              <option value="Customer"> ROXO Token.</option>
              <option value="Employee">  Game Coins.</option>
            </select>
            </div>


            </div>


          <div className="convertModal-price">
          <p className="convertModal-price-field"> Price: </p>
          <p className="coinEqual" >1 ROXO Token <span className="swap-icon-margin"><VscArrowSwap size={20}/></span>  <span className="gameCoins-margin">10,000 Coin</span></p>
              </div>

          
          <div>
              <label className="convert-coins-label" >You Will Receive:</label><br/>
            <input className="convert-Coins-field" type="text"   placeholder="10,000 Coins" /> 
</div>
<div className="convertModal-button-outer">
<button className="convertModal-button-inner">Confirm</button>
</div>
  

          
          
          
                 </div>
       
      
        </div>
      </div>
    </div>

</> 
  );
}
export default ConvertModal;
