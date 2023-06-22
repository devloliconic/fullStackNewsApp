import { appWithTranslation } from "next-i18next";
import React from "react";
import { GlobalStyle } from "ui";

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
