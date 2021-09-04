import { Card } from "react-bootstrap";

const CardBidangLomba = ({ imgSrc, title, text, textLink, link }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Link href={link}>{textLink}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardBidangLomba;
