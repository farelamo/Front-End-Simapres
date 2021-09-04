import PropTypes from "prop-types";
import { Container, Row, Col, Image } from "react-bootstrap";

function Header({ title, subTitle, imageUrl, imageAlt, description }) {
  const titleStyle = {
    fontFamily: "Roboto",
    fontSize: "36px",
    fontWeight: "700",
  };
  const subTitleStyle = {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "700",
  };
  const descriptionStyle = {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: "400",
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center pb-5" md={10}>
          <h1 className="pb-3" style={titleStyle}>
            {title}
          </h1>
          <p className="pb-3" style={subTitleStyle}>
            {subTitle}
          </p>
          <Image className="pb-3" src={imageUrl} alt={imageAlt} fluid />
          <p style={descriptionStyle}>{description}</p>
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};

export default Header;
