import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LibraryContext } from "../context/LibraryContext";

function BookDetails() {

  const { books } =
    useContext(LibraryContext);

  const { id } =
    useParams();

  const book =
    books.find(
      (item) =>
        item.id === Number(id)
    );

  if (!book) {

    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Book Not Found
      </h2>
    );

  }

  return (

    <div className="details-container">

      <img
        src={book.image}
        alt={book.title}
      />

      <div className="details">

        <h1>{book.title}</h1>

        <p>
          <b>Author :</b>
          {book.author}
        </p>

        <p>
          <b>Category :</b>
          {book.category}
        </p>

        <p>
          <b>ISBN :</b>
          {book.isbn}
        </p>

        <p>
          <b>Publisher :</b>
          {book.publisher}
        </p>

        <p>
          <b>Published :</b>
          {book.year}
        </p>

        <p>
          <b>Description :</b>
          {book.description}
        </p>

        <Link to="/">
          <button>
            Back
          </button>
        </Link>

      </div>

    </div>

  );

}

export default BookDetails;