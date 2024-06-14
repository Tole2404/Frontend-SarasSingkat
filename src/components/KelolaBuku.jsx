import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table, Button, Form, Pagination, Modal } from "react-bootstrap";
import NavbarDashboard from "./NavbarDashboard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import FooterComponents from "./Footer";
import "../styles/css/kelolaBuku.css";

const KelolaBuku = ({ books, onDelete, onEdit, onAdd }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const [showModal, setShowModal] = useState(false);
  const [newBook, setNewBook] = useState({
    id: books.length + 1,
    title: "",
    author: "",
    year: "",
    genre: "",
    description: "",
    coverImage: "",
  });
  const [mode, setMode] = useState("add");

  useEffect(() => {
    setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, books]);

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

  const handleEdit = (book) => {
    setMode("edit");
    setNewBook(book);
    setShowModal(true);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowModal = () => {
    setMode("add");
    setNewBook({
      id: books.length + 1,
      title: "",
      author: "",
      year: "",
      genre: "",
      description: "",
      coverImage: "",
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSaveBook = () => {
    const words = newBook.description.split(" ").filter((word) => word.trim() !== "").length;
    const pages = Math.ceil(words / 300);
    const bookWithPages = { ...newBook, pages: `${pages} halaman` };

    if (mode === "add") {
      const updatedBooks = [...books, bookWithPages];
      onAdd(bookWithPages);
      setFilteredBooks(updatedBooks);
    } else if (mode === "edit") {
      const updatedBooks = books.map((b) => (b.id === bookWithPages.id ? bookWithPages : b));
      onEdit(bookWithPages);
      setFilteredBooks(updatedBooks);
    }

    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleResetForm = () => {
    setNewBook({
      id: books.length + 1,
      title: "",
      author: "",
      year: "",
      genre: "",
      description: "",
      coverImage: "",
    });
    handleCloseModal();
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavbarDashboard dashboardType="penulis" />
      <Container className="kelola-buku">
        <Row>
          <Col xs={12} md={4} lg={3} className="fixed-aside">
            <aside className="kelola-asideBar">
              <h4>Kelola</h4>
              <ul className="">
                <li>
                  <Link to="/dashboard-penulis/kelolabuku">Daftar Buku</Link>
                </li>
                <li>
                  <Link to="/dashboard-penulis/daftar-ulasan">Daftar Ulasan</Link>
                </li>
              </ul>
            </aside>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <main>
              <h3>Data Buku</h3>
              <Button variant="primary" className="mb-3" onClick={handleShowModal}>
                Tambah Buku
              </Button>
              <Form.Group>
                <Form.Control type="text" placeholder="Cari buku..." onChange={handleSearch} value={searchTerm} />
              </Form.Group>
              <section className="kelola-books">
                <Table striped bordered hover responsive>
                  <thead className="text-center">
                    <tr>
                      <th>No</th>
                      <th>Judul buku</th>
                      <th>Penulis</th>
                      <th>Tahun terbit</th>
                      <th>Halaman</th>
                      <th>Cover</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBooks.length > 0 ? (
                      currentBooks.map((book, index) => (
                        <tr className="centered-column" key={book.id}>
                          <td>{indexOfFirstBook + index + 1}</td>
                          <td>{book.title}</td>
                          <td>{book.author}</td>
                          <td>{book.year}</td>
                          <td>{book.pages}</td>
                          <td>
                            <img src={book.coverImage} alt={book.title} style={{ width: "50px" }} />
                          </td>
                          <td>
                            <Button variant="danger" size="sm" onClick={() => handleEdit(book)} className="btn-consistent-size">
                              <FaEdit />
                            </Button>
                            <Button variant="danger" size="sm" onClick={() => handleDelete(book.id)} className="btn-consistent-size">
                              <FaTrashAlt />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          Tidak ada buku yang tersedia
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </section>
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
            </main>
          </Col>
        </Row>
      </Container>
      <FooterComponents />

      <Modal show={showModal} onHide={handleCloseModal} className="py-5">
        <Modal.Header closeButton>
          <Modal.Title>{mode === "add" ? "Tambah Data Buku" : "Edit Data Buku"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Judul</Form.Label>
              <Form.Control type="text" name="title" value={newBook.title} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formAuthor">
              <Form.Label>Penulis</Form.Label>
              <Form.Control type="text" name="author" value={newBook.author} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Tahun terbit</Form.Label>
              <Form.Control type="number" name="year" value={newBook.year} onChange={handleInputChange} className="year-picker" />
            </Form.Group>
            <Form.Group controlId="formGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control as="select" name="genre" value={newBook.genre} onChange={handleInputChange}>
                <option value="">--pilih--</option>
                <option value="Horor">Horor</option>
                <option value="Komedi">Komedi</option>
                <option value="Business">Business</option>
                <option value="Akademik">Akademik</option>
                <option value="Romance">Romance</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Ringkasan Buku</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={newBook.description} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formCoverImage">
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="file" name="coverImage" onChange={(e) => setNewBook({ ...newBook, coverImage: URL.createObjectURL(e.target.files[0]) })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleResetForm}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSaveBook}>
            {mode === "add" ? "Simpan" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

KelolaBuku.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      pages: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default KelolaBuku;
