import React from "react";
import { Row, Col, Divider } from "antd";
import { Typography } from "antd";
import { InformationCard } from "../styled/card/card";

const { Title } = Typography;

const experience = [
  {
    postion: "Full Stack Developer",
    title: "Areeba",
    location: "Beirut, Lebanon",
    date: "Oct 2020 - Present",
    content: [
      "Enforced Agile and Scrum development methodologies on interface projects to shorten development times.",
      "Collaborated with product management to design, build and test systems",
      "Developed intuitive graphical user interfaces using React.js and React Native",
      "Designed, developed and co-led the development of software applications according to established requirements.",
    ],
  },
  {
    postion: "Machine Learning Engineer",
    title: "PalmTech",
    location: "Istanbul, Turkey",
    date: "Oct 2019 - April 2020",
    content: [
      "Developed advanced graphic visualization concepts to map and simplify analysis of heavily-numeric data and reports.",
      "Implemented and evaluated artificial intelligence and machine learning algorithms and neural networks for diverse industries.",
      "Transformed raw data to conform to assumptions of machine learning algorithm.",
    ],
  },
  {
    postion: "Data Scientist",
    title: "Commencis",
    location: "Istanbul, Turkey",
    date: "Jan 2019 - June 2019",
    content: [
      "Created and cultivated test and learn culture among CRM and digitization groups, creating and executing structured experimentations based on data-driven and market ideas.",
      "Developed data-gathering and reporting structures from ground up and strategized methods capitalizing on system features",
    ],
  },
  {
    postion: "IT Support Specialist",
    title: "Basmeh & Zeitooneh",
    location: "Bar El Yis, Lebanon",
    date: "Jan 2018 - Sept 2018",
    content: [
      "Managed large data projects, including data entry and accuracy verification.",
      "Installed and configured software and hardware.",
      "Removed malware, ransomware and other threats from laptops and desktop systems.",
    ],
  },
];

const ExperienceComponent = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ flex: 1, width: "100%" }}
      id="experience"
    >
      <Col xs={22} md={18}>
        <Title>Experience</Title>
        {experience.map((exp) => (
          <>
            <InformationCard {...exp} />
            <Divider style={{ borderColor: "white" }} />
          </>
        ))}
      </Col>
    </Row>
  );
};

export { ExperienceComponent };
