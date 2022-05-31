import React from "react";
import ButtonBase from "src/components/ButtonBase1";
import { button_wrapper2 } from "./Button2.module.css";

function Button({ prop }) {
  return (
    <div className={button_wrapper2}>
      <ButtonBase
        color="variant2"
        prop="variant2"
        prop1="variant2"
        prop2="variant2"
        prop3="variant1"
        content={(function () {
          switch (prop) {
            case "variant1":
              return "Button CTA";
            case "variant2":
              return "Lista zadań";
            case "variant3":
              return "Płatności";
          }
        })()}
      />
    </div>
  );
}

export default Button;
