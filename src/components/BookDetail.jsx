import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavbarDashboard from "./NavbarDashboard";

import "../styles/css/BookDetail.css";

const BookDetail = ({ savedBooks }) => {
  const { bookId } = useParams();
  const book = savedBooks.find((b) => b.id === parseInt(bookId));
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!book) {
    return <div>Book not found</div>;
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = Array.isArray(book.description) ? book.description.join(" ") : book.description;

  const countParagraphs = (description) => {
    return description.split(/\r\n|\r|\n/).length;
  };

  const calculatePageCount = (description) => {
    const paragraphs = countParagraphs(description);
    return Math.ceil(paragraphs / 3);
  };

  const pageCount = calculatePageCount(description);

  const descriptionToShow = countParagraphs(description) >= 3 ? description.replace(/\r\n|\r|\n/g, " ") : description;

  return (
    <>
      <NavbarDashboard />
      <Container className="bookDetail">
        <Row>
          <Col>
            <Card className="d-flex justify-content-center align-items-center">
              <Row className="g-0 d-flex">
                <Col md={4}>
                  <Card.Img variant="top" src={book.coverImage} className="img-fluid rounded-start" />
                </Col>
                <Col md={8} className="pt-5">
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Penulis: {book.author}</Card.Text>
                    <Card.Text>Tahun Terbit: {book.publicationYear}</Card.Text>
                    <Card.Text>ID Buku: A-00{book.id}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Card.Body>
                <Card.Text>
                  {showFullDescription ? descriptionToShow : `${descriptionToShow.substring(0, 500)}...`}
                  <Button variant="link" onClick={toggleDescription}>
                    {showFullDescription ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
                  </Button>
                </Card.Text>
                <Card.Text>Jumlah Halaman: {pageCount}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookDetail;
