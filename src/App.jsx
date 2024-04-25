import BookCreate from "./compoments/BookCreate";
import  BookList from "./compoments/BookList";
import { useState, useEffect, useContext } from "react";
import BookSearch from "./compoments/BookSearch";
import Pagination from "./compoments/pagination";
import {BookContext} from "./context/book"

import "./App.css";


const App = () => {
    const { books, onCreate, onEdit, onDelete } = useContext(BookContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5); 
    useEffect(() => {
      
    }, []);
  
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Pagination
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="wrapper">
        <div className="container-app">
          <h1 className="text">READING BOOK</h1>
          <BookSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="window">
            <BookList
              books={filteredBooks.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </div>
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
        <BookCreate onCreate={onCreate} />
      </div>
    );
};
export default App;