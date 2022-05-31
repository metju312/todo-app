import React from "react";
import SocialButton from "src/components/SocialButton";
import { social_button_groups_wrapper } from "./SocialButtonGroups.module.css";

function SocialButtonGroups({ prop, prop1 }) {
  return (
    <div
      style={{
        alignSelf: (function () {
          switch (prop) {
            case `variant1`:
              return `null`;
            case `variant2`:
              return `stretch`;
          }
        })(),
        width: (function () {
          switch (prop1) {
            case `variant1`:
              return "360px";
            case `variant2`:
              return null;
          }
        })(),
      }}
      className={social_button_groups_wrapper}
    >
      <SocialButton
        prop={`variant2`}
        prop1={`variant2`}
        content={(function () {
          switch (prop1) {
            case `variant1`:
              return `Sign in with Google`;
            case `variant2`:
              return `Zaloguj się z Google`;
          }
        })()}
      />
      {(function () {
        switch (prop1) {
          case `variant1`:
            return <SocialButton />;
          case `variant2`:
            return null;
        }
      })()}
      {(function () {
        switch (prop1) {
          case `variant1`:
            return <SocialButton />;
          case `variant2`:
            return null;
        }
      })()}
    </div>
  );
}

export default SocialButtonGroups;
