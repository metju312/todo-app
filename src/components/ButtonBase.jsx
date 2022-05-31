import React from "react";
import constants from "src/constants";
import { text2, _button_base_wrapper } from "./ButtonBase.module.css";

function ButtonBase({ color, content = "Button CTA" }) {
  return (
    <div
      style={{
        background: (function () {
          switch (color) {
            case "variant1":
              return "rgba(109, 186, 86, 1)";
            case "variant2":
              return "undefined";
          }
        })(),
        filter: (function () {
          switch (color) {
            case "variant1":
              return "drop-shadow(inset 0px 1px 2px rgba(16, 24, 40, 0.05))";
            case "variant2":
              return "undefined";
          }
        })(),
        border: (function () {
          switch (color) {
            case "variant1":
              return "1px solid rgb(109, 186, 86)";
            case "variant2":
              return null;
          }
        })(),
        borderRadius: (function () {
          switch (color) {
            case "variant1":
              return "8px";
            case "variant2":
              return null;
          }
        })(),
        overflow: (function () {
          switch (color) {
            case "variant1":
              return "hidden";
            case "variant2":
              return "undefined";
          }
        })(),
        padding: (function () {
          switch (color) {
            case "variant1":
              return "10px 16px 10px 16px";
            case "variant2":
              return null;
          }
        })(),
      }}
      className={_button_base_wrapper}
    >
      <span
        style={{
          color: (function () {
            switch (color) {
              case "variant1":
                return constants.colors.white;
              case "variant2":
                return constants.colors.primary_700;
            }
          })(),
        }}
        className={`${text2} text_sm_medium`}
      >
        {content}
      </span>
    </div>
  );
}

export default ButtonBase;
