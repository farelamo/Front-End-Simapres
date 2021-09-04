import React from 'react'
import { Col, Image } from 'react-bootstrap'
import propTypes from 'prop-types'

export default function Partnershipitem(props) {
    const name = {
        fontSize: "18px",
        fontWeight: "400"
    }
    return (
        <Col md={2} className="text-center">
            <Image
                src={props.data.imgSrc}
                alt={props.data.imgAlt}
                fluid roundedCircle thumbnail />
            <p style={name} className="mt-3 text-uppercase">{props.data.partner}</p>
        </Col>
    )
}

Partnershipitem.propTypes = {
    data: propTypes.object
}