import BookCreate from "./compoments/BookCreate";
import axios from "axios";
import { FetchBooks, CreateBook, UpdateBook, DeleteBook } from "./api";
import BookList from "./compoments/BookList";
import { useState, useEffect } from "react";
import app from "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);


  const FetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books ");
    setBooks(response.data);
  };
  const CreateBooks = async (term) => {
    const resp = await axios.post("http://localhost:3001/books ", term); //term:gia tri
    if (resp.data) {
      setBooks([...books, resp.data]);
    }
  };
  const DeleteBooks = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    // Assuming setBooks is a function to update the books state
    setBooks(books.filter((book) => book.id !== id));
  };
  
const updateBook = async (id, updatedBook) => {
   
  try {
    // Send a request to update the book
    await UpdateBook(id, updatedBook);
    // Update the state with the updated book data
    setBooks(books.map(book => book.id === id ? updatedBook : book));
  } catch (error) {
    console.log(error);
    return FetchBooks();
    
  }
    
    
};

  useEffect(() => {
    FetchBooks();
  }, []);
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <h1>Reading Books</h1>
        <div>
          <BookList books={books} onDelete={DeleteBooks} onEdit={updateBook} />
        </div>
      </div>
      <BookCreate onCreate={CreateBooks} />
    </div>
  );
};

export default App;
