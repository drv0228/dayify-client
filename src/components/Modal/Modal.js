import React from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          <Link to="/" className="modal__link">
            {" "}
            X{" "}
          </Link>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
