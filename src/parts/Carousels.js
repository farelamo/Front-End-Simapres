import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import propTypes from 'prop-types'
import '../assets/css/style.scss'

const Carousels = (props) => {
    const titleHead = {
        fontFamily: "Roboto",
        fontSize: "36px",
        fontWeight: "700",
    }
    const textHead = {
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: "400",
    }
    console.log(props.data);
    return (
        <Carousel nextLabel={false} prevLabel={false}>
            {
                props.data.map((carouselItem, index) =>
                    <Carousel.Item key={index} interval={5000}>
                        <Row className="justify-content-center">
                            <Col md={5}>
                                <img
                                    className="img-fluid"
                                    src={carouselItem.imgSrc}
                                    alt={carouselItem.imgAlt}
                                />
                            </Col>
                            <Col md={5} style={{ padding: "200px 0" }}>
                                <h1 style={titleHead}>{carouselItem.nama}</h1>
                                <p style={textHead}>{carouselItem.sambutan}</p>
                                <Button style={textHead} className="ps-3 pe-3" variant="info" size="sm">Lihat Sengkapnya</Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                )
            }

        </Carousel>
    )
}

Carousels.propTypes = {
    data: propTypes.object
}

export default Carousels
