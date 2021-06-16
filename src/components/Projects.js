import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography } from "antd";

import { ProjectCard } from "../styled/card/card";

import ViaCardCover from "../assets/images/via/viacard-cover-en.png";
import ViaCardAr from "../assets/images/via/viacard-ar.png";
import ViaCardEn from "../assets/images/via/viacard-en.png";
import ViaCardForm from "../assets/images/via/viacard-form-en.png";
import PaymentGatewayCover from "../assets/images/paymentGateway/pg-web.png";
import PaymentGatewayMobile from "../assets/images/paymentGateway/pg-mobile.png";
import MerchantPortalCover from "../assets/images/merchantPortal/mp-overview.png";
import MerchantPortalLogin from "../assets/images/merchantPortal/mp-login.png";
import MerchantPortalGeneral from "../assets/images/merchantPortal/mp-general.png";
import ZakyLogo from "../assets/images/zaky/zaky-logo.png";
import ZakyLanding from "../assets/images/zaky/zaky-landing.png";
import ZakyActivity from "../assets/images/zaky/zaky-activity.png";
import ZakySend from "../assets/images/zaky/zaky-send.png";
import { ReactComponent as ViaCardLogo } from "../assets/images/via/via-logo.svg";
import { ReactComponent as AreebaLogo } from "../assets/images/paymentGateway/areeba-logo.svg";

const { Title } = Typography;

const ProjectsComponent = () => {
  const { t } = useTranslation(["common"]);
  const projects = [
    {
      title: t("FIRST_PROJECT_TITLE"),
      description: t("FIRST_PROJECT_SUMMARY"),
      Logo: <AreebaLogo style={{ width: 100 }} />,
      images: [MerchantPortalCover, MerchantPortalGeneral, MerchantPortalLogin],
    },
    {
      title: t("SECOND_PROJECT_TITLE"),
      description: t("SECOND_PROJECT_SUMMARY"),
      Logo: <img alt="alt" src={ZakyLogo} style={{ height: 50 }} />,
      images: [ZakyLanding, ZakyActivity, ZakySend],
    },
    {
      title: t("THIRD_PROJECT_TITLE"),
      description: t("THIRD_PROJECT_SUMMARY"),
      Logo: <ViaCardLogo style={{ width: 100 }} />,
      images: [ViaCardCover, ViaCardEn, ViaCardAr, ViaCardForm],
    },
    {
      title: t("FOURTH_PROJECT_TITLE"),
      description: t("FOURTH_PROJECT_SUMMARY"),
      Logo: <AreebaLogo style={{ width: 100 }} />,
      images: [PaymentGatewayCover, PaymentGatewayMobile],
    },
  ];

  return (
    <Row id="projects" justify="center" align="middle">
      <Col xs={22} md={18} xl={14}>
        <Title>{t("PROJECTS")}</Title>
        <Row align="bottom" justify="space-between">
          {projects.map((project) => (
            <Col xs={24} md={12} key={project.title}>
              <Row align="bottom" justify="center" style={{ marginBottom: 50 }}>
                <ProjectCard {...project} />
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export { ProjectsComponent };
