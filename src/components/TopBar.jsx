import React from "react";
import {
  dot1,
  blur1,
  content4,
  logomark1,
  todo_app,
  logotype,
  logo_wrap,
  logo,
  navigation,
  content5,
  container,
  topbar_wrapper,
} from "./TopBar.module.css";
import Button from "src/components/Button2";
import NavigationActions from "src/components/NavigationActions";

function TopBar() {
  return (
    <div className={topbar_wrapper}>
      <div className={container}>
        <div className={content5}>
          <div className={logo}>
            <div className={logo_wrap}>
              <div className={logomark1}>
                <div className={content4}>
                  <div className={dot1} />
                  <div className={blur1} />
                </div>
              </div>
              <div className={logotype}>
                <span className={`${todo_app} text_md_medium`}>TODO App</span>
              </div>
            </div>
          </div>
          <div className={navigation}>
            <Button prop="variant2" />
            <Button prop="variant3" />
          </div>
        </div>
        <NavigationActions prop="variant2" />
      </div>
    </div>
  );
}

export default TopBar;
