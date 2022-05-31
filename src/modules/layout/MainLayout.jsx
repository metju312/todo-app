import React from 'react';
import TopBar from "../common/components/TopBar/TopBar";
import {ThemeProvider} from "styled-components";

function MainLayout(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <TopBar />
      {props.children}
    </ThemeProvider>
  );
}

export default MainLayout;