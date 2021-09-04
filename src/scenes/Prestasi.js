import React from 'react'
import { Container, Pagination, Row, Col, Button, Card } from 'react-bootstrap';
import HeaderComponent from '../component/HeaderComponent'
import Table from '../component/table'
import Footer from '../parts/Footer';


function Prestasi() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item className="ps-3" activeLabel={false} key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }

    const paginationBasic = (
        <>
            <Pagination>{items}</Pagination>
        </>
    );
    const data = [
        {
            name: "Alfina Rizky Lestari",
            competition: "IT bussines IDEA CODE 2020",
            standing: " Juara 1 Tingkat Nasional  ",
            owner: "Universitas Diponegoro",
        },
        {
            name: "Alfina Rizky Lestari",
            competition: "IT bussines IDEA CODE 2020",
            standing: " Juara 1 Tingkat Nasional  ",
            owner: "Universitas Diponegoro",
        },
        {
            name: "Alfina Rizky Lestari",
            competition: "IT bussines IDEA CODE 2020",
            standing: " Juara 1 Tingkat Nasional  ",
            owner: "Universitas Diponegoro",
        },
        {
            name: "Alfina Rizky Lestari",
            competition: "IT bussines IDEA CODE 2020",
            standing: " Juara 1 Tingkat Nasional  ",
            owner: "Universitas Diponegoro",
        },
        {
            name: "Alfina Rizky Lestari",
            competition: "IT bussines IDEA CODE 2020",
            standing: " Juara 1 Tingkat Nasional  ",
            owner: "Universitas Diponegoro",
        },
        {
            name: "Alfina Rizky Lestari",
            competition: "IT bussines IDEA CODE 2020",
            standing: " Juara 1 Tingkat Nasional  ",
            owner: "Universitas Diponegoro",
        },
    ];

    const columns = [
        {
            Header: "Nama Mahasiswa",
            accessor: "name",
        },
        {
            Header: "Nama Lomba",
            accessor: "competition",
        },
        {
            Header: "Peringkat",
            accessor: "standing",
        },
        {
            Header: "Pelaksana",
            accessor: "owner",
        },
        {
            Header: "",
            accessor: "actions",
            Cell: ({ row }) => {

                return (
                    <>
                        <Button variant="primary">Baca Berita</Button>
                    </>
                );
            },
        },
    ];
    return (
        <div>
            <HeaderComponent />
            <Container style={{ padding: "100px 0" }}>
                <Row className="pb-4">
                    <Col md={8} />
                    <Col md={4}>
                        <span className="float-end">
                            <Button variant="primary" className="ms-2">Semua</Button>{''}
                            <Button variant="secondary" className="ms-2">Akademik</Button>{''}
                            <Button variant="secondary" className="ms-2">Non Akademik</Button>{''}
                        </span>
                        <h3 className="text-bold">Filter :</h3>
                    </Col>
                </Row>
                <Card className="shadow-sm">
                    <Table striped columns={columns} data={data} />
                    <Col className="mx-auto">
                        {paginationBasic}
                    </Col>
                </Card>
            </Container>
            <Footer />
        </div>
    )
}
export default Prestasi