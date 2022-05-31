import React from "react";
import {
  styled279,
  styled280,
  styled281,
  icon,
  mail_wrapper,
} from "./Mail.module.css";

function Mail() {
  return (
    <div className={mail_wrapper}>
      <div className={icon}>
        <svg className={styled281}>
          <path
            d="M 2 0 L 18 0 C 19.100000023841858 0 20 0.8999999761581421 20 2 L 20 14 C 20 15.100000023841858 19.100000023841858 16 18 16 L 2 16 C 0.8999999761581421 16 0 15.100000023841858 0 14 L 0 2 C 0 0.8999999761581421 0.8999999761581421 0 2 0 Z"
            className={styled279}
          />
          <path d="M 20 2 L 10 9 L 0 2" className={styled280} />
        </svg>
      </div>
    </div>
  );
}

export default Mail;
