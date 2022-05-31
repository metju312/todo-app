import React from "react";
import {
  styled,
  styled1,
  circle,
  styled2,
  styled3,
  circle1,
  styled4,
  styled5,
  circle2,
  styled6,
  styled7,
  line,
  styled8,
  styled9,
  line1,
  styled10,
  styled11,
  line2,
  styled12,
  styled13,
  line3,
  styled14,
  styled15,
  line4,
  styled16,
  styled17,
  line5,
  styled18,
  styled19,
  line6,
  styled20,
  styled21,
  line7,
  styled22,
  styled23,
  line8,
  styled24,
  styled25,
  line9,
  grid,
  dot,
  blur,
  content,
  logomark_wrapper,
} from "./Logomark.module.css";

function Logomark({ prop }) {
  return (
    <div
      style={{
        filter: (function () {
          switch (prop) {
            case "variant1":
              return "drop-shadow(inset 0px 1px 2px rgba(16, 24, 40, 0.06)) drop-shadow(inset 0px 1px 3px rgba(16, 24, 40, 0.1))";
            case "variant2":
              return "drop-shadow(inset 0px 1.5px 3px rgba(16, 24, 40, 0.06)) drop-shadow(inset 0px 1.5px 4.5px rgba(16, 24, 40, 0.1))";
          }
        })(),
      }}
      className={logomark_wrapper}
    >
      <div
        style={{
          border: (function () {
            switch (prop) {
              case "variant1":
                return "0.30000001192092896px solid rgb(208, 213, 221)";
              case "variant2":
                return "0.45000001788139343px solid rgb(208, 213, 221)";
            }
          })(),
          borderRadius: (function () {
            switch (prop) {
              case "variant1":
                return "8px";
              case "variant2":
                return "12px";
            }
          })(),
          width: (function () {
            switch (prop) {
              case "variant1":
                return "32px";
              case "variant2":
                return "48px";
            }
          })(),
          height: (function () {
            switch (prop) {
              case "variant1":
                return "32px";
              case "variant2":
                return "48px";
            }
          })(),
        }}
        className={content}
      >
        {(function () {
          switch (prop) {
            case "variant1":
              return (
                <div className={grid}>
                  <div className={circle}>
                    <svg className={styled1}>
                      <path
                        d="M 14.038834571838379 0.0776699110865593 C 6.328296184539795 0.0776699110865593 0.0776699110865593 6.328296184539795 0.0776699110865593 14.038834571838379 C 0.0776699110865593 21.74937343597412 6.328296184539795 28 14.038834571838379 28 C 21.74937343597412 28 28 21.74937343597412 28 14.038834571838379 C 28 6.328296184539795 21.74937343597412 0.0776699110865593 14.038834571838379 0.0776699110865593 Z M 0 14.038834571838379 C 0 6.285399913787842 6.285399913787842 0 14.038834571838379 0 C 21.792269706726074 0 28.07767105102539 6.285399913787842 28.07767105102539 14.038834571838379 C 28.07767105102539 21.792269706726074 21.792269706726074 28.07767105102539 14.038834571838379 28.07767105102539 C 6.285399913787842 28.07767105102539 0 21.792269706726074 0 14.038834571838379 Z"
                        className={styled}
                      />
                    </svg>
                  </div>
                  <div className={circle1}>
                    <svg className={styled3}>
                      <path
                        d="M 4 0.0776699110865593 C 1.833756923675537 0.0776699110865593 0.0776699110865593 1.833756923675537 0.0776699110865593 4 C 0.0776699110865593 6.166243314743042 1.833756923675537 7.922330379486084 4 7.922330379486084 C 6.166243314743042 7.922330379486084 7.922330379486084 6.166243314743042 7.922330379486084 4 C 7.922330379486084 1.833756923675537 6.166243314743042 0.0776699110865593 4 0.0776699110865593 Z M 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 C 6.209139108657837 0 8 1.790860891342163 8 4 C 8 6.209139108657837 6.209139108657837 8 4 8 C 1.790860891342163 8 0 6.209139108657837 0 4 Z"
                        className={styled2}
                      />
                    </svg>
                  </div>
                  <div className={circle2}>
                    <svg className={styled5}>
                      <path
                        d="M 2.757281541824341 0.0776699110865593 C 1.27737295627594 0.0776699110865593 0.0776699110865593 1.27737295627594 0.0776699110865593 2.757281541824341 C 0.0776699110865593 4.237190246582031 1.27737295627594 5.436892986297607 2.757281541824341 5.436892986297607 C 4.237190246582031 5.436892986297607 5.436892986297607 4.237190246582031 5.436892986297607 2.757281541824341 C 5.436892986297607 1.27737295627594 4.237190246582031 0.0776699110865593 2.757281541824341 0.0776699110865593 Z M 0 2.757281541824341 C 0 1.2344770431518555 1.2344770431518555 0 2.757281541824341 0 C 4.280086040496826 0 5.514563083648682 1.2344770431518555 5.514563083648682 2.757281541824341 C 5.514563083648682 4.280086040496826 4.280086040496826 5.514563083648682 2.757281541824341 5.514563083648682 C 1.2344770431518555 5.514563083648682 0 4.280086040496826 0 2.757281541824341 Z"
                        className={styled4}
                      />
                    </svg>
                  </div>
                  <div className={line}>
                    <svg className={styled7}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled6}
                      />
                    </svg>
                  </div>
                  <div className={line1}>
                    <svg className={styled9}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled8}
                      />
                    </svg>
                  </div>
                  <div className={line2}>
                    <svg className={styled11}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled10}
                      />
                    </svg>
                  </div>
                  <div className={line3}>
                    <svg className={styled13}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled12}
                      />
                    </svg>
                  </div>
                  <div className={line4}>
                    <svg className={styled15}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled14}
                      />
                    </svg>
                  </div>
                  <div className={line5}>
                    <svg className={styled17}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled16}
                      />
                    </svg>
                  </div>
                  <div className={line6}>
                    <svg className={styled19}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled18}
                      />
                    </svg>
                  </div>
                  <div className={line7}>
                    <svg className={styled21}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled20}
                      />
                    </svg>
                  </div>
                  <div className={line8}>
                    <svg className={styled23}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled22}
                      />
                    </svg>
                  </div>
                  <div className={line9}>
                    <svg className={styled25}>
                      <path
                        d="M 0 0 L 0.0776699036359787 0 L 0.0776699036359787 32 L 0 32 L 0 0 Z"
                        className={styled24}
                      />
                    </svg>
                  </div>
                </div>
              );
            case "variant2":
              return null;
          }
        })()}
        <div
          style={{
            top: (function () {
              switch (prop) {
                case "variant1":
                  return "8px";
                case "variant2":
                  return "12px";
              }
            })(),
            left: (function () {
              switch (prop) {
                case "variant1":
                  return "8px";
                case "variant2":
                  return "12px";
              }
            })(),
            background: (function () {
              switch (prop) {
                case "variant1":
                  return "rgba(109, 186, 86, 1)";
                case "variant2":
                  return "rgba(109, 186, 86, 1)";
              }
            })(),
            filter: (function () {
              switch (prop) {
                case "variant1":
                  return "drop-shadow(inset 0px 1px 2px rgba(16, 24, 40, 0.06)) drop-shadow(inset 0px 1px 3px rgba(16, 24, 40, 0.1))";
                case "variant2":
                  return "drop-shadow(inset 0px 1.5px 3px rgba(16, 24, 40, 0.06)) drop-shadow(inset 0px 1.5px 4.5px rgba(16, 24, 40, 0.1))";
              }
            })(),
            width: (function () {
              switch (prop) {
                case "variant1":
                  return "16px";
                case "variant2":
                  return "24px";
              }
            })(),
            height: (function () {
              switch (prop) {
                case "variant1":
                  return "16px";
                case "variant2":
                  return "24px";
              }
            })(),
          }}
          className={dot}
        />
        <div
          style={{
            top: (function () {
              switch (prop) {
                case "variant1":
                  return "16px";
                case "variant2":
                  return "24px";
              }
            })(),
            borderRadius: (function () {
              switch (prop) {
                case "variant1":
                  return "0px 0px 8px 8px";
                case "variant2":
                  return "0px 0px 12px 12px";
              }
            })(),
            width: (function () {
              switch (prop) {
                case "variant1":
                  return "32px";
                case "variant2":
                  return "48px";
              }
            })(),
            height: (function () {
              switch (prop) {
                case "variant1":
                  return "16px";
                case "variant2":
                  return "24px";
              }
            })(),
          }}
          className={blur}
        />
      </div>
    </div>
  );
}

export default Logomark;
