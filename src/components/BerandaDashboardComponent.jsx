import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Card, Dropdown, Form, Container, Row, Col, Button, Pagination, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/css/dashboardPenulis.css";
import heroDashboard from "../assets/hero-dashboard.svg";

const BerandaDashboardComponent = ({ savedBooks, setSavedBooks, showSaveButton }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("https://sarassingkat.devasa.web.id/api/books/index");
      if (!response.ok) {
        throw new Error("Gagal mengambil data buku");
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  const filteredBooks = books.filter((book) => {
    const matchesSearchTerm =
      (book.judul && book.judul.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (book.penulis && book.penulis.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (book.genre && book.genre.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (book.tahun_terbit && book.tahun_terbit.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (book.ringkasan_buku && book.ringkasan_buku.toLowerCase().includes(searchTerm.toLowerCase()));
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

  const saveBook = (book) => {
    const isBookSaved = savedBooks.some((savedBook) => savedBook.id === book.id);

    if (!isBookSaved) {
      const bookWithNumberRating = { ...book, status: "want-to-read" };
      setSavedBooks([...savedBooks, bookWithNumberRating]);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1500);
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
    <Container className="dashboard-penulis min-vh-100">
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
            {currentBooks.length > 0 && (
              <Card className="p-4">
                <Card.Img variant="top" src={currentBooks[currentBooks.length - 1].image} />
                <Card.Body className="link-newBook">
                  <Link to={`/books/${currentBooks[currentBooks.length - 1].id}`}>Baca Sekarang</Link>
                </Card.Body>
              </Card>
            )}
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
                    <Card.Img variant="top" src={book.image} />
                    <Card.Body className="book-details">
                      <div>
                        <Card.Title>{book.judul_buku}</Card.Title>
                        <Card.Text>{book.penulis}</Card.Text>
                        <Card.Text>{book.tahun_terbit}</Card.Text>
                        <Card.Text>{book.genre}</Card.Text>
                        <Card.Text>
                          {book.ringkasan_buku && book.ringkasan_buku.length > 125 ? `${book.ringkasan_buku.substring(0, 125)}...` : book.ringkasan_buku}
                          {book.ringkasan_buku && book.ringkasan_buku.length > 125 && (
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
