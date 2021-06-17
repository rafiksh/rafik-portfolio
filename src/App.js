import React, { useState, useEffect } from "react";
import { ConfigProvider, Row, Divider, Col } from "antd";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { HeaderComponent } from "./components/Header";
import { AboutComponent } from "./components/About";
import { OverviewComponent } from "./components/Overview";
import { ExperienceComponent } from "./components/Experience";
import { ProjectsComponent } from "./components/Projects";
import { EducationComponent } from "./components/Education";
import { FooterComponent } from "./components/Footer";
import { Loader } from "./styled/loader/loader";

import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  const { i18n } = useTranslation(["common"]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1.5 * 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ConfigProvider direction={i18n?.dir()}>
          <BrowserRouter>
            <Row className="App" align="middle" justify="center">
              <HeaderComponent />
              <OverviewComponent />
              <AboutComponent />
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
      )}
    </>
  );
};

export default App;
