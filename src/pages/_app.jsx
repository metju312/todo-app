import React from "react";
import Head from "next/head";
import parseHtml from "html-react-parser";
import { createGlobalStyle } from 'styled-components'
import "src/global.css";
import MainLayout from "../modules/layout/MainLayout";
import theme from "../configs/theme";

const headerTags = ``;
const productionHeaderTags = process.env.NODE_ENV === "development" ? "" : ``;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        ${parseHtml(headerTags)}${parseHtml(productionHeaderTags)}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <MainLayout theme={theme}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default MyApp;
