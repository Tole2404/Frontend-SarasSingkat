import { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../styles/css/komunitas.css";

import { reviewers } from "../data/dataBooks";

const KomunitasComponent = () => {
  const [dateString, setDateString] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState(null);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const newDateString = now.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateString(newDateString);
    };

    const getNextWeekTime = () => {
      const now = new Date();
      const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
      return nextWeek.getTime() - now.getTime();
    };

    updateDate();
    const timeoutId = setTimeout(updateDate, getNextWeekTime());

    return () => clearTimeout(timeoutId);
  }, []);

  const handleShowModal = (reviewer) => {
    setSelectedReviewer(reviewer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Container className="komunitas">
        <h2>15 Reviewer Terpopuler Minggu Ini di Indonesia</h2>
        <p>minggu ini (dibuat pada {dateString})</p>
        {reviewers.map((reviewer, index) => (
          <Row key={reviewer.id} className="reviewer-row">
            <Col xs={12} md={2} className="reviewer-rank">
              {index + 1}.
            </Col>
            <Col xs={12} md={2} className="reviewer-image" onClick={() => handleShowModal(reviewer)}>
              <img src={reviewer.image} alt={reviewer.name} style={{ cursor: "pointer" }} />
            </Col>
            <Col xs={12} md={6} className="reviewer-info" onClick={() => handleShowModal(reviewer)}>
              <h4 style={{ cursor: "pointer" }}>{reviewer.name}</h4>
              <p>{reviewer.location}</p>
              <p>{reviewer.description}</p>
            </Col>
            <Col xs={12} md={2} className="reviewer-books">
              {reviewer.books} Buku
            </Col>
          </Row>
        ))}
      </Container>

      <Modal className="modal-komunitas" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reviewer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReviewer && (
            <>
              <h4 className="text-center">{selectedReviewer.name}</h4>
              <img src={selectedReviewer.image} alt={selectedReviewer.name} className="centered-image" />
              <p>Lokasi: {selectedReviewer.location}</p>
              <p>Deskripsi {selectedReviewer.description}</p>
              <p>Buku Yang Sudah Ditinjau: {selectedReviewer.books}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default KomunitasComponent;
