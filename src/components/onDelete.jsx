import { useState } from "react";
import Koleksiku from "./Koleksiku";

const ParentComponent = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  const handleDeleteBook = (bookId) => {
    setSavedBooks(savedBooks.filter((book) => book.id !== bookId));
  };

  return <Koleksiku savedBooks={savedBooks} onDelete={handleDeleteBook} />;
};

export default ParentComponent;
