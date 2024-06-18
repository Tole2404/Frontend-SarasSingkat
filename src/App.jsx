import { Routes, Route, Navigate } from "react-router-dom";
import Beranda from "./pages/LandingPages/Beranda";
import Penulis from "./pages/LandingPages/penulis";
import Tentang from "./pages/LandingPages/Tentang";

import { useState, useEffect } from "react";

import Login from "./pages/LoginPages/Login";
import Signup from "./pages/LoginPages/Signup";
import DashboardPembaca from "./pages/dashboardPages/dashboardPembaca";
import DashboardPenulis from "./pages/dashboardPages/dashboardPenulis";
import Koleksiku from "./components/Koleksiku";
import BookDetail from "./components/BookDetail";
import Komunitas from "./components/komunitas";
import KomunitasPenulis from "./components/KomunitasPenulis";
import KelolaBuku from "./components/KelolaBuku";
import Profile from "./pages/ProfilePages/Profile";
import DaftarUlasan from "./components/DaftarUlasan";

const App = () => {
  const [savedBooks, setSavedBooks] = useState(() => {
    const saved = localStorage.getItem("savedBooks");
    return saved ? JSON.parse(saved) : [];
  });

  const [managedBooks, setManagedBooks] = useState(() => {
    const savedBooks = localStorage.getItem("managedBooks");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
    localStorage.setItem("managedBooks", JSON.stringify(managedBooks));
  }, [savedBooks, managedBooks]);

  const handleDeleteBook = (bookId) => {
    const newSavedBooks = savedBooks.filter((book) => book.id !== bookId);
    setSavedBooks(newSavedBooks);
  };

  const handleDeleteManagedBook = (bookId) => {
    const updatedBooks = managedBooks.filter((book) => book.id !== bookId);
    setManagedBooks(updatedBooks);
  };

  const handleUpdateBookStatus = (bookId, status) => {
    const updatedBooks = savedBooks.map((book) => (book.id === bookId ? { ...book, status } : book));
    setSavedBooks(updatedBooks);
  };

  const handleEditBook = (book) => {
    const updatedBooks = managedBooks.map((b) => (b.id === book.id ? book : b));
    setManagedBooks(updatedBooks);
  };

  const handleAddBook = (newBook) => {
    const updatedBooks = [...managedBooks, newBook];
    setManagedBooks(updatedBooks);
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/penulis" element={<Penulis />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard-pembaca/" element={<DashboardPembaca savedBooks={savedBooks} setSavedBooks={setSavedBooks} />} />
        <Route path="/dashboard-pembaca/koleksiku" element={<Koleksiku savedBooks={savedBooks} onDelete={handleDeleteBook} onUpdateStatus={handleUpdateBookStatus} />} />
        <Route path="/books/:bookId" element={<BookDetail savedBooks={savedBooks} />} />
        <Route path="/dashboard-pembaca/komunitas" element={<Komunitas />} />
        <Route path="/dashboard-pembaca/profil" element={<Profile />} />
        <Route path="/dashboard-penulis/" element={<DashboardPenulis />} />
        <Route path="/dashboard-penulis/komunitas" element={<KomunitasPenulis />} />
        <Route path="/dashboard-penulis/profil" element={<Profile />} />
        <Route path="/dashboard-penulis/kelolabuku" element={<KelolaBuku books={managedBooks} onDelete={handleDeleteManagedBook} onEdit={handleEditBook} onAdd={handleAddBook} />} /> <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard-penulis/daftar-ulasan" element={<DaftarUlasan />} /> {/* Route baru */}
      </Routes>
    </div>
  );
};

export default App;
