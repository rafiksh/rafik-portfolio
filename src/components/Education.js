import React from "react";
import { Row, Col, Divider } from "antd";
import { Typography } from "antd";

import { EducationCard } from "../styled/card/card";

const { Title } = Typography;

const education = [
  {
    postion: "Masters of Science in Computer Engineering",
    title: "Bahcesehir University",
    location: "Istanbul, Turkey",
    date: "2018 - 2020",
  },
  {
    postion: "Bachelor of Science in Computer and Communication Engineering",
    title: "Lebanese International University",
    location: "Istanbul, Turkey",
    date: "Oct 2019 - April 2020",
  },
];

const EducationComponent = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ width: "100%" }}
      id="education"
    >
      <Col xs={22} md={18} xl={14}>
        <Title>Education</Title>
        <Row align="middle" justify="space-between">
          {education.map((ed) => (
            <Col xs={24} xl={10} key={ed.title}>
              <EducationCard {...ed} />
              <Divider style={{ borderColor: "white" }} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export { EducationComponent };
