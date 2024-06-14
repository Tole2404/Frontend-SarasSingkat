import { useState } from "react";
import { Button, Form, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginComponents from "../../components/LoginComponents";
import "../../styles/css/authentifikasi.css";
import logo from "../../assets/logo.svg";

const Signup = () => {
  const queryParams = new URLSearchParams(location.search);
  const roleFromQuery = queryParams.get("role");

  const [key, setKey] = useState(roleFromQuery || "pembaca");

  return (
    <div>
      <Row>
        <Col className="left-signup">
          <div className="form-login">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="SarasSingkat" />
              </Link>
              <h3 className="text-center">SarasSingkat</h3>
            </div>
            <div className="signin-as mb-2">
              <div className="line"></div>
              <p>Masuk Sebagai</p>
              <div className="line"></div>
            </div>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
              <Tab eventKey="pembaca" title="Pembaca" className="nav-item nav-link"></Tab>
              <Tab eventKey="penulis" title="Penulis" className="nav-item nav-link"></Tab>
            </Tabs>
            <Form className="form-signup">
              <div className="form-signup name-input-group">
                <Form.Group className="name-input mb-3" controlId="formBasicFirstName">
                  <Form.Label>Nama Depan</Form.Label>
                  <Form.Control type="text" placeholder="Nama Depan " />
                </Form.Group>

                <Form.Group className="name-input mb-3" controlId="formBasicLastName">
                  <Form.Label>Nama Belakang</Form.Label>
                  <Form.Control type="text" placeholder="Nama Belakang " />
                </Form.Group>
              </div>

              <Form.Group className="email-input mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group className="password-input mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="confirm-password-input mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control type="password" placeholder="Konfirmasi Password" />
              </Form.Group>

              <div className="btn-submit text-center">
                <Button type="submit">Buat Akun</Button>
              </div>
            </Form>
            <div className="link-to_login py-2">
              <Link to={"/login"}>
                <p>
                  <span>Sudah punya akun?</span> Masuk
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

export default Signup;
