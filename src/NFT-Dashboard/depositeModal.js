import React from 'react'
import "./depositeModal.css"
import {ImCopy} from "react-icons/im"
import {BiQrScan} from "react-icons/bi"



const DepositeModal=()=> {
    return (
        <>
                     
    <div
      class="modal fade"
      id="DepositeModal"
      tabindex="-1"
      aria-labelledby="EarningModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-size-deposit">
        <div class="modal-content">
         
          <div class="modal-style deposit-modal-inner-height">
        <h5 className="depositeModal-heading">Deposit</h5>
        <div className="depositModal-makeSure" >
            <h6>Make Sure:</h6>
            <p>1. Send only ROXO to this deposit address.</p>
            <p>2. Ensure that the network is same while sending.</p>
        </div>

        <div className="deposit-address">
            <h6>Address: </h6>
            <input  className="address-field" type="text" placeholder="0x00000000000000000000000000000000000" />
            <button className="copy-icon-depositModal"> <ImCopy size={20}/> </button>
            <button className="scan-icon-depositModal"> <BiQrScan size={20}/> </button>



        </div>

        <div className="deposit-network col-md-4">
           <h6>Select Network: </h6> 
            {/* <input className="network-field" placeholder="Ensure the network is same while sending."/> */}
<div>
     <select
              className="network-field"
              
            >
      
              <option selected>Ensure the network is same while sending.</option>
              <option value="Customer">Ensure the network is same while sending</option>
              <option value="Employee">Ensure the network is same while sending </option>
            </select>
          </div>


        </div>

        <div className="deposit-minimum">
            <p>Minimum Deposit: </p>
            <p className="minimumDeposite-field">0.2342 ROXO</p>
        </div>

          </div>
       
      
        </div>
      </div>
    </div>

        </>
    )
}

export default DepositeModal;
