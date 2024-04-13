import BookCreate from "./compoments/BookCreate";
import  BookList from "./compoments/BookList";
import { useState, useEffect } from "react";
import axios from "axios";
import app from "./App.css";
import { CreateBook, DeleteBook, FetchBooks, UpdateBook } from "./api";
const App = () => {
  const [books, setBooks] = useState([]);
  const handleDelete = async (id) => {
      const book = await DeleteBook(id);
      console.log(book);
      setBooks(books.filter((item) => item.id !== book.id));
  }

  const handleCreate = async(term) => {
      const book = await CreateBook(term);
      if (book) setBooks([...books, book]);
  };

  const handleUpdate = async (id, term) => {
      console.log({ id, term });
      const book = await UpdateBook(id, term);
      setBooks(
          books.map((item) => item.id === book.id? book: item)
      );
  };
  
  useEffect(async () => {
      const tams = await FetchBooks();
      setBooks(tams);
  }, []);
  
    return (
        <div className="wrapper">
            <div className="container-app">
                <h1 className="text">READING BOOK</h1>
                <div className="window">
                    <BookList books={books} onDelete={handleDelete} onEdit={handleUpdate} />
                </div>
            </div>
            <BookCreate onCreate={handleCreate} />
        </div>
    );
};

export default App;