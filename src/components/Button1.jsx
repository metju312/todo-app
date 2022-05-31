import React from "react";
import ButtonBase from "src/components/ButtonBase1";
import { button_wrapper1 } from "./Button1.module.css";

function Button({ prop, prop1, prop2 }) {
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
      className={button_wrapper1}
    >
      <ButtonBase
        color="variant1"
        prop="variant1"
        prop1="variant1"
        prop2={(function () {
          switch (prop1) {
            case "variant1":
              return "variant2";
            case "variant2":
              return "variant1";
          }
        })()}
        prop3={(function () {
          switch (prop1) {
            case "variant1":
              return "variant1";
            case "variant2":
              return "variant2";
          }
        })()}
        content={(function () {
          switch (prop2) {
            case "variant1":
              return "Button CTA";
            case "variant2":
              return "Zarejestruj się";
            case "variant3":
              return "Zaloguj się";
          }
        })()}
      />
    </div>
  );
}

export default Button;
