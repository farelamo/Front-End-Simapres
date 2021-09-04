import React from "react";
import Header from "../parts/Header";
import ListLomba from "../parts/ListLomba";
import HeaderImage from "../assets/images/HeaderImage.png";
import ImageLomba from "../assets/images/gemastik.png"
import Footer from "../parts/Footer";
import { Container } from "react-bootstrap";

function Lomba() {
  return (
    <>
      <section className="header-lomba bg-light pt-5">
        <Container>
          <Header
            title="Lorem ipsum dolor sit amet"
            subTitle="Donec rutrum lectus metus. Ut in metus venenatis, aliquam tellus id, facilisis ante. Mauris consectetur quis eros ut vulputate. Maecenas porta non nibh ac placerat"
            imageUrl={HeaderImage}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          />
        </Container>
      </section>
      <section className="info-lomba" style={{ padding: "100px 0" }}>
        <Container>
          <ListLomba imageUrl={ImageLomba} />
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Lomba;
