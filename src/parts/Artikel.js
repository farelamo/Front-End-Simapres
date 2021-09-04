import React from 'react'
import Artikelitem from '../component/Artikelitem'
import { Container, Button, Row, Col, Card, Badge } from 'react-bootstrap'

import Artikelhead from "../assets/images/Artikelhead.png"
import Artikelitem1 from "../assets/images/Artikelitem1.png"
import Artikelitem2 from "../assets/images/Artikelitem2.png"
import Artikelitem3 from "../assets/images/Artikelitem3.png"

const Artikel = () => {
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
    const dataArtikel = [
        {
            imgSrc: Artikelitem1,
            imgAlt: "Artikelitem1",
            judulArtikelitem: "Jelang Lomba Gemastik 2021, Vokasi UB mengadakan bimbingan lomba rutin"
        },
        {
            imgSrc: Artikelitem2,
            imgAlt: "Artikelitem2",
            judulArtikelitem: "Petunjuk Teknis Pelaksanaan PIMNAS ke 34 Tahun 2021"
        },
        {
            imgSrc: Artikelitem3,
            imgAlt: "Artikelitem3",
            judulArtikelitem: "Dibalik kisah mahasiswa para pejuang kompetisi Gemastik"
        }
    ]
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="text-center pb-5" md={5}>
                    <h1 style={titleHead}>Artikel</h1>
                    <p style={textHead}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <img className="img-fluid rounded" src={Artikelhead} alt="Artikelhead" />
                    <Card.Body>
                        <Badge className="bg-secondary rounded-pill mb-2">Vokasi Juara</Badge>
                        <Card.Title>Pekan Ilmiah Mahasiswa Nasional 2020, Universitas Brawijaya Jadi Juara Kedua</Card.Title>
                    </Card.Body>
                </Col>
                <Col md={4}>
                    {
                        dataArtikel.map((dataArtikel, index) =>
                            <Artikelitem key={index} data={dataArtikel}></Artikelitem>)
                    }
                </Col>
                <Col md={4} className="text-center pt-4">
                    <Button variant="outline-secondary" className="ps-4 pe-4">Berita Lainnya</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Artikel

