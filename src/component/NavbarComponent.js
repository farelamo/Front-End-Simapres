import React from 'react'
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import logoVokasi from '../assets/images/logo vokasi.png'

const NavbarComponent = () => {

    return (
        <Navbar sticky='top' bg="light" expand="lg" className="pt-3">
            <Container>
                <Navbar.Brand href="/home" className="ps-3">
                    <img
                        src={logoVokasi}
                        className="d-inline-block align-top img-fluid"
                        alt="Logo Vokasi" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" >
                        <LinkContainer className="text-nav" to="/home">
                            <Nav.Link>Beranda</Nav.Link>
                        </LinkContainer>
                        <LinkContainer className="text-nav" to="/lomba">
                            <Nav.Link>Lomba</Nav.Link>
                        </LinkContainer>
                        <LinkContainer className="text-nav" to="/prestasi">
                            <Nav.Link>Prestasi</Nav.Link>
                        </LinkContainer>
                        <Form className="form-inline">
                            <Button size="md" className="ps-4 pe-4">Login</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavbarComponent

