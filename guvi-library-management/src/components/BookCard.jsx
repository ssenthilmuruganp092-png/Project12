import { Link } from "react-router-dom";
import { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext";

function BookCard({ book }) {

  const { dispatch } = useContext(LibraryContext);

  const deleteBook = () => {

    dispatch({
      type: "DELETE_BOOK",
      payload: book.id,
    });

  };

  return (

    <div className="book-card">

      <img
        src={book.image}
        alt={book.title}
      />

      <h3>{book.title}</h3>

      <p>
        <b>Author :</b> {book.author}
      </p>

      <p>
        <b>Category :</b> {book.category}
      </p>

      <div className="card-buttons">

        <Link to={`/book/${book.id}`}>
          <button>View</button>
        </Link>

        <Link to={`/edit/${book.id}`}>
          <button>Edit</button>
        </Link>

        <button
          onClick={deleteBook}
        >
          Delete
        </button>

      </div>

    </div>

  );

}

export default BookCard;