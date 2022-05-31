import React from "react";
import ButtonBase from "src/components/ButtonBase1";
import { button_wrapper4 } from "./Button4.module.css";

function Button() {
  return (
    <div className={button_wrapper4}>
      <ButtonBase
        color="variant3"
        prop="variant1"
        prop1="variant1"
        prop2="variant2"
        prop3="variant1"
        content="Button CTA"
      />
    </div>
  );
}

export default Button;
