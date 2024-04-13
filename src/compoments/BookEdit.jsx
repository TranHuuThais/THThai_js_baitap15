import { useState } from "react";
import axios from "axios";

const BookEdit = ({ book, onEdit }) => {
    const [title, setTitle] = useState(book.title);
    const [des, setDes] = useState(book.des);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/books/${book.id}`, {
                title,
                des,
            });
            // Assuming onEdit is a function to update the book
            onEdit(book.id, response.data);
        } catch (error) {
            console.error('Error:', error);
            // Handle error - display to user or log
        }
    };

    const handleCancel = () => {
        // Implement cancel functionality here
    };

    return (
        <div className="container">
             <h3>Add a Edit</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> </label>
                <input  onChange={handleChangeTitle} type="text" id="title" name="title" value={title} />
                <label htmlFor="des"> </label>
                <input onChange={handleChangeDes} type="text" id="des" name="des" value={des} />
                <button onClick={handleCancel}>Cancel</button>
                <input  type="submit" value="Edit" />
            </form>
        </div>
    );
};

export default BookEdit;
