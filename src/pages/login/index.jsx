import React from "react";
import Head from "next/head";
import Logomark from "src/components/Logomark";
import {
  text8,
  supporting_text,
  text_and_supporting_text,
  header,
  form,
  row,
  actions,
  content2,
  text9,
  row1,
  content3,
  loginpage_wrapper,
} from "./loginpage.module.css";
import InputField from "src/components/InputField";
import Checkbox from "src/components/Checkbox1";
import Button from "src/components/Button";
import SocialButtonGroups from "src/components/SocialButtonGroups";

function LoginPage() {
  return (
    <>
      <Head>
        <title>{`LoginPage`}</title>
      </Head>
      <div className={loginpage_wrapper}>
        <div className={content3}>
          <div className={header}>
            <Logomark prop={`variant2`} />
            <div className={text_and_supporting_text}>
              <span
                className={text8 + ` display_sm_semibold`}
              >{`Zaloguj się`}</span>
              <span
                className={supporting_text + ` text_md_normal`}
              >{`Witaj ponownie! Wpisz proszę dane logowania.`}</span>
            </div>
          </div>
          <div className={content2}>
            <div className={form}>
              <InputField
                prop={`variant2`}
                prop1={`variant2`}
                title={`variant2`}
                prop2={`variant1`}
              />
              <InputField
                prop={`variant2`}
                prop1={`variant2`}
                title={`variant3`}
                prop2={`variant2`}
              />
            </div>
            <div className={row}>
              <Checkbox content={`Zapamiętaj przez 30 dni`} />
              <Button prop={`variant2`} />
            </div>
            <div className={actions}>
              <Button prop={`variant2`} prop1={`variant2`} prop2={`variant3`} />
              <SocialButtonGroups prop={`variant2`} prop1={`variant2`} />
            </div>
          </div>
          <div className={row1}>
            <span
              className={text9 + ` text_sm_normal`}
            >{`Nie masz konta?`}</span>
            <Button prop={`variant3`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
