import { useContext, useState } from "react";
import { LibraryContext } from "../context/LibraryContext";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {

  const { books, dispatch } =
    useContext(LibraryContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const currentBook =
    books.find(
      (book) => book.id === Number(id)
    );

  const [book, setBook] =
    useState(currentBook);

  const handleChange = (e) => {

    setBook({
      ...book,
      [e.target.name]:
        e.target.value,
    });

  };

  const updateBook = (e) => {

    e.preventDefault();

    dispatch({
      type: "UPDATE_BOOK",
      payload: book,
    });

    alert("Book Updated");

    navigate("/");

  };

  return (

    <div className="form-container">

      <h2>Edit Book</h2>

      <form onSubmit={updateBook}>

        <input
          name="title"
          value={book.title}
          onChange={handleChange}
        />

        <input
          name="author"
          value={book.author}
          onChange={handleChange}
        />

        <input
          name="category"
          value={book.category}
          onChange={handleChange}
        />

        <input
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
        />

        <input
          name="publisher"
          value={book.publisher}
          onChange={handleChange}
        />

        <input
          name="year"
          value={book.year}
          onChange={handleChange}
        />

        <input
          name="image"
          value={book.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
        />

        <button>
          Update Book
        </button>

      </form>

    </div>

  );

}

export default EditBook;