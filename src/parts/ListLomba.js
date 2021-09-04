import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Pagination,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function InfoLomba({ imageUrl }) {
  const titleStyle = {
    fontFamily: "Roboto",
    fontSize: "36px",
    fontWeight: "700",
  };
  const headerStyle = {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "700",
  };
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} activeLabel={false}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center pt-3">
          <h1 className="pb-3" style={titleStyle}>
            {/* {title} */}
            Info Lomba
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3}>
          <Card>
            <Card.Header className="bg-white" style={headerStyle}>
              Kategori
            </Card.Header>
            <Card.Body>
              <Accordion>
                <span className="float-end material-icons-outlined clickable">expand_more</span>
                <Accordion.Toggle className="clickable pb-2" as={ListGroup} eventKey="0">
                  Teknologi
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>
                      {[
                        'Cyber Security',
                        'Pemrograman',
                        'Game Development',
                        'IOT',
                        'Data Mining',
                        'UI/UX Design',
                      ].map((type) => (
                        <div key={`checkbox-${type}`} className="mb-3">
                          <Form.Check
                            type={"checkbox"}
                            id={`${type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
                <span className="float-end material-icons-outlined clickable">expand_more</span>
                <Accordion.Toggle className="clickable pb-2" as={ListGroup} eventKey="1">
                  Design
                </Accordion.Toggle>
                <span className="float-end material-icons-outlined clickable">expand_more</span>
                <Accordion.Toggle className="clickable pb-2" as={ListGroup} eventKey="2">
                  Wirausaha
                </Accordion.Toggle>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form>
            <Form.Control type="search" placeholder="Search" />
          </Form>
          {/* <Row className="listed-InfoLomba"> */}
          <Card className="my-3 p-3">
            <Row>
              <Col className="d-flex flex-column justify-content-center" md={2}>
                <img
                  className="img-fluid rounded m-3"
                  src={imageUrl}
                  alt="ImageLomba"
                />
              </Col>
              <Col md={7}>
                <div className="title fw-bold fs-3">GEMASTIK XIII 2020</div>
                <div className="organizer">Gemastik Telkom University</div>
                <div className="description my-3">
                  program Direktorat Kemahasiswaan, Direktorat Jenderal
                  Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi
                  dan Pendidikan Tinggi.
                </div>
                <LinkContainer to="isi-lomba">
                  <Button variant="secondary" size="sm">
                    Lihat Detail
                  </Button>
                </LinkContainer>
              </Col>
              <Col md={2} className="text-end">
                <span className="badge bg-secondary text-dark">
                  20-23 Oktober 2020
                </span>
                <br />
                <span class="badge bg-warning text-dark">Team</span>
              </Col>
            </Row>
          </Card>
          {paginationBasic}
          {/* </Row> */}
        </Col>
      </Row>
    </Container >
  );
}

// InfoLomba.defaultProps = {
//   title: "Info Lomba",
// };

InfoLomba.propTypes = {
  imageUrl: PropTypes.string,
};

export default InfoLomba;
