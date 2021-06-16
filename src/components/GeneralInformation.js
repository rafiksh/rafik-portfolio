import React from "react";
import { Row, Col } from "antd";
import { Typography } from "antd";
import SocialButtonsContainer from "react-social-media-buttons";

const { Title, Paragraph } = Typography;

const GeneralInformationComponent = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ marginTop: 20, width: "100%" }}
      id="about"
    >
      <Col xs={22} md={18} xl={14}>
        <Typography>
          <Title>
            About Me
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

          <Paragraph>
            Multi-talented Computer Engineer consistently rewarded for success
            in planning and operational improvements. Forward-thinking with
            background working effectively in dynamic environments. A Data
            Scientist familiar with gathering, cleaning and organizing data for
            use by technical and non-technical personnel. Advanced understanding
            of statistical, algebraic and other analytical techniques. Highly
            organized, motivated and diligent with significant background in
            development.
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export { GeneralInformationComponent };
