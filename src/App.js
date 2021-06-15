import React from "react";
import { HeaderComponent } from "./components/Header";
import { GeneralInformationComponent } from "./components/GeneralInformation";
import { OverviewComponent } from "./components/Overview";
import { ExperienceComponent } from "./components/Experience";
import { FooterComponent } from "./components/Footer";

import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation(["common"]);
  return (
    <div className="App">
      <HeaderComponent />
      <OverviewComponent />
      <GeneralInformationComponent />
    </div>
  );
};

export default App;
