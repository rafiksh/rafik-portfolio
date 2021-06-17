import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { EducationCard } from "../styled/card/card";

const { Title } = Typography;

const EducationComponent = () => {
  const { t } = useTranslation(["common"]);

  const education = [
    {
      key: 1,
      major: t("MASTERS_MAJOR"),
      university: t("MASTERS_UNIVERSITY"),
      location: t("MASTERS_LOCATION"),
      date: t("MASTERS_DATE"),
    },
    {
      key: 2,
      major: t("BACHELOR_MAJOR"),
      university: t("BACHELOR_UNIVERSITY"),
      location: t("BACHELOR_LOCATION"),
      date: t("BACHELOR_DATE"),
    },
  ];
  return (
    <Row id="education" justify="center" align="middle">
      <Col xs={22} md={18} xl={14}>
        <Title>{t("EDUCATION")}</Title>
        <Row align="middle" justify="space-between">
          {education.map((ed) => (
            <Col xs={24} key={ed.key}>
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
