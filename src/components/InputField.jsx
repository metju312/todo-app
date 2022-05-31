import React from "react";
import InputFieldBase from "src/components/InputFieldBase";
import { input_field_wrapper } from "./InputField.module.css";

function InputField({ prop, prop1, title, prop2 }) {
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
              return "320px";
            case "variant2":
              return null;
          }
        })(),
      }}
      className={input_field_wrapper}
    >
      <InputFieldBase
        prop="variant2"
        prop1="variant2"
        content={(function () {
          switch (prop2) {
            case "variant1":
              return "Email";
            case "variant2":
              return "Hasło";
          }
        })()}
        title={(function () {
          switch (title) {
            case "variant1":
              return "olivia@untitledui.com";
            case "variant2":
              return "Podaj swój adres email";
            case "variant3":
              return "••••••••";
          }
        })()}
      />
    </div>
  );
}

export default InputField;
