import React, { useState } from "react";


const BookEdit = ({ book, onEdit, onCancel }) => {
    const [title, setTitle] = useState(book.title);
    const [des, setDes] = useState(book.des);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onEdit(book.id, {
            title: title,
            des: des,
        });
    };

 

    return (
        <div className="edit">
            <h3>Edit Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input onChange={handleChangeTitle} type="text" id="title" name="title" value={title} />
                <label htmlFor="des">Description:</label>
                <input onChange={handleChangeDes} type="text" id="des" name="des" value={des} />
                <button >Cancel</button>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
};

export default BookEdit;
