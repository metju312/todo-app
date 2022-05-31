import React from "react";
import SocialIcon from "src/components/SocialIcon2";
import { text6, social_button_wrapper2 } from "./SocialButton2.module.css";

function SocialButton() {
  return (
    <div className={social_button_wrapper2}>
      <SocialIcon prop="variant2" />
      <span className={`${text6} text_md_medium`}>Sign in with Apple</span>
    </div>
  );
}

export default SocialButton;
