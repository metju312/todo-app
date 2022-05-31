import React from "react";
import { styled1060, styled1061, icon2, plus_wrapper } from "./Plus.module.css";

function Plus({ prop }) {
  return (
    <div
      style={{
        width: (function () {
          switch (prop) {
            case "variant1":
              return "24px";
            case "variant2":
              return "28px";
          }
        })(),
        height: (function () {
          switch (prop) {
            case "variant1":
              return "24px";
            case "variant2":
              return "28px";
          }
        })(),
      }}
      className={plus_wrapper}
    >
      <div
        style={{
          border: (function () {
            switch (prop) {
              case "variant1":
                return "2px solid rgb(16, 24, 40)";
              case "variant2":
                return "2.3333332538604736px solid rgb(109, 186, 86)";
            }
          })(),
          width: (function () {
            switch (prop) {
              case "variant1":
                return "14px";
              case "variant2":
                return "16.333px";
            }
          })(),
          height: (function () {
            switch (prop) {
              case "variant1":
                return "14px";
              case "variant2":
                return "16.333px";
            }
          })(),
        }}
        className={icon2}
      >
        <svg
          style={{
            width: (function () {
              switch (prop) {
                case "variant1":
                  return "14px";
                case "variant2":
                  return "16.333px";
              }
            })(),
            height: (function () {
              switch (prop) {
                case "variant1":
                  return "14px";
                case "variant2":
                  return "16.333px";
              }
            })(),
          }}
          className={styled1061}
        >
          <path
            d="M 8.166666030883789 0 L 8.166666030883789 16.333332061767578 M 0 8.166666030883789 L 16.333332061767578 8.166666030883789"
            className={styled1060}
          />
        </svg>
      </div>
    </div>
  );
}

export default Plus;
