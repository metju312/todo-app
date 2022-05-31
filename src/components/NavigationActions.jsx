import React from "react";
import Button from "src/components/Button1";
import { _navigation_actions_wrapper } from "./NavigationActions.module.css";

function NavigationActions({ prop }) {
  return (
    <div className={_navigation_actions_wrapper}>
      <Button
        prop={(function () {
          switch (prop) {
            case `variant1`:
              return `variant1`;
            case `variant2`:
              return `variant2`;
          }
        })()}
      />
      <Button
        prop={`variant1`}
        prop1={`variant1`}
        prop2={(function () {
          switch (prop) {
            case `variant1`:
              return `variant1`;
            case `variant2`:
              return `variant2`;
          }
        })()}
      />
    </div>
  );
}

export default NavigationActions;
