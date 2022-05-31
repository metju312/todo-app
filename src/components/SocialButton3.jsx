import React from "react";
import SocialIcon from "src/components/SocialIcon3";
import { text7, social_button_wrapper3 } from "./SocialButton3.module.css";

function SocialButton() {
  return (
    <div className={social_button_wrapper3}>
      <SocialIcon />
      <span className={`${text7} text_md_medium`}>Sign in with Twitter</span>
    </div>
  );
}

export default SocialButton;
