import { useState } from "react";
import { Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import axios from "axios";
import logo from "../../assets/logo.svg";
import "../../styles/css/authentifikasi.css";
import LoginComponents from "../../components/LoginComponents";

import { EyeSlash, Eye } from "react-bootstrap-icons";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://sarassingkat.devasa.web.id/api/users/login", formData);

      if (response.data.status === "SUCCESS") {
        const { role } = response.data.user;

        if (role === "pembaca") {
          navigate("/dashboard-pembaca");
        } else if (role === "penulis") {
          navigate("/dashboard-penulis");
        } else {
          navigate("/");
        }
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setErrorMessage("Login gagal. Silakan coba lagi.");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
            <Form onSubmit={handleSubmit}>
              <Form.Group className="email-input mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="password-input mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <FormControl type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                  <InputGroup.Text onClick={togglePasswordVisibility}>{showPassword ? <EyeSlash /> : <Eye />}</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <div className="btn-submit text-center">
                <Button type="submit">Masuk</Button>
              </div>
              {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
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
