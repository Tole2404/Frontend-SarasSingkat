import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../../assets/img/about_image.jpg";
import { dataTeam } from "../../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

import "../../styles/css/pagesTentang.css";
import LoadingScreen from "../../components/LoadingScreen";
import FooterComponents from "../../components/Footer";
import NavbarLanding from "../../components/NavbarLanding";

const Tentang = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <NavbarLanding />

      <section className="section-about_us">
        <LoadingScreen isLoading={isLoading}>
          <Container>
            <Row className="about-box d-flex align-items-start">
              <Col>
                <img src={aboutImage} alt={aboutImage} />
              </Col>
              <Col>
                <div className="penulis_info">
                  <h3>Tentang SarasSingkat</h3>
                  <p>
                    SarasSingkat merupakan platform digital yang menyajikan ringkasan buku singkat, padat, dan menarik. Kami hadir untuk membantu Anda mengakses inti dari berbagai buku tanpa harus menghabiskan banyak waktu membaca. Dengan
                    menyediakan ringkasan yang mudah dipahami dan informatif,
                  </p>
                  <p>SarasSingkat bertujuan untuk meningkatkan literasi dan minat baca masyarakat Indonesia, membantu semua orang dari berbagai latar belakang untuk tetap terinspirasi dan termotivasi dalam membaca.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </LoadingScreen>
      </section>

      <section className="cards">
        <Container className="team-area">
          <div className="section-title">
            <h3 className="fw-bold text-center">Kenali Tim Kami</h3>
          </div>
          <div className="card-team d-flex py-5">
            {dataTeam.map((member) => (
              <div className="column" key={member.id}>
                <div className="card-item">
                  <div className="img-container">
                    <img src={member.img} alt="Team Image" />
                  </div>
                  <h4>{member.nama}</h4>
                  <p>{member.position}</p>
                  <span>{member.univ}</span>
                  <div className="icon">
                    <a href="#" className="social-tw">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="#" className="social-tw">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" className="social-tw">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FooterComponents pageType="landing" />
    </div>
  );
};
export default Tentang;
