import React from 'react';
import style from "./style.module.css";
import closeIcon from "./close.svg";


/**
 * Return a simple confirmation modal that can close itself with a button
 * @param { String } text 
 * @param { Function } methodeOff as the the method closing the modal
 * @returns { HTMLElement }
 */
const Manonmodal = ({ text, methodeOff }) => {

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
            onClick={methodeOff}
            className={style.closeButton}
          />
        </div>
      </div>
    </div>
  );
}


export default Manonmodal;