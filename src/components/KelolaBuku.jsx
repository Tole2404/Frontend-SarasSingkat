import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table, Button, Form, Pagination, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import axios from "axios";
import NavbarDashboard from "./NavbarDashboard";
import FooterDasboard from "./FooterDasboard";
import "../styles/css/kelolaBuku.css";

const KelolaBuku = ({ onAdd }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const [showModal, setShowModal] = useState(false);
  const [newBook, setNewBook] = useState({
    judul_buku: "",
    penulis: "",
    tahun_terbit: "",
    genre: "",
    ringkasan_buku: "",
    coverImage: null,
  });
  const [mode, setMode] = useState("add");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://sarassingkat.devasa.web.id/api/books/index");
        console.log("Data fetched from API:", response.data);

        if (Array.isArray(response.data)) {
          setBooks(response.data);
          setFilteredBooks(response.data);
        } else {
          console.error("Data fetched is not an array:", response.data);
          Swal.fire("Error!", "Terjadi kesalahan saat mengambil data buku.", "error");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        Swal.fire("Error!", "Terjadi kesalahan saat mengambil data buku.", "error");
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books.filter((book) => book.judul_buku.toLowerCase().includes(searchTerm.toLowerCase()) || book.penulis.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, books]);

  const handleDelete = async (bookId) => {
    try {
      const result = await Swal.fire({
        title: "Apakah Anda yakin ingin menghapus buku ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(`http://sarassingkat.devasa.web.id/api/books/delete/${bookId}`);
        if (response.data.status === "SUCCESS") {
          setBooks(books.filter((book) => book.id !== bookId));
          setFilteredBooks(filteredBooks.filter((book) => book.id !== bookId));
          Swal.fire("Buku dihapus!", "", "success");
        } else {
          Swal.fire("Gagal menghapus buku", response.data.message, "error");
        }
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      Swal.fire("Error!", "Terjadi kesalahan saat menghapus buku.", "error");
    }
  };

  const handleEdit = (book) => {
    setMode("edit");
    setNewBook(book);
    setShowModal(true);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowModal = (event) => {
    event.preventDefault();
    setMode("add");
    setNewBook({
      judul_buku: "",
      penulis: "",
      tahun_terbit: "",
      genre: "",
      ringkasan_buku: "",
      coverImage: null,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSaveBook = async () => {
    try {
      const formData = new FormData();
      formData.append("judul_buku", newBook.judul_buku);
      formData.append("penulis", newBook.penulis);
      formData.append("tahun_terbit", newBook.tahun_terbit);
      formData.append("genre", newBook.genre);
      formData.append("ringkasan_buku", newBook.ringkasan_buku);
      formData.append("image", newBook.coverImage);

      let response;

      if (mode === "add") {
        response = await axios.post("http://sarassingkat.devasa.web.id/api/books/tambah-buku", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.status === "SUCCESS") {
          onAdd(response.data.book);
          setBooks([...books, response.data.book]);
          Swal.fire("Buku ditambahkan!", "", "success").then(() => {
            window.location.reload(); // Reload halaman setelah OK ditekan
          });
        } else {
          Swal.fire("Gagal menambahkan buku", response.data.message, "error");
        }
      } else if (mode === "edit") {
        response = await axios.put(`http://sarassingkat.devasa.web.id/api/books/update/${newBook.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.status === "SUCCESS") {
          setBooks(books.map((book) => (book.id === newBook.id ? response.data.book : book)));
          setFilteredBooks(filteredBooks.map((book) => (book.id === newBook.id ? response.data.book : book)));
          Swal.fire("Buku diperbarui!", "", "success").then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire("Gagal memperbarui buku", response.data.message, "error");
        }
      }

      handleCloseModal();
    } catch (error) {
      console.error("Error saving book:", error);
      Swal.fire("Error!", "Terjadi kesalahan saat menyimpan buku.", "error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewBook({
      ...newBook,
      coverImage: e.target.files[0],
    });
  };

  const handleResetForm = () => {
    setNewBook({
      judul_buku: "",
      penulis: "",
      tahun_terbit: "",
      genre: "",
      ringkasan_buku: "",
      coverImage: null,
    });
    handleCloseModal();
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = Array.isArray(filteredBooks) ? filteredBooks.slice(indexOfFirstBook, indexOfLastBook) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavbarDashboard dashboardType="penulis" />
      <Container className="kelola-buku min-vh-100">
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
                      <th>Cover</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {currentBooks.length > 0 ? (
                      currentBooks.map((book, index) => (
                        <tr key={index}>
                          <td>{index + 1 + (currentPage - 1) * booksPerPage}</td>
                          <td>{book.judul_buku}</td>
                          <td>{book.penulis}</td>
                          <td>{book.tahun_terbit}</td>
                          <td>
                            <img src={book.image} alt="Cover" width="50" />
                          </td>
                          <td>
                            <Button variant="danger" onClick={() => handleDelete(book.id)}>
                              <FaTrashAlt />
                            </Button>
                            <Button variant="warning" className="ml-2" onClick={() => handleEdit(book)}>
                              <FaEdit />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          Tidak ada data buku.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <Pagination className="mt-3">
                  {[...Array(Math.ceil(filteredBooks.length / booksPerPage)).keys()].map((index) => (
                    <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </section>
            </main>
          </Col>
        </Row>
      </Container>
      <FooterDasboard />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{mode === "add" ? "Tambah Buku" : "Edit Buku"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Judul Buku</Form.Label>
              <Form.Control type="text" name="judul_buku" value={newBook.judul_buku} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formAuthor">
              <Form.Label>Penulis</Form.Label>
              <Form.Control type="text" name="penulis" value={newBook.penulis} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Tahun terbit</Form.Label>
              <Form.Control type="number" name="tahun_terbit" value={newBook.tahun_terbit} onChange={handleInputChange} className="year-picker" />
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
              <Form.Control as="textarea" rows={3} name="ringkasan_buku" value={newBook.ringkasan_buku} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formCoverImage">
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="file" name="coverImage" onChange={handleFileChange} />
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
  onAdd: PropTypes.func.isRequired,
};

export default KelolaBuku;
