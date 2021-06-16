import React from "react";
import SocialButtonsContainer from "react-social-media-buttons";
import { useTranslation } from "react-i18next";
import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutComponent = () => {
  const { t } = useTranslation(["common"]);

  return (
    <Row id="about" align="middle" justify="center" className="aboutme">
      <Col xs={22} md={18} xl={14}>
        <Typography>
          <Title>
            {t("ABOUT_TITLE")}
            <Row align="middle" justify="center">
              <SocialButtonsContainer
                links={[
                  "https://twitter.com/rafikshmoury",
                  "https://www.instagram.com/_rafik",
                  "https://www.linkedin.com/in/rafikalshmoury",
                ]}
                buttonStyle={{
                  margin: "0px 10px",
                  backgroundColor: "white",
                }}
                iconStyle={{ color: "black" }}
                openNewTab={true}
              />
            </Row>
          </Title>
          <Paragraph>{t("ABOUT_TEXT")}</Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export { AboutComponent };
