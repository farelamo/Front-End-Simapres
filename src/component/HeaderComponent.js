import React from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import headPrestasi from '../assets/images/headerPrestasi.png'

function HeaderComponent() {
    return (
        <>
            <Row className="bg-light">
                <Col md={9}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={7} style={{ padding: "150px 0" }}>
                                <h1>
                                    Prestasi Mahasiswa Vokasi Universitas Brawijaya
                                </h1>
                                <p>Donec rutrum lectus metus. Ut in metus venenatis, aliquam tellus id, facilisis ante. Mauris consectetur quis eros ut vulputate. Maecenas porta non nibh ac placerat</p>
                                <Col md={8} className="bg-white p-2 shadow-sm rounded">
                                    <Button className="ms-3 float-end">Cari</Button>
                                    <Card className="bg-light">
                                        <Form>
                                            <Form.Control type="search" placeholder="Search" />
                                        </Form>
                                    </Card>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={3} className="bg-primary">
                    <div className="gambar" style={{ margin: "50px 0 0 -300px" }}>
                        <img src={headPrestasi} alt="headerPrestasi" className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HeaderComponent
