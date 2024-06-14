import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Card, Dropdown, Form, Container, Row, Col, Button, Pagination, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataBook } from "../data/dataBooks";
import newBook from "../assets/img/cover/komik-onepiece.jpg";
import Swal from "sweetalert2";
import "../styles/css/dashboardPenulis.css";
import heroDashboard from "../assets/hero-dashboard.svg";

const BerandaDashboardComponent = ({ savedBooks, setSavedBooks, showSaveButton }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const filteredBooks = dataBook.filter((book) => {
    const matchesSearchTerm = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()) || book.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;
    return matchesSearchTerm && matchesGenre;
  });

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredBooks.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const saveBook = (book) => {
    const isBookSaved = savedBooks.some((savedBook) => savedBook.id === book.id);

    if (!isBookSaved) {
      const bookWithNumberRating = { ...book, rating: Number(book.rating), status: "want-to-read" };
      setSavedBooks([...savedBooks, bookWithNumberRating]);
      Swal.fire({
        icon: "success",
        title: "Buku tersimpan!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const updatedBooks = savedBooks.filter((savedBook) => savedBook.id !== book.id);
      setSavedBooks(updatedBooks);
      Swal.fire({
        icon: "warning",
        title: "Buku dihapus dari koleksi!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleReadMore = (book) => {
    const isBookSaved = savedBooks.some((savedBook) => savedBook.id === book.id);

    if (!isBookSaved) {
      Swal.fire({
        title: "Apakah kamu ingin membaca buku ini?",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          saveBook(book);
          window.location.href = `/books/${book.id}`;
        }
      });
    } else {
      window.location.href = `/books/${book.id}`;
    }
  };

  return (
    <Container className="dashboard-penulis">
      {showAlert && <Alert variant="success">Buku ini tersimpan!</Alert>}
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Form className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Lagi mau baca apa hari ini?</Form.Label>
              <Form.Control type="text" placeholder="Cari Buku" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </Form.Group>
          </Form>
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Pilih Kategori
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedGenre("")}>Semua</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedGenre("Horor")}>Horor</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedGenre("Komedi")}>Komedi</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedGenre("Business")}>Business</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedGenre("Akademik")}>Akademik</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedGenre("Romance")}>Romance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="mb-1 pb-4 card-new">
            <h4>BUKU BARU UNTUKMU </h4>
            <Card className="p-4">
              <Card.Img variant="top" src={newBook} />
              <Card.Body className="link-newBook">
                <Link to="/path-tujuan">Baca Sekarang</Link>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col xs={12} md={8} lg={9}>
          <div className="hero-section mb-1">
            <img src={heroDashboard} alt="" />
          </div>
          <div>
            <h3 className="text-center">Updates</h3>
          </div>
          <div>
            <h4 className="text-center text-primary">Rate Trend Minggu Ini</h4>
          </div>
          <section className="books pt-5">
            <div className="book-grid">
              {currentBooks.map((book) => (
                <div className="book-item" key={book.id}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src={book.coverImage} />
                    <Card.Body className="book-details">
                      <div>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>{book.author}</Card.Text>
                        <div className="book-interactions d-flex justify-content-center pb-3">
                          <div className="text-center">{book.genre}</div>
                          <span className="book-rating">
                            <FaStar color="yellow" /> {book.rating}
                          </span>
                        </div>
                        <Card.Text>
                          {book.description.length > 125 ? book.description.substring(0, 125) + "..." : book.description}
                          {book.description.length > 125 && (
                            <Button variant="link" onClick={() => handleReadMore(book)}>
                              selengkapnya
                            </Button>
                          )}
                        </Card.Text>
                      </div>
                      {showSaveButton && (
                        <Button variant={savedBooks.some((savedBook) => savedBook.id === book.id) ? "success" : "primary"} onClick={() => saveBook(book)}>
                          {savedBooks.some((savedBook) => savedBook.id === book.id) ? "Tersimpan" : "Simpan Buku"}
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </section>
          <Pagination className="justify-content-center py-2">
            <Pagination.First
              onClick={() => {
                setCurrentPage(1);
                scrollToTop();
              }}
              disabled={currentPage === 1}>
              &lt;
            </Pagination.First>
            {Array.from({ length: Math.ceil(filteredBooks.length / booksPerPage) }, (_, index) => (
              <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Last
              onClick={() => {
                setCurrentPage(Math.ceil(filteredBooks.length / booksPerPage));
                scrollToTop();
              }}
              disabled={currentPage === Math.ceil(filteredBooks.length / booksPerPage)}>
              &gt;
            </Pagination.Last>
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default BerandaDashboardComponent;
