import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table, Button, Pagination, Form, Modal } from "react-bootstrap";
import NavbarDashboard from "./NavbarDashboard";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/css/koleksiku.css";
import { FaTrashAlt } from "react-icons/fa";
import FooterComponents from "./Footer";

const Koleksiku = ({ savedBooks, onDelete, onUpdateStatus }) => {
  const location = useLocation();
  const [filteredBooks, setFilteredBooks] = useState(savedBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [currentReviewBook, setCurrentReviewBook] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const status = query.get("status");
    if (status) {
      setFilteredBooks(savedBooks.filter((book) => book.status === status));
    } else {
      setFilteredBooks(savedBooks);
    }
  }, [location.search, savedBooks]);

  const handleDelete = (bookId) => {
    Swal.fire({
      title: "Apakah Anda yakin ingin menghapus buku ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(bookId);
        Swal.fire("Buku dihapus!", "", "success");
      }
    });
  };

  const handleStatusClick = (bookId, currentStatus) => {
    if (currentStatus === "want-to-read") {
      Swal.fire({
        title: "Apakah kamu sudah membaca keseluruhan buku ini?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Belum",
      }).then((result) => {
        if (result.isConfirmed) {
          onUpdateStatus(bookId, "read");
          Swal.fire("Status diperbarui!", "Buku ini sekarang ditandai sebagai 'read'.", "success");
        }
      });
    } else if (currentStatus === "read") {
      Swal.fire({
        title: "Apakah kamu ingin membaca buku ini lagi?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          onUpdateStatus(bookId, "want-to-read");
          Swal.fire("Status diperbarui!", "Buku ini sekarang ditandai sebagai 'want-to-read'.", "success");
        }
      });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const filteredResults = savedBooks.filter((book) => book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm));
    setFilteredBooks(filteredResults);
  };
  const handleReviewClick = (book) => {
    setCurrentReviewBook(book);
    setShowReviewModal(true);
  };

  const handleReviewSubmit = () => {
    setShowReviewModal(false);
    setRating(0);
    setReviewText("");
  };

  const handleRatingHover = (index) => {
    setHoverRating(index);
  };

  const handleRatingClick = (index) => {
    setRating(index);
  };

  const handleCloseModal = () => {
    setShowReviewModal(false);
    setRating(0);
    setReviewText("");
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavbarDashboard />
      <Container className="koleksiku min-vh-100">
        <Row>
          <Col xs={12} md={4} lg={3} className="fixed-aside">
            <aside className="aside-section mt-5">
              <h4 className="text-center">Rak Buku</h4>
              <Form.Group>
                <Form.Control type="text" placeholder="Cari buku..." onChange={handleSearch} value={searchTerm} />
              </Form.Group>
              <ul className="py-3">
                <li>
                  <Link to="/dashboard-pembaca/koleksiku">All ({savedBooks.length})</Link>
                </li>
                <li>
                  <Link to="/dashboard-pembaca/koleksiku?status=read">Read ({savedBooks.filter((book) => book.status === "read").length})</Link>
                </li>
                <li>
                  <Link to="/dashboard-pembaca/koleksiku?status=want-to-read">Want to Read ({savedBooks.filter((book) => book.status === "want-to-read").length})</Link>
                </li>
              </ul>
            </aside>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <main>
              <h3>Koleksiku</h3>
              <section className="koleksi-books">
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Cover</th>
                      <th>Judul</th>
                      <th>Penulis</th>
                      <th>Rating</th>
                      <th>Status</th>
                      <th>Ulasan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBooks.length > 0 ? (
                      currentBooks.map((book) => (
                        <tr key={book.id}>
                          <td>
                            <Link to={`/books/${book.id}`}>
                              <img src={book.coverImage} alt={book.title} style={{ width: "50px", cursor: "pointer" }} />
                            </Link>
                          </td>
                          <td>
                            <Link to={`/books/${book.id}`}>{book.title}</Link>
                          </td>
                          <td>{book.author}</td>
                          <td className="text-center ">{book.rating}</td>
                          <td>
                            <button className={`status-button ${book.status} text-center align-middle`} onClick={() => handleStatusClick(book.id, book.status)}>
                              {book.status}
                            </button>
                          </td>
                          <td>
                            <Button className="text-center align-middle" variant="link" onClick={() => handleReviewClick(book)}>
                              tinggalkan ulasan
                            </Button>
                          </td>
                          <td>
                            <Button variant="danger" className="text-center align-middle" onClick={() => handleDelete(book.id)}>
                              <FaTrashAlt />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          Tidak ada buku yang ditampilkan, silahkan tambah buku!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <Pagination className="justify-content-center py-2">
                  <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                    &lt;
                  </Pagination.First>
                  {Array.from({ length: Math.ceil(filteredBooks.length / booksPerPage) }, (_, index) => (
                    <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Last onClick={() => setCurrentPage(Math.ceil(filteredBooks.length / booksPerPage))} disabled={currentPage === Math.ceil(filteredBooks.length / booksPerPage)}>
                    &gt;
                  </Pagination.Last>
                </Pagination>
              </section>
            </main>
          </Col>
        </Row>
      </Container>

      <Modal show={showReviewModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ulasan Buku</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="review-modal">
            <div className="review-profile">
              <div className="profile-icon">N</div>
              <div className="profile-name">People</div>
            </div>
            <div className="review-rating ">
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={index}
                  className={`star ${index <= (hoverRating || rating) ? "filled" : ""} text-center`}
                  onClick={() => handleRatingClick(index)}
                  onMouseEnter={() => handleRatingHover(index)}
                  onMouseLeave={() => handleRatingHover(0)}>
                  ★
                </span>
              ))}
            </div>
            <Form.Group controlId="reviewText">
              <Form.Label>Tuliskan ulasan anda disini</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Bagikan pengalaman membaca anda!" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleReviewSubmit}>
            Posting
          </Button>
        </Modal.Footer>
      </Modal>
      <FooterComponents />
    </div>
  );
};

Koleksiku.propTypes = {
  savedBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
};

export default Koleksiku;
