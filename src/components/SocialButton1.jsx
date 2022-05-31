import React from "react";
import SocialIcon from "src/components/SocialIcon1";
import { text5, social_button_wrapper1 } from "./SocialButton1.module.css";

function SocialButton() {
  return (
    <div className={social_button_wrapper1}>
      <SocialIcon prop="variant2" />
      <span className={`${text5} text_md_medium`}>Sign in with Facebook</span>
    </div>
  );
}

export default SocialButton;
