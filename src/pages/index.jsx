import React from "react";
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Myyyy</title>
      </Head>
      <h1>Generated pages: </h1>
      <br />
      <a href="loginpage">LoginPage</a>
      <br />
      <a href="featured-icon">Featured icon</a>
      <br />
      <a href="loginview">LoginView</a>
      <br />
      <br />
      <p>you can find all pages in code in "src/pages"</p>
      <br />
      <p>
        You can find components in "src/components" and preview them with
        storybook.
      </p>
    </div>
  );
}
