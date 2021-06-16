import React from "react";
import { Row, Col } from "antd";
import Particles from "react-particles-js";
import Typed from "react-typed";

import "../App.css";

import { particlesConfig } from "../config/particles";

const OverviewComponent = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100vh", width: "100%" }}
        id="overview"
      >
        <Particles params={particlesConfig} className="overview-background" />
        <Row justify="center" align="middle" className="overview">
          <Col>
            <h1 className="intro-title">
              Hello, I am Rafik Shmoury <br />
              <Typed
                strings={["Software Engineer", "Full Stack Developer"]}
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
