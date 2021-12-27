import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { hideModalAcion } from "../../actions/modalActions";
import "./styles.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal);
  const { modalComponent, showModal } = modal;
  console.log("display modal state =>", modal);

  const onClickClose = () => {
    dispatch(hideModalAcion());
  };

  const getModal = (children: any) => {
    return (
      <div className="modal-overlay">
        <div className="modal-base">
          <div className="head">
            <button onClick={onClickClose}>Close</button>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    );
  };

  return showModal
    ? ReactDOM.createPortal(
        getModal(modalComponent),
        document.getElementById("modal-portal") as Element
      )
    : null;
};

export default Modal;
