import React from "react";
import Header from "../parts/Header";
import HeaderImage from "../assets/images/HeaderImage.png";
import Footer from "../parts/Footer";
import Timeline from "../component/Timeline";
import KeamananCyberImg from "../assets/images/keamanancyber.png";
import CardBidangLomba from "../component/CardBidangLomba";
import { Container } from "react-bootstrap";

function IsiLomba() {
  const timelines = [
    {
      name: "1 July",
      active: true,
    },
    {
      name: "7 July",
      active: true,
    },
    {
      name: "24 July",
      active: false,
    },
    {
      name: "26 July",
      active: false,
    },
    {
      name: "1 August",
      active: false,
    },
    {
      name: "7 August",
      active: false,
    },
  ];
  const bidangLomba = [
    {
      imgSrc: KeamananCyberImg,
      title: "Keamanan Siber",
      text: "Kompetisi kategori ini bertujuan untuk menguji kemampuan peserta dalam menghadapi kasus keamanan sistem komputer dan jaringan yang telah disiapkan,",
      textLink: "Lihat Sengkapnya",
      link: "/",
    },
    {
      imgSrc: KeamananCyberImg,
      title: "Keamanan Siber",
      text: "Kompetisi kategori ini bertujuan untuk menguji kemampuan peserta dalam menghadapi kasus keamanan sistem komputer dan jaringan yang telah disiapkan,",
      textLink: "Lihat Sengkapnya",
      link: "/",
    },
    {
      imgSrc: KeamananCyberImg,
      title: "Keamanan Siber",
      text: "Kompetisi kategori ini bertujuan untuk menguji kemampuan peserta dalam menghadapi kasus keamanan sistem komputer dan jaringan yang telah disiapkan,",
      textLink: "Lihat Sengkapnya",
      link: "/",
    },
    {
      imgSrc: KeamananCyberImg,
      title: "Keamanan Siber",
      text: "Kompetisi kategori ini bertujuan untuk menguji kemampuan peserta dalam menghadapi kasus keamanan sistem komputer dan jaringan yang telah disiapkan,",
      textLink: "Lihat Sengkapnya",
      link: "/",
    },
    {
      imgSrc: KeamananCyberImg,
      title: "Keamanan Siber",
      text: "Kompetisi kategori ini bertujuan untuk menguji kemampuan peserta dalam menghadapi kasus keamanan sistem komputer dan jaringan yang telah disiapkan,",
      textLink: "Lihat Sengkapnya",
      link: "/",
    },
    {
      imgSrc: KeamananCyberImg,
      title: "Keamanan Siber",
      text: "Kompetisi kategori ini bertujuan untuk menguji kemampuan peserta dalam menghadapi kasus keamanan sistem komputer dan jaringan yang telah disiapkan,",
      textLink: "Lihat Sengkapnya",
      link: "/",
    },
  ];
  return (
    <>

      <section className="header-lomba bg-light pt-5">
        <Header
          title="GEMASTIK XIII"
          subTitle="(Pagelaran Mahasiswa Nasional Bidang Tekonologi Informasi dan Komunikasi), merupakan program Direktorat Kemahasiswaan, Direktorat Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi dan Pendidikan Tinggi."
          imageUrl={HeaderImage}
          imageAlt="Gemastik Image"
          description="Program ini ditujukan untuk meningkatkan kompetensi mahasiswa Indonesia, sehingga mampu mengambil peran sebagai agen perubahan dalam memajukan TIK dan pemanfaatannya, baik ketika masih dalam masa studi maupun kelak sesudah lulus studi."
        />
      </section>
      <section className="timeline-section">
        <Container>
          <div className="text-center pt-5 pb-5 fw-bold h1">Timeline</div>
          <Timeline items={timelines} />
        </Container>
      </section>
      <section className="bidang-lomba bg-light" style={{ padding: "100px 0" }}>
        <div className="text-center fw-bold h1">Bidang Lomba</div>
        <div class="d-flex flex-wrap justify-content-center">
          {bidangLomba.map((data) => (
            <div className="mx-5 my-3">
              <CardBidangLomba
                imgSrc={data.imgSrc}
                title={data.title}
                text={data.text}
                textLink={data.textLink}
                link={data.link}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default IsiLomba;
