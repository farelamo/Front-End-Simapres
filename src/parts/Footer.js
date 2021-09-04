import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageUrl from "../assets/images/logo-vokasi-white.png";

function Footer() {

  return (
    <div className="footer text-white" >
      <Row className="justify-content-center py-3">
        <Col className="text-center" md={3}>
          <Image className="mb-3" src={imageUrl} />
          <p className="text-lg-center">
            Program pendidikan vokasi merupakan <br /> Program pendidikan vokasi
            merupakan <br /> Program pendidikan vokasi merupakan <br /> Program pendidikan
            vokasi merupakan <br /> Program pendidikan vokasi merupakan <br /> Program
            pendidikan vokasi merupakan
          </p>
        </Col>
        <Col className="text-center" md={2}>
          <hr className="my-4 link-linecolor-secondary" />
          <p className="fw-bold fs-5">UB Links</p>
          <p><Link to="/" className="link-style">UB Official</Link></p>
          <p><Link to="/" className="link-style">UB News</Link></p>
          <p><Link to="/" className="link-style">UB Care</Link></p>
          <p><Link to="/" className="link-style">Webmail</Link></p>
        </Col>
        <Col className="text-center" md={2}>
          <hr className="my-4 link-linecolor" />
          <p className="fw-bold fs-5">UB Links</p>
          <p><Link to="/" className="link-style">OTHER LINKS</Link></p>
          <p><Link to="/" className="link-style">Jurnal Vokasindo</Link></p>
          <p><Link to="/" className="link-style">BRAVO</Link></p>
          <p><Link to="/" className="link-style">SIVOKA</Link></p>
        </Col>
        <Col className="text-center" md={2}>
          <hr className="my-4 link-linecolor-secondary" />
          <p className="fw-bold fs-5">OFFICIAL ACCOUNT</p>
          <p><Link to="/" className="link-style">Vokasiub</Link></p>
          <p><Link to="/" className="link-style">Bemvokasiub</Link></p>
          <p><Link to="/" className="link-style">Irestech.ub</Link></p>
        </Col>
        <Col className="text-center" md={3}>
          <hr className="my-4 invisible link-linecolor-secondary" />
          <p className="fw-bold fs-5">CONTACT US</p>
          <div className="list-contact">
            <p className="text-lg-start">
              Address: Jl Veteran No 12 – 14, Ketawanggede, Malang, Jawa Timur,
              Indonesia
            </p>
            <p className="text-lg-start">Email : vokasi@ub.ac.id</p>
            <p className="text-lg-start">Phone :0341-551-611</p>
          </div>
        </Col>
      </Row>
      <Row className="copyright text-center justify-content-center">
        <Col className="text-lg-start" sm={11}>
          <div>Copyright © 2021 Vokasi Universitas Brawijaya</div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
