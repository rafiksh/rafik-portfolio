import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography } from "antd";

import { ProjectCard } from "../styled/card/card";

import ViaCover from "../assets/images/via/via-cover.png";
import ViaAr from "../assets/images/via/via-ar.png";
import ViaEn from "../assets/images/via/via-en.png";
import ViaForm from "../assets/images/via/viaform-en.png";
import MPCover from "../assets/images/merchantPortal/mp-cover.png";
import MPOverview from "../assets/images/merchantPortal/mp-overview.png";
import MPGeneral from "../assets/images/merchantPortal/mp-general.png";
import MPLogin from "../assets/images/merchantPortal/mp-login.png";
import MPBusiness from "../assets/images/merchantPortal/mp-business.png";
import ZakyLogo from "../assets/images/zaky/zaky-logo.png";
import ZakyLanding from "../assets/images/zaky/zaky-landing.png";
import ZakyActivity from "../assets/images/zaky/zaky-activity.png";
import ZakyBiometric from "../assets/images/zaky/zaky-biometric.png";
import ZakySendMoney from "../assets/images/zaky/zaky-send-money.png";
import ZakyVouchers from "../assets/images/zaky/zaky-vouchers.png";
import ZakyWithdraw from "../assets/images/zaky/zaky-withdraw.png";
import ZakyCover from "../assets/images/zaky/zaky-cover.png";
import LarexCover from "../assets/images/larex/larex-cover.png";
import LarexHome from "../assets/images/larex/larex-home.png";
import LarexShop from "../assets/images/larex/larex-shop.png";
import LarexProduct from "../assets/images/larex/larex-product.png";
import LarexLogo from "../assets/images/larex/larex-logo.png";
import { ReactComponent as ViaCardLogo } from "../assets/images/via/via-logo.svg";
import { ReactComponent as AreebaLogo } from "../assets/images/paymentGateway/areeba-logo.svg";

const { Title } = Typography;

const ProjectsComponent = () => {
  const { t } = useTranslation(["common"]);

  const projects = [
    {
      key: 1,
      title: t("FIRST_PROJECT_TITLE"),
      description: t("FIRST_PROJECT_SUMMARY"),
      Logo: <AreebaLogo style={{ width: 100 }} />,
      images: [MPCover, MPOverview, MPGeneral, MPLogin, MPBusiness],
    },
    {
      key: 4,
      title: t("FOURTH_PROJECT_TITLE"),
      description: t("FOURTH_PROJECT_SUMMARY"),
      Logo: <img alt="alt" src={LarexLogo} style={{ height: 50 }} />,
      images: [LarexCover, LarexShop, LarexHome, LarexProduct],
    },
    {
      key: 2,
      title: t("SECOND_PROJECT_TITLE"),
      description: t("SECOND_PROJECT_SUMMARY"),
      Logo: <img alt="alt" src={ZakyLogo} style={{ height: 50 }} />,
      images: [
        ZakyCover,
        ZakyLanding,
        ZakyActivity,
        ZakyBiometric,
        ZakySendMoney,
        ZakyVouchers,
        ZakyWithdraw,
      ],
    },
    {
      key: 3,
      title: t("THIRD_PROJECT_TITLE"),
      description: t("THIRD_PROJECT_SUMMARY"),
      Logo: <ViaCardLogo style={{ width: 100 }} />,
      images: [ViaCover, ViaEn, ViaAr, ViaForm],
    },
  ];

  return (
    <Row id="projects" justify="center" align="middle">
      <Col xs={22} md={18} xl={14}>
        <Title>{t("PROJECTS")}</Title>
        <Row align="bottom" justify="space-between">
          {projects.map((project) => (
            <Col xs={24} md={12} key={project.key}>
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
