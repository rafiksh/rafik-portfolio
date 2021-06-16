import React from "react";
import Particles from "react-particles-js";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

import { particlesConfig } from "../config/particles";

const OverviewComponent = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Row
        id="overview"
        justify="center"
        align="middle"
        style={{ height: "100vh" }}
      >
        <Particles params={particlesConfig} className="overview-background" />
        <Row justify="center" align="middle" className="overview">
          <Col>
            <h1 className="intro-title">
              {t("HELLO")} {t("FULL_NAME")} <br />
              <Typed
                strings={[t("ROLE_1"), t("ROLE_2")]}
                typeSpeed={80}
                backDelay={1100}
                backSpeed={30}
                loop
              />
            </h1>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export { OverviewComponent };
