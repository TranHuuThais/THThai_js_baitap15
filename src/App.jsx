import BookCreate from "./compoments/BookCreate";
import  BookList from "./compoments/BookList";
import { useState, useEffect } from "react";
import BookSearch from "./compoments/BookSearch";

import "./App.css";
import { CreateBook, DeleteBook, FetchBooks, UpdateBook } from "./api";

const App = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleDelete = async (id) => {
      const book = await DeleteBook(id);
      setBooks(books.filter((item) => item.id !== book.id));
    };
  
    const handleCreate = async (term) => {
      const book = await CreateBook(term);
      if (book) setBooks([...books, book]);
    };
  
    const handleUpdate = async (id, term) => {
      const book = await UpdateBook(id, term);
      setBooks(books.map((item) => (item.id === book.id ? book : item)));
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const fetchedBooks = await FetchBooks();
        setBooks(fetchedBooks);
      };
      fetchData();
    }, []);
  
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="wrapper">
        <div className="container-app">
          <h1 className="text">READING BOOK</h1>
          <BookSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="window">
            <BookList books={filteredBooks} onDelete={handleDelete} onEdit={handleUpdate} />
          </div>
        </div>
        <BookCreate onCreate={handleCreate} />
      </div>
    );
};

export default App;