import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Image, Modal } from "react-bootstrap";
import NavbarDashboard from "../../components/NavbarDashboard";
import Komeng from "../../assets/img/testimonial/komeng.jpg";
import "../../styles/css/profile.css";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users/last");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowPasswordModal = () => setShowPasswordModal(true);
  const handleClosePasswordModal = () => setShowPasswordModal(false);

  const handleShowProfileModal = () => setShowProfileModal(true);
  const handleCloseProfileModal = () => setShowProfileModal(false);

  return (
    <div className="min-vh-100">
      <NavbarDashboard />
      <Container className="profile">
        <Row className="isi-profil">
          <Col md={4} className="poto-profil d-flex flex-column align-items-center">
            <Image src={Komeng} roundedCircle fluid />
            <Button variant="primary" className="mt-3" onClick={handleShowProfileModal}>
              Ubah Poto Profil
            </Button>
          </Col>
          <Col md={8} className="form-column">
            <h2 className="pb-3">Profil Saya</h2>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formName">
                <Form.Label column sm={3} className="form-label">
                  Nama
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="text" placeholder="Nama" className="form-control" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formEmail">
                <Form.Label column sm={3} className="form-label">
                  Email
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="email" placeholder="Email" disabled className="form-control" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formRole">
                <Form.Label column sm={3} className="form-label">
                  Role
                </Form.Label>
                <Col sm={3}>
                  <Form.Select className="form-control">
                    <option value="penulis">Penulis</option>
                    <option value="pembaca">Pembaca</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <div className="py-3">
                <Button variant="success" onClick={handleShowPasswordModal} className="button me-2">
                  Ganti Password
                </Button>
                <Button variant="primary" className="button">
                  Update
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={showPasswordModal} onHide={handleClosePasswordModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ganti Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Password Lama</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password lama" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password Baru</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password baru" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Konfirmasi Password</Form.Label>
              <Form.Control type="password" placeholder="Konfirmasi password baru" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePasswordModal}>
            Batal
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showProfileModal} onHide={handleCloseProfileModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Poto Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Upload Foto Baru</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfileModal}>
            Batal
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
