import React from "react";
import ButtonBase from "src/components/ButtonBase";
import { button_wrapper } from "./Button.module.css";

function Button({ prop }) {
  return (
    <div className={button_wrapper}>
      <ButtonBase
        color="variant2"
        content={(function () {
          switch (prop) {
            case "variant1":
              return "Button CTA";
            case "variant2":
              return "Zapomniałem hasła";
            case "variant3":
              return "Zarejestruj się";
          }
        })()}
      />
    </div>
  );
}

export default Button;
