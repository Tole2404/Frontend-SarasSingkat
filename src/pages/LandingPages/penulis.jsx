/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import "../../styles/css/pagesPenulis.css";

import { dataPenulis } from "../../data/index";
import NavbarLanding from "../../components/NavbarLanding";
import FooterComponents from "../../components/Footer";
import LoadingScreen from "../../components/LoadingScreen";

const Penulis = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const navigate = useNavigate();

  const penulisIndex = 0;
  const penulisIndex1 = 1;
  const penulis = dataPenulis[penulisIndex];
  const penulis1 = dataPenulis[penulisIndex1];
  return (
    <div>
      <NavbarLanding />
      <LoadingScreen isLoading={isLoading}>
        <section className="section-pages_penulis">
          <Container>
            <Row className="penulis-box d-flex align-items-end">
              <Col>
                <img src={penulis.img} alt={penulis.img} />
              </Col>
              <Col>
                <div className="penulis_info">
                  <h3>{penulis.title}</h3>
                  <p>{penulis.deskripsi}</p>
                </div>
              </Col>
            </Row>
            <Row className="penulis-box d-flex align-items-start">
              <Col>
                <div className="penulis_info">
                  <h3>{penulis1.title}</h3>
                  <p>{penulis1.deskripsi}</p>
                </div>
              </Col>
              <Col>
                <img src={penulis1.img} alt={penulis.img} />
              </Col>
            </Row>
            <div className="penulis-btn text_writer text-center py-3 mb-5">
              <h3 className="fw-bold">Jadilah Bagian Dari Penulis</h3>
              <p>Mulailah perjalanan Anda sebagai penulis di SarasSingkat dengan mengklik tombol di bawah ini. Segera daftar sebagai penulis dan berkontribusi dalam membangun masyarakat yang lebih literat!</p>
              <button onClick={() => navigate("/signup?role=penulis")} className="py-2 mt-2 fw-bold">
                Mulai Menulis Sekarang
              </button>
            </div>
          </Container>
        </section>
      </LoadingScreen>

      <FooterComponents pageType="landing" />
    </div>
  );
};

export default Penulis;
