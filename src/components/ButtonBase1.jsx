import React from "react";
import constants from "src/constants";
import { text3, _button_base_wrapper1 } from "./ButtonBase1.module.css";

function ButtonBase({
  color,
  prop,
  prop1,
  prop2,
  prop3,
  content = "Button CTA",
}) {
  return (
    <div
      style={{
        width: (function () {
          switch (prop3) {
            case "variant1":
              return "fit-content";
            case "variant2":
              return null;
          }
        })(),
        background: (function () {
          switch (color) {
            case "variant1":
              return "rgba(109, 186, 86, 1)";
            case "variant2":
              return "undefined";
            case "variant3":
              return "rgba(255, 255, 255, 1)";
          }
        })(),
        filter: (function () {
          switch (prop) {
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
            case "variant3":
              return "1px solid rgb(208, 213, 221)";
          }
        })(),
        borderRadius: (function () {
          switch (prop1) {
            case "variant1":
              return "8px";
            case "variant2":
              return null;
          }
        })(),
        overflow: (function () {
          switch (prop1) {
            case "variant1":
              return "hidden";
            case "variant2":
              return "undefined";
          }
        })(),
        flexGrow: (function () {
          switch (prop2) {
            case "variant1":
              return 1;
            case "variant2":
              return null;
          }
        })(),
        padding: (function () {
          switch (prop1) {
            case "variant1":
              return "10px 18px 10px 18px";
            case "variant2":
              return null;
          }
        })(),
      }}
      className={_button_base_wrapper1}
    >
      <span
        style={{
          color: (function () {
            switch (color) {
              case "variant1":
                return constants.colors.white;
              case "variant2":
                return constants.colors.gray_500;
              case "variant3":
                return constants.colors.gray_700;
            }
          })(),
        }}
        className={`${text3} text_md_medium`}
      >
        {content}
      </span>
    </div>
  );
}

export default ButtonBase;
