import React from "react";
import {
  styled298,
  styled299,
  styled300,
  styled301,
  icon1,
  help_circle_wrapper,
} from "./HelpCircle.module.css";

function HelpCircle({ prop }) {
  return (
    <div
      style={{
        width: (function () {
          switch (prop) {
            case "variant1":
              return "24px";
            case "variant2":
              return "16px";
          }
        })(),
        height: (function () {
          switch (prop) {
            case "variant1":
              return "24px";
            case "variant2":
              return "16px";
          }
        })(),
      }}
      className={help_circle_wrapper}
    >
      <div
        style={{
          border: (function () {
            switch (prop) {
              case "variant1":
                return "2px solid rgb(16, 24, 40)";
              case "variant2":
                return "1.3333333730697632px solid rgb(152, 162, 179)";
            }
          })(),
          width: (function () {
            switch (prop) {
              case "variant1":
                return "20px";
              case "variant2":
                return "13.333px";
            }
          })(),
          height: (function () {
            switch (prop) {
              case "variant1":
                return "20px";
              case "variant2":
                return "13.333px";
            }
          })(),
        }}
        className={icon1}
      >
        <svg
          style={{
            width: (function () {
              switch (prop) {
                case "variant1":
                  return "20px";
                case "variant2":
                  return "13.333px";
              }
            })(),
            height: (function () {
              switch (prop) {
                case "variant1":
                  return "20px";
                case "variant2":
                  return "13.333px";
              }
            })(),
          }}
          className={styled301}
        >
          <path
            d="M 6.6666669845581055 13.333333969116211 C 10.348565912973026 13.333333969116211 13.333333969116211 10.348565912973026 13.333333969116211 6.6666669845581055 C 13.333333969116211 2.9847683740346387 10.348565912973026 0 6.6666669845581055 0 C 2.9847683740346387 0 0 2.9847683740346387 0 6.6666669845581055 C 0 10.348565912973026 2.9847683740346387 13.333333969116211 6.6666669845581055 13.333333969116211 Z"
            className={styled298}
          />
          <path
            d="M 4.726666993776962 4.666666889190673 C 4.883403017524216 4.2211120551957375 5.192768503480033 3.8454047884339304 5.599970130918972 3.60608881025737 C 6.007171758357912 3.3667728320808092 6.485930712346891 3.2792923524042217 6.951451315154281 3.3591415099688215 C 7.416971917961671 3.4389906675334214 7.839211440366635 3.6810164617387273 8.143385321778531 4.04235223336309 C 8.447559203190426 4.403688004987453 8.614037457346322 4.861015035041879 8.613333794911703 5.333333587646484 C 8.613333794911705 6.6666669845581055 6.613333699544273 7.333333683013915 6.613333699544273 7.333333683013915"
            className={styled299}
          />
          <path
            d="M 6.6666669845581055 10.000000476837158 L 6.673333804130561 10.000000476837158"
            className={styled300}
          />
        </svg>
      </div>
    </div>
  );
}

export default HelpCircle;
