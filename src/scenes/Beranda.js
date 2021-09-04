import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Artikel from '../parts/Artikel'
import Testimoni from '../parts/Testimoni'
import InfoLomba from '../parts/InfoLomba'

import Carousels from '../parts/Carousels'
import HeadHome from "../assets/images/headHome.png"
import Testimoni1 from '../assets/images/Testimoni1.png'
import Partnership from '../parts/Partnership'
import Footer from '../parts/Footer'

export default function Beranda() {
    const carouselItem = [
        {
            imgSrc: HeadHome,
            imgAlt: "image",
            nama: "Megan Metcalfe",
            sambutan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            imgSrc: HeadHome,
            imgAlt: "image",
            nama: "Mam Metcalfe",
            sambutan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            imgSrc: HeadHome,
            imgAlt: "image",
            nama: "Mam Metcalfe",
            sambutan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ]
    const dataTestimoni = [
        {
            imgSrc: Testimoni1,
            imgAlt: "image",
            title: "Juara 1 Lomba Desain Website",
            desc: "Kesan saya ketika mengikuti lomba ini yaitu menjadikan karya peserta lain sebagai inspirasi dan pesan yang ingin saya sampaikan semoga teman-teman mahasiswa lainnya semakin berani untuk berkompetisi"
        },
        {
            imgSrc: Testimoni1,
            imgAlt: "image",
            title: "Juara 1 Lomba Desain Website",
            desc: "Kesan saya ketika mengikuti lomba ini yaitu menjadikan karya peserta lain sebagai inspirasi dan pesan yang ingin saya sampaikan semoga teman-teman mahasiswa lainnya semakin berani untuk berkompetisi"
        },
        {
            imgSrc: Testimoni1,
            imgAlt: "image",
            title: "Juara 1 Lomba Desain Website",
            desc: "Kesan saya ketika mengikuti lomba ini yaitu menjadikan karya peserta lain sebagai inspirasi dan pesan yang ingin saya sampaikan semoga teman-teman mahasiswa lainnya semakin berani untuk berkompetisi"
        }
    ]

    const body = {
        fontFamily: "Roboto"
    }
    const titleTestimoni = {
        fontFamily: "Roboto",
        fontSize: "36px",
        fontWeight: "700"
    }
    return (
        <div style={body}>
            {/* carousel */}
            <section className="carousel bg-light pt-5">
                <Container>
                    <Carousels data={carouselItem} />
                </Container>
            </section>
            {/* artikel */}
            <section className="artikel" style={{ padding: "100px 0" }}>
                <Artikel />
            </section>
            {/* testimoni */}
            <section className="testimon bg-light" style={{ padding: "20px 0 50px 0" }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={5}>
                            <div className="text-center pb-4">
                                <h1 style={titleTestimoni}>Tetimoni</h1>
                            </div>
                        </Col>
                        <Col md={10}>
                            <Testimoni data={dataTestimoni} />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* info lomba */}
            <section className="infolomba" style={{ padding: "50px 0 50px 0" }}>
                <InfoLomba />
            </section>
            {/* partnership */}
            <section className="partnership bg-light" style={{ padding: "50px 0 50px 0" }}>
                <Partnership />
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
    )
}
