import React from "react";
import Checkbox from "src/components/Checkbox";
import { text1, checkbox_wrapper1 } from "./Checkbox1.module.css";

function Checkbox1({ content = "Remember me" }) {
  return (
    <div className={checkbox_wrapper1}>
      <Checkbox />
      <span className={`${text1} text_sm_medium`}>{content}</span>
    </div>
  );
}

export default Checkbox1;
