import React from "react";
import { Row, Divider, Col } from "antd";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

import { HeaderComponent } from "./components/Header";
import { GeneralInformationComponent } from "./components/GeneralInformation";
import { OverviewComponent } from "./components/Overview";
import { ExperienceComponent } from "./components/Experience";
import { ProjectsComponent } from "./components/Projects";
import { EducationComponent } from "./components/Education";
import { FooterComponent } from "./components/Footer";

import "./App.css";
import "antd/dist/antd.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation(["common"]);
  return (
    <ConfigProvider direction={i18n?.dir()}>
      <BrowserRouter>
        <Row className="App" align="middle" justify="center">
          <HeaderComponent />
          <OverviewComponent />

          <GeneralInformationComponent />
          <Col xs={22} md={18} xl={14}>
            <Divider />
          </Col>
          <ExperienceComponent />
          <Col xs={22} md={18} xl={14}>
            <Divider />
          </Col>
          <ProjectsComponent />
          <Col xs={22} md={18} xl={14}>
            <Divider />
          </Col>
          <EducationComponent />
          <FooterComponent />
        </Row>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
