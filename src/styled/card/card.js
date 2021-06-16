import React from "react";
import { Card, Col, Image } from "antd";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const TitleComponent = (postion, title, location, date) => {
  return (
    <Col>
      <Typography>
        <Title level={3}>{postion}</Title>
        <Paragraph>
          {title} - {location}
          <Paragraph style={{ color: "grey" }}>{date}</Paragraph>
        </Paragraph>
      </Typography>
    </Col>
  );
};

const InformationCard = ({ position, title, location, date, content }) => (
  <Card
    title={TitleComponent(position, title, location, date)}
    style={{ textAlign: "start" }}
  >
    {content && (
      <Paragraph>
        <ul>
          {content.map((content) => (
            <li key={content + "44"}>{content}</li>
          ))}
        </ul>
      </Paragraph>
    )}
  </Card>
);
const EducationCard = ({ major, university, location, date }) => (
  <Card style={{ textAlign: "start" }}>
    <Col>
      <Typography>
        <Title level={3}>{major}</Title>
        <Paragraph>
          {university} - {location}
          <Paragraph style={{ color: "grey" }}>{date}</Paragraph>
        </Paragraph>
      </Typography>
    </Col>
  </Card>
);

const ProjectCard = ({ title, description, Logo, images }) => (
  <Card
    style={{ width: 450, textAlign: "start" }}
    cover={
      <Image.PreviewGroup>
        {images &&
          images.map((image) => (
            <Image
              key={image}
              style={{ display: image !== images[0] ? "none" : "block" }}
              src={image}
            />
          ))}
      </Image.PreviewGroup>
    }
  >
    <Meta
      avatar={Logo}
      title={title}
      description={description}
      style={{ height: 175 }}
    />
  </Card>
);

export { InformationCard, EducationCard, ProjectCard };
