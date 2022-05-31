import React from "react";
import CheckboxBase from "src/components/CheckboxBase";
import { checkbox_wrapper } from "./Checkbox.module.css";

function Checkbox() {
  return (
    <div className={checkbox_wrapper}>
      <CheckboxBase />
    </div>
  );
}

export default Checkbox;
