import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Divider, Typography } from "antd";

import { InformationCard } from "../styled/card/card";

const { Title } = Typography;

const ExperienceComponent = () => {
  const { t } = useTranslation(["common"]);

  const experience = [
    {
      position: t("FIRST_JOB_POSITION"),
      title: t("FIRST_JOB_TITLE"),
      location: t("FIRST_JOB_LOCATION"),
      date: t("FIRST_JOB_DATE"),
      content: [
        t("FIRST_JOB_BULLET_1"),
        t("FIRST_JOB_BULLET_2"),
        t("FIRST_JOB_BULLET_3"),
        t("FIRST_JOB_BULLET_4"),
      ],
    },
    {
      position: t("SECOND_JOB_POSITION"),
      title: t("SECOND_JOB_TITLE"),
      location: t("SECOND_JOB_LOCATION"),
      date: t("SECOND_JOB_DATE"),
      content: [
        t("SECOND_JOB_BULLET_1"),
        t("SECOND_JOB_BULLET_2"),
        t("SECOND_JOB_BULLET_3"),
      ],
    },
    {
      position: t("THIRD_JOB_POSITION"),
      title: t("THIRD_JOB_TITLE"),
      location: t("THIRD_JOB_LOCATION"),
      date: t("THIRD_JOB_DATE"),
      content: [t("THIRD_JOB_BULLET_1"), t("THIRD_JOB_BULLET_2")],
    },
    {
      position: t("FOURTH_JOB_POSITION"),
      title: t("FOURTH_JOB_TITLE"),
      location: t("FOURTH_JOB_LOCATION"),
      date: t("FOURTH_JOB_DATE"),
      content: [
        t("FOURTH_JOB_BULLET_1"),
        t("FOURTH_JOB_BULLET_2"),
        t("FOURTH_JOB_BULLET_3"),
      ],
    },
  ];

  return (
    <Row id="experience" justify="center" align="middle">
      <Col xs={22} md={18} xl={14}>
        <Title>{t("EXPERIENCE")}</Title>
        {experience.map((exp) => (
          <Col key={exp.position}>
            <InformationCard {...exp} />
            <Divider style={{ borderColor: "white" }} />
          </Col>
        ))}
      </Col>
    </Row>
  );
};

export { ExperienceComponent };
