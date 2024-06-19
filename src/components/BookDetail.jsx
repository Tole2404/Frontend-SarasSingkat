import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import NavbarDashboard from "./NavbarDashboard";
import axios from "axios";

import "../styles/css/BookDetail.css";

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null); // State to store the book details
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://sarassingkat.devasa.web.id/api/books/view/${bookId}`);
        if (response.data.status === "SUCCESS") {
          setBook(response.data.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  });

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Function to count paragraphs in the book description
  const countParagraphs = (description) => {
    if (!description) return 0; // Handle case where description is undefined or null
    return description.split(/\r\n|\r|\n/).length;
  };

  // Render loading state while book details are being fetched
  if (!book) {
    return <div>Loading...</div>;
  }

  // Extract description from the fetched book data
  const { ringkasan_buku: description } = book;

  // Determine which part of the description to show based on paragraph count
  const descriptionToShow = countParagraphs(description) >= 3 ? description.replace(/\r\n|\r|\n/g, " ") : description;

  // JSX rendering with the fetched book details
  return (
    <>
      <NavbarDashboard />
      <Container className="bookDetail">
        <Row>
          <Col>
            <Card className="d-flex justify-content-center align-items-center">
              <Row className="g-0 d-flex">
                <Col md={4}>
                  <Card.Img variant="top" src={book.image} className="img-fluid rounded-start" />
                </Col>
                <Col md={8} className="pt-5">
                  <Card.Body>
                    <Card.Title>{book.judul_buku}</Card.Title>
                    <Card.Text>Penulis: {book.penulis}</Card.Text>
                    <Card.Text>Tahun Terbit: {book.tahun_terbit}</Card.Text>
                    <Card.Text>ID Buku: A-00{book.id}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Card.Body>
                <Card.Text>
                  {showFullDescription
                    ? descriptionToShow || "" // Handle undefined case with empty string
                    : `${(descriptionToShow || "").substring(0, 500)}...`}{" "}
                  {/* Handle undefined case with empty string */}
                  <Button variant="link" onClick={toggleDescription}>
                    {showFullDescription ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookDetail;
