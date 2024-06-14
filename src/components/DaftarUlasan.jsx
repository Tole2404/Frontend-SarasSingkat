import React, { useState } from "react";
import { Container, Row, Col, Pagination, Card } from "react-bootstrap";
import NavbarDashboard from "./NavbarDashboard";
import FooterComponents from "./Footer";
import Rating from "react-rating-stars-component";

import { daftarUlasan } from "../data/dataBooks";

import "../styles/css/Daftarulasan.css";

const DaftarUlasan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ulasanPerPage = 6;
  const indexOfLastUlasan = currentPage * ulasanPerPage;
  const indexOfFirstUlasan = indexOfLastUlasan - ulasanPerPage;
  const currentUlasan = daftarUlasan.slice(indexOfFirstUlasan, indexOfLastUlasan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavbarDashboard />
      <div className="daftar-ulasan">
        <Container>
          <div className="header-Daftar_ulasan pb-4">
            <h4 className="text-center">Daftar Ulasan</h4>
          </div>
          <Row className="pb-3">
            {currentUlasan.map((ulasan) => (
              <Col key={ulasan.id} sm={6} md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Ulasan {ulasan.id}</Card.Title>
                    <Card.Text>{ulasan.content}</Card.Text>
                    <Rating count={5} size={24} activeColor="#ffd700" value={ulasan.rating} isHalf={true} edit={false} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination className="justify-content-center">
            {Array.from({ length: Math.ceil(daftarUlasan.length / ulasanPerPage) }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Container>
      </div>
      <FooterComponents />
    </div>
  );
};

export default DaftarUlasan;
