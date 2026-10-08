import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";

function AddBook() {
  const { books, dispatch } = useContext(LibraryContext);
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    isbn: "",
    publisher: "",
    year: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !book.title ||
      !book.author ||
      !book.category ||
      !book.isbn
    ) {
      alert("Please fill all required fields.");
      return;
    }

    dispatch({
      type: "ADD_BOOK",
      payload: {
        id: Date.now(),
        ...book,
      },
    });

    alert("Book Added Successfully!");

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
        />

        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={book.isbn}
          onChange={handleChange}
        />

        <input
          type="text"
          name="publisher"
          placeholder="Publisher"
          value={book.publisher}
          onChange={handleChange}
        />

        <input
          type="number"
          name="year"
          placeholder="Published Year"
          value={book.year}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={book.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={book.description}
          onChange={handleChange}
        />

        <button type="submit">
          Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBook;