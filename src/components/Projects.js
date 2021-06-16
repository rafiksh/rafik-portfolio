import React from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
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

const projects = [
  {
    title: "Areeba Merchant Portal",
    Logo: <AreebaLogo style={{ width: 100 }} />,
    onClick: () => {},
    description:
      "Areeba merchant portal offers Custom Branded Invoice Design Recurring Invoicing & Auto-Bill Clients Custom Late-Payment Auto-Reminder Emails etc.",
    images: [MerchantPortalCover, MerchantPortalGeneral, MerchantPortalLogin],
  },
  {
    title: "Zaky",
    Logo: <img alt="alt" src={ZakyLogo} style={{ height: 50 }} />,
    onClick: () => {},
    description:
      "Zaky is a digital mobile payment platform that enables consumers, merchants and services providers to make and receive their payments in a seamless and secure way.",
    images: [ZakyLanding, ZakyActivity, ZakySend],
  },
  {
    title: "ViaCard",
    Logo: <ViaCardLogo style={{ width: 100 }} />,
    onClick: () => {},
    description:
      "ViaCard is the perfect answer to the needs of Lebanese people travelling abroad, shopping online or even those whose children are studying overseas.",
    images: [ViaCardCover, ViaCardEn, ViaCardAr, ViaCardForm],
  },
  {
    title: "Areeba Payment Gateway",
    Logo: <AreebaLogo style={{ width: 100 }} />,
    onClick: () => {},
    description:
      "Areeba payment gateway is a technology used by merchants to accept debit or credit card purchases from customers.",
    images: [PaymentGatewayCover, PaymentGatewayMobile],
  },
];

const ProjectsComponent = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ width: "100%" }}
      id="projects"
    >
      <Col xs={22} md={18} xl={14}>
        <Title>Projects</Title>
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
