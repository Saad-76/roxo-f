import React from 'react'
import "./withDrawModal.css"

const WithDrawModal=()=> {
    return (
        <>
                     
    <div
      class="modal fade"
      id="WithDrawModal"
      tabindex="-1"
      aria-labelledby="EarningModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-size-withDraw">
        <div class="modal-content">
         
        <div class="withDraw-modal-style">
        <h6 className="withDrawModal-heading">WithDraw</h6>
        

        <div className="withDraw-address">
            <h6>WithDraw Address: </h6>
            <input className="withdraw-address-field" placeholder="0x00000000000000000000000000000000000" />
        </div>

        <div className="withDraw-network">
            <h6>Select Network: </h6>
        
            <select
            
            className="withDraw-network-field" 
            >
      
              <option selected>Ensure the network is same while sending.</option>
              <option value="Customer">Ensure the network is same while sending</option>
              <option value="Employee">Ensure the network is same while sending </option>
            </select>
        </div>

        <div className="withDraw-Amount">
            <h6>WithDraw Amount: </h6>
            <input className="withDraw-Amount-field" placeholder="0.2342 ROXO"/>
        </div>
        <div className="withDraw-Receive">
            <h6>Receive Amount: </h6>
            <p className="withDraw-recieve-field">7990 ROXO<br/>ROXO network fee included</p>
        </div>
<div className="withDrawModal-button">
<button className="withDrawModal-button-style"> WithDraw</button>
</div>
          </div>
       
      
        </div>
      </div>
    </div>

        </>
    )
}

export default WithDrawModal;
