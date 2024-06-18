import { useEffect, useState } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import hero from "../../assets/img/hero.jpg";

import { misiData, faq } from "../../data/index";
import NavbarLanding from "../../components/NavbarLanding";
import FooterComponents from "../../components/Footer";
import FiturComponents from "../../components/FiturComponents";
import LoadingScreen from "../../components/LoadingScreen";

const Beranda = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <NavbarLanding />
      <LoadingScreen isLoading={isLoading}>
        <div className="beranda">
          <header className="d-flex align-items-center">
            <Container>
              <Row className="header-box d-flex align-items-center">
                <Col>
                  <h3 className=""> Luaskan Wawasan Anda Tanpa Harus Membaca Buku Secara Keseluruhan</h3>
                  <p>
                    Bosan dengan buku yang tebal dan memakan waktu lama untuk dibaca? SarasSingkat hadir sebagai solusi! Platform digital ini menyediakan ringkasan buku yang informatif dan menarik dalam waktu singkat, memungkinkan Anda
                    untuk mendapatkan pengetahuan dan wawasan baru tanpa harus menghabiskan banyak waktu.
                  </p>
                </Col>
                <Col>
                  <img src={hero} alt="hero" />
                </Col>
              </Row>
            </Container>
          </header>
        </div>
      </LoadingScreen>

      <section className="section-misi">
        <div className="header-misi text-center">
          <h3>Misi Kami</h3>
        </div>
        <Container>
          {misiData.map((misi) => (
            <div className="misi text-center" key={misi.id}>
              <div>
                <img src={misi.img} alt="arrow" />
                <p> {misi.deskripsi}</p>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <button onClick={() => navigate("/login")}>Masuk</button>
          </div>
        </Container>
      </section>

      <FiturComponents />

      <section className="section-writer">
        <Container>
          <div className="writer">
            <div className="writer-title ">
              <h2 className="fw-bold">Bergabunglah Sebagai Penulis</h2>
            </div>
            <div className="writer-desc py-3">
              <p>Bergabunglah dengan komunitas penulis kami di SarasSingkat dan berikan kontribusi Anda untuk meningkatkan literasi masyarakat Indonesia.</p>
            </div>
            <button onClick={() => navigate("/penulis")} className="btn">
              Lihat Selengkapnya
            </button>
          </div>
        </Container>
      </section>

      <section className="faq">
        <Container>
          <Row>
            <Col>
              <h3 className="text-center fw-bold">Frequently Asked Questions</h3>
            </Col>
          </Row>
          <Row className="g-3 pt-5">
            {faq.map((datafaq) => {
              return (
                <div key={datafaq.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey={datafaq.eventKey}>
                      <Accordion.Header>{datafaq.title}</Accordion.Header>
                      <Accordion.Body>{datafaq.desc}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              );
            })}
          </Row>
        </Container>
      </section>
      <FooterComponents pageType="landing" />
    </div>
  );
};

export default Beranda;
