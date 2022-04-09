import React from "react";
import "./productModal.css";

const MarketProductModal = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body" style={{ color: "white" }}>
              <div className="card_item ">
                <div>
                  <p>Lorem</p>
                </div>
                <div className="crd-head"></div>
                <center>
                  <button className="crd_btn">ID: 133856</button>
                </center>
                <center>
                  <div className="btm_txt_crd">BUSD: 15,17</div>
                </center>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
             Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarketProductModal;
