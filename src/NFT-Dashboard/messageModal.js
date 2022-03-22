import React from "react";

import { Modal } from "react-bootstrap";

const MessageModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        dialogClassName="messageModal-size"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal_main"
        dialogClassName="message-modal-size"
      >
        <Modal.Body>
          <p>
            The Network you selected is BSC, please confirm that your withdrawl
            address supports the Binance Smart Chain network. If the other
            platform does not support it, your asset may be lost.{" "}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MessageModal;
