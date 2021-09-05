import React from 'react'
import { Container, Pagination, Row, Col, Button, Card } from 'react-bootstrap';
import HeaderComponent from '../component/HeaderComponent'
import Table from '../component/table'
import Footer from '../parts/Footer';
import  axios from 'axios';

async function API(){
    try {
        const config = {
            method: 'get',
            url: 'https://116.193.190.196:3000/api/artikel/:id'
        };
        const response = await axios(config);
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

function Prestasi() {
    API();

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

    let data = [

    ]

    const columns = [
        {
            Header: "Nama Mahasiswa",
            accessor: "nama",
        },
        {
            Header: "Nama Lomba",
            accessor: "nama_lomba",
        },
        {
            Header: "Peringkat",
            accessor: "peringkat",
        },
        {
            Header: "Pelaksana",
            accessor: "pelaksana",
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