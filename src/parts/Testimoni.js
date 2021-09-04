import React from 'react'
import propTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import '../assets/css/style.scss'

const Testimoni = (props) => {
    const imgJuara = {
        position: 'relative'
    }
    const titleJuara = {
        fontFamily: "Roboto",
        fontSize: "24px",
        fontWeight: "700"
    }
    const descJuara = {
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: "400"
    }
    const bannerTestimoni = {
        borderRadius: "1.5rem",
        backgroundColor: "#FFD480",
    }


    return (
        <div className="bannerTestimoni" style={bannerTestimoni}>
            <Carousel nextLabel={false} prevLabel={false}>
                {
                    props.data.map((dataTestimoni, index) =>
                        <Carousel.Item key={index} interval={5000}>
                            <Row className="justify-content-center">
                                <Col md={4}>
                                    <img
                                        className="img-fluid"
                                        style={imgJuara}
                                        src={dataTestimoni.imgSrc}
                                        alt={dataTestimoni.imgAlt}
                                    />
                                </Col>
                                <Col md={7} className="p-5">
                                    <h3 style={titleJuara}>{dataTestimoni.title}</h3>
                                    <p style={{ color: "#5A5656", fontSize: "16px" }}>Olimpiade Vokasi Indonesia 2020</p>
                                    <p style={descJuara}>{dataTestimoni.desc}</p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    )
}

Testimoni.propTypes = {
    data: propTypes.object,
}

export default Testimoni
