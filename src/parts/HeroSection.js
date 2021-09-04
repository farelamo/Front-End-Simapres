import { Container, Image } from "react-bootstrap";

const HeroSection = ({ data }) => {
  return (
    <div className="text-center bg-light py-5 ">
      {data.map((hero) => (
        <Container>
          <div class="row justify-content-center">
            <div className="col-8 fs-1 fw-bold mb-2">{hero.title}</div>
            <div className="col-8 fw-bold mb-3">{hero.subtitle}</div>
            <Image className="col-10" src={hero.imgSrc} alt={hero.imgAlt} fluid />
            <div className="col-8 hero-description my-3">{hero.description}</div>
          </div>
        </Container>
      ))}
    </div>
  );
};

export default HeroSection;
