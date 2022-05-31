import React from "react";
import SocialIcon from "src/components/SocialIcon";
import { text4, social_button_wrapper } from "./SocialButton.module.css";

function SocialButton({ prop, prop1, content = "Sign in with Google" }) {
  return (
    <div
      style={{
        alignSelf: (function () {
          switch (prop) {
            case "variant1":
              return "null";
            case "variant2":
              return "stretch";
          }
        })(),
        width: (function () {
          switch (prop1) {
            case "variant1":
              return "fit-content";
            case "variant2":
              return null;
          }
        })(),
      }}
      className={social_button_wrapper}
    >
      <SocialIcon />
      <span className={`${text4} text_md_medium`}>{content}</span>
    </div>
  );
}

export default SocialButton;
