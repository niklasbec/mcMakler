import React from "react";
import "react-app-polyfill/stable";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { ConfigProvider } from "antd";
import de_DE from "antd/es/locale/de_DE";
import en_GB from "antd/es/locale/en_GB";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import getTranslation from "./utils/getTranslation";
import { Locale } from "antd/lib/locale-provider";

const t = getTranslation;

declare global {
  interface langMap {
    [key: string]: Locale;
  }
}

const myLanguages: langMap = {
  de: de_DE,
  en: en_GB,
};

const configs = {
  language: "de",
};

const languageToUse = configs && configs.language ? configs.language : "de";

i18n.changeLanguage(languageToUse, (err, te) => {
  if (err) return console.log("something went wrong loading", err);
  te("key");
  return true;
});

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <ConfigProvider locale={myLanguages[languageToUse]}>
            <App />
          </ConfigProvider>
        </Router>
      </I18nextProvider>
    </PersistGate>
  </Provider>, // Contextprovider does not work at the moment as they have an error there
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
