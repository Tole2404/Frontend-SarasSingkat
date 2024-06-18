import { useState } from "react";
import { Button, Form, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginComponents from "../../components/LoginComponents";
import "../../styles/css/authentifikasi.css";
import logo from "../../assets/logo.svg";
import axios from 'axios';

const Signup = () => {
  const queryParams = new URLSearchParams(location.search);
  const roleFromQuery = queryParams.get("role");

  const [key, setKey] = useState("pembaca");
  const [formData, setFormData] = useState({
    nama_depan: '',
    nama_belakang: '',
    role: "pembaca",
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Memeriksa apakah password dan konfirmasi password cocok
    if (formData.password !== formData.confirmPassword) {
      alert("Konfirmasi password tidak cocok dengan password.");
      return;
    }
  
    // Membuat objek data yang akan dikirimkan ke backend
    const sendData = {
      nama_depan: formData.nama_depan,
      nama_belakang: formData.nama_belakang,
      role: formData.role,
      email: formData.email,
      password: formData.password
    };
  
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', sendData);
      console.log(response.data);
      // Anda dapat menambahkan logika redirect atau pesan sukses di sini
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  

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
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => {
              setKey(k); 
              setFormData({
                ...formData,
                role: k
              });
            }} className="mb-3">
              <Tab eventKey="pembaca" title="Pembaca" className="nav-item nav-link"></Tab>
              <Tab eventKey="penulis" title="Penulis" className="nav-item nav-link"></Tab>
            </Tabs>
            <Form className="form-signup" onSubmit={handleSubmit}>
              <div className="form-signup name-input-group">
                <Form.Group className="name-input mb-3" controlId="formBasicFirstName">
                  <Form.Label>Nama Depan</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nama Depan"
                    name="nama_depan"
                    value={formData.nama_depan}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="name-input mb-3" controlId="formBasicLastName">
                  <Form.Label>Nama Belakang</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nama Belakang"
                    name="nama_belakang"
                    value={formData.nama_belakang}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <Form.Group className="email-input mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="password-input mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="confirm-password-input mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Konfirmasi Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
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
