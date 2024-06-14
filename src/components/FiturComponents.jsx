import { Container, Row, Col } from "react-bootstrap";
import { fiturData } from "../data";
import HeroImage from "../assets/img/fitur.jpg";

const FiturComponents = () => {
  return (
    <div>
      <section className="section-fitur pt-5">
        <Container>
          <Row className="fitur-box d-flex align-items-center">
            <Col>
              <img src={HeroImage} alt={HeroImage} />
            </Col>
            <Col>
              <h3>
                Fitur <span>SarasSingkat</span>
              </h3>
              <p>SarasSingkat menawarkan berbagai fitur yang dirancang untuk membantu Anda menemukan dan menikmati buku yang tepat:</p>
              {fiturData.map((fitur) => (
                <div className="fitur" key={fitur.id}>
                  <div className="fitur-rp d-flex">
                    <img src={fitur.logo} alt="SarasSingkat" />
                    <h1>
                      <span>{fitur.judul}</span> {fitur.deskripsi}
                    </h1>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FiturComponents;
