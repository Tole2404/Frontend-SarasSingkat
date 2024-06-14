import { Col } from "react-bootstrap";
import "../styles/css/authentifikasi.css";

import logoLogin from "../assets/logo-login.svg";

const LoginComponents = () => {
  return (
    <>
      <Col className="right-login">
        <div className="img-login min-vh-100">
          <img src={logoLogin} alt="hero" />
        </div>
      </Col>
    </>
  );
};

export default LoginComponents;
