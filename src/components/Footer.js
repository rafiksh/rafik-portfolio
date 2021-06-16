import React from "react";
import { Row, Col } from "antd";
import SocialButtonsContainer from "react-social-media-buttons";

const FooterComponent = () => {
  return (
    <Col xs={24}>
      <Row
        align="middle"
        justify="center"
        style={{
          backgroundColor: "black",
          paddingTop: 10,
          height: 100,
          color: "white",
        }}
      >
        <Col>Copyright © 2021 Rafik Al Shmoury</Col>
        <Col xs={24}>
          <Row align="middle" justify="center">
            <SocialButtonsContainer
              links={[
                "https://twitter.com/rafikshmoury",
                "https://www.instagram.com/_rafik",
                "https://www.linkedin.com/in/rafikalshmoury",
              ]}
              buttonStyle={{
                margin: "0px 10px",
                backgroundColor: "transparent",
              }}
              iconStyle={{ color: "#ffffff" }}
              openNewTab={true}
            />
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export { FooterComponent };
