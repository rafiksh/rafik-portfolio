import React, { useState, useEffect } from "react";
import { Row, Col, Drawer, Menu, Button } from "antd";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { MenuOutlined } from "@ant-design/icons";

import { StyledMenu } from "../styled/Menu/menu";

import { ReactComponent as RLogo } from "../assets/images/r-logo.svg";

const HeaderComponent = () => {
  const { t, i18n } = useTranslation(["common"]);

  const [width, setWidth] = useState(window.innerWidth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -84;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderMenu = (mode = "vertical") => (
    <StyledMenu mode={mode}>
      <Menu.Item key="about">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#about">
          {t("ABOUT")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="experience">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#experience">
          {t("EXPERIENCE")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="projects">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#projects">
          {t("PROJECTS")}
        </HashLink>
      </Menu.Item>
      <Menu.Item key="education">
        <HashLink scroll={(el) => scrollWithOffset(el)} smooth to="#education">
          {t("EDUCATION")}
        </HashLink>
      </Menu.Item>
      <Menu.SubMenu key="lang" title={t("LANG")}>
        {i18n.languages.map((language) => (
          <Menu.Item
            key={language}
            onClick={() => i18n.changeLanguage(language)}
          >
            {language}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </StyledMenu>
  );
  return (
    <>
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: 10,
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <Col xs={24}>
          <Row align="middle" justify="center">
            <Col xs={22} lg={14} xl={12}>
              <Row
                align="middle"
                justify="space-between"
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 15,
                  border: "1px solid rgba(0,0,0,0.3)",
                }}
              >
                <Col xs={1}>
                  <HashLink
                    scroll={(el) => scrollWithOffset(el)}
                    smooth
                    to="#overview"
                  >
                    <RLogo style={{ width: 50 }} />
                  </HashLink>
                </Col>
                <Col xs={0} md={22}>
                  <Row justify="end">{renderMenu("horizontal")}</Row>
                </Col>
                <Col xs={1} md={0}>
                  <Row justify="end">
                    <Button onClick={() => setIsDrawerOpen(true)}>
                      <MenuOutlined />
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
      <Drawer
        placement="right"
        closable={true}
        onClose={() => setIsDrawerOpen(false)}
        visible={isDrawerOpen && width <= 1200}
      >
        {renderMenu()}
      </Drawer>
    </>
  );
};

export { HeaderComponent };
