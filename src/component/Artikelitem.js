import React from 'react'
import { Row, Col, Badge } from 'react-bootstrap'
import propTypes from 'prop-types'


const Artikelitem = (props) => {
    return (
        <Row className="listed-artikel">
            <Col md={3} style={{ margin: "10px 0 20px 0" }}>
                <img
                    className="img-fluid rounded"
                    src={props.data.imgSrc}
                    alt={props.data.imgAlt}
                />
            </Col>
            <Col md={9} style={{ margin: "10px 0 20px 0" }}>
                <Badge className="bg-secondary badge-pill mb-23">Info Vokasi</Badge>
                <h6>{props.data.judulArtikelitem}</h6>
            </Col>
        </Row>
    )
}

Artikelitem.propTypes = {
    data: propTypes.object,
}

export default Artikelitem
