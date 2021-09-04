import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import InfoLombaitem from '../component/InfoLombaitem'

import Infolomba1 from '../assets/images/Infolomba1.png'
import Infolomba2 from '../assets/images/Infolomba2.png'
import Infolomba3 from '../assets/images/Infolomba3.png'

const InfoLomba = () => {
    const titleInfoLomba = {
        fontSize: "36px",
        fontWeight: "700"
    }
    const dataInfoLomba = [
        {
            imgSrc: Infolomba1,
            imgAlt: "Infolomba1",
            tglLomba: "20-23 Oktober 2020",
            titleInfoLomba: "Smart City",
            descInfoLomba: "Merupakan sebuah visi pengembangan perkotaan untuk mengintegrasikan teknologi informasi dan komunikasi beserta teknologi internet untuk segala dengan cara yang aman untuk mengelola aset kota."
        },
        {
            imgSrc: Infolomba2,
            imgAlt: "Infolomba2",
            tglLomba: "15 Sept-02 Okt 2020",
            titleInfoLomba: "Piranti Cerdas",
            descInfoLomba: "Sebuah hasil karya teknologi yang bekerja secara interaktif dan otomatis serta mampu memberikan suatu solusi bagi permasalahan sehari-hari."
        },
        {
            imgSrc: Infolomba3,
            imgAlt: "Infolomba3",
            tglLomba: "15 Sept-02 Okt 2020",
            titleInfoLomba: "Kewirausahaan (PKM)",
            descInfoLomba: "Program kreativitas mahasiswa dalam menciptakan aktivitas usaha. Tim mahasiswa harus melakukan analisis adanya kebutuhan dan peluang pasar, untuk selanjutnya membuat kreativitas (komoditas) usaha dalam rangka menyediakan kebutuhan pasar tersebut."
        },
    ]
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={5}>
                    <div className="text-center pb-5">
                        <h1 style={titleInfoLomba}>Info Lomba</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                </Col>
                <Col md={10}>
                    <Row xs={1} md={3} className="g-4">
                        {
                            dataInfoLomba.map((dataInfoLomba, index) =>
                                <InfoLombaitem key={index} data={dataInfoLomba}></InfoLombaitem>)
                        }
                    </Row>
                </Col>
                <Col md={4} className="text-center pt-4">
                    <Button variant="outline-secondary" className="ps-4 pe-4">Lihat Selengkapnya</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoLomba
