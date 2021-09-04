import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Partnershipitem from '../component/Partnershipitem'

import Partner1 from '../assets/images/vokasi.png'
import Partner2 from '../assets/images/bem.png'
import Partner3 from '../assets/images/irestech.png'

const Partnership = () => {
    const titlePartnership = {
        fontSize: "36px",
        fontWeight: "700"
    }
    const dataPartnership = [
        {
            imgSrc: Partner1,
            imgAlt: "Partner1",
            partner: "Program Pendidikan Vokasi"
        },
        {
            imgSrc: Partner2,
            imgAlt: "Partner2",
            partner: "BEM Vokasi UB"
        },
        {
            imgSrc: Partner3,
            imgAlt: "Partner3",
            partner: "Irestech"
        },
    ]
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={12}>
                    <div className="text-center pb-5">
                        <h1 style={titlePartnership}>Partnership</h1>
                    </div>
                </Col>
                <Col md={10}>
                    <Row className="justify-content-center">
                        {
                            dataPartnership.map((dataPartnership, index) =>
                                <Partnershipitem key={index} data={dataPartnership}></Partnershipitem>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Partnership