import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHome } from "@fortawesome/free-solid-svg-icons";

import "../styles/css/Footer.css";

import { Link } from "react-router-dom";

import logoFooter from "../assets/logo-footer.svg";

const FooterComponents = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <Container>
        <Row className="list-footer">
          <Col className="pb-5">
            <div className="logo">
              <div className="logo-text">
                <img src={logoFooter} alt="SarasSingkat" />
                <h2>SarasSingkat</h2>
              </div>
              <div>Temukan Kesenangan Dalam Membaca !</div>
            </div>
          </Col>
          <Col>
            <div className="our-teams py-2">
              <h4>
                <FontAwesomeIcon icon={faUsers} />
                Our teams
              </h4>
              <ul className="team-list list-unstyled">
                <li className="team-list-item">
                  <a href="https://www.linkedin.com/in/tunggulbayukusuma/">Tunggul Bayu Kusuma</a>
                </li>
                <li className="team-list-item">
                  <a href="https://www.linkedin.com/in/nadia-fitriani-554a7829b/">Nadia Fitriani</a>
                </li>
                <li className="team-list-item">
                  <a href="https://www.linkedin.com/in/jeffreypasaribu/">Jeffrey Jeverson Pasaribu</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="pb-3">
            <div className="navigasi d-flex flex-column">
              <h4 className="navigasi-list">
                <FontAwesomeIcon icon={faHome} />
                Navigasi
              </h4>
              <Link to="/">Beranda</Link>
              <Link to="/penulis">Penulis</Link>
              <Link to="/tentang">Tentang</Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="copyright text-center">
          <p>&copy; {currentYear} SarasSingkat. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterComponents;
