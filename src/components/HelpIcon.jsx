import React from "react";
import HelpCircle from "src/components/HelpCircle";
import { help_icon_wrapper } from "./HelpIcon.module.css";

function HelpIcon() {
  return (
    <div className={help_icon_wrapper}>
      <HelpCircle prop="variant2" />
    </div>
  );
}

export default HelpIcon;
