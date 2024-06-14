import { Row, Col, Form, Button } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "../../styles/css/authentifikasi.css";
import { Link } from "react-router-dom";
import LoginComponents from "../../components/LoginComponents";

const Login = () => {
  return (
    <div>
      <Row>
        <Col className="left-login">
          <div className="form-login">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="SarasSingkat" />
              </Link>
              <h3 className="text-center">SarasSingkat</h3>
            </div>
            <Form>
              <Form.Group className="email-input mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group className="password-input mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="btn-submit text-center">
                <Button type="submit">Masuk</Button>
              </div>
            </Form>
            <div className="link-to_signup py-2">
              <Link to={"/signup"}>
                <p>
                  <span>Belum Punya Akun?</span> Daftar
                </p>
              </Link>
            </div>
          </div>
        </Col>
        <LoginComponents />
      </Row>
    </div>
  );
};

export default Login;
