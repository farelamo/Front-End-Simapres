import React from 'react'
import { Card, Badge, Col } from 'react-bootstrap'
import propTypes from 'prop-types'

export default function InfoLombaitem(props) {
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" className="img-fluid" src={props.data.imgSrc} alt={props.data.imgAlt} />
                <Card.Body>
                    <Card.Title>{props.data.titleInfoLomba}</Card.Title>
                    <p className="tanggalLomba"><Badge className="text-dark" style={{ backgroundColor: "#E8EEF8" }}>{props.data.tglLomba}</Badge></p>
                    <Card.Text>
                        {props.data.descInfoLomba}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

InfoLombaitem.propTypes = {
    data: propTypes.object,
}