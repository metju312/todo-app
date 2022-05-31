import React from "react";
import {
  label,
  text,
  content1,
  input,
  input_with_label,
  hint_text,
  _input_field_base_wrapper,
} from "./InputFieldBase.module.css";
import Mail from "src/components/Mail";
import HelpIcon from "src/components/HelpIcon";

function InputFieldBase({
  prop,
  prop1,
  content = "Email",
  title = "olivia@untitledui.com",
}) {
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
      className={_input_field_base_wrapper}
    >
      <div className={input_with_label}>
        <span className={`${label} text_sm_medium`}>{content}</span>
        <div className={input}>
          <div className={content1}>
            {(function () {
              switch (prop1) {
                case "variant1":
                  return <Mail />;
                case "variant2":
                  return null;
              }
            })()}
            <span className={`${text} text_md_normal`}>{title}</span>
          </div>
          {(function () {
            switch (prop1) {
              case "variant1":
                return <HelpIcon />;
              case "variant2":
                return null;
            }
          })()}
        </div>
      </div>
      {(function () {
        switch (prop1) {
          case "variant1":
            return (
              <span className={`${hint_text} text_sm_normal`}>
                This is a hint text to help user.
              </span>
            );
          case "variant2":
            return null;
        }
      })()}
    </div>
  );
}

export default InputFieldBase;
