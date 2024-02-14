import React from 'react';
import style from "./style.module.css";
import closeIcon from "./close.svg";


/**
 * Return a simple confirmation modal that can close itself with a button
 * @param { String } text 
 * @param { Function } onClose as the the method called when the close button is clicked
 * @returns { HTMLElement }
 */
const ManonModal = ({ text, onClose }) => {

  return (
    <div className={style.modalContainer}>
      <div id="confirmation" className={style.modal}>
        <span>{text}</span>
        <div className={style.closeButtonContainer}>
          <img
            src={closeIcon}
            alt="close"
            className={style.icon}
          />
          <input
            type="button"
            onClick={onClose}
            className={style.closeButton}
          />
        </div>
      </div>
    </div>
  );
}


export default ManonModal;