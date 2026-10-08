import { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext";
import BookCard from "./BookCard";

function BookList({ search }) {

  const { books } =
    useContext(LibraryContext);

  const filteredBooks =
    books.filter((book) =>
      book.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      book.author
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      book.category
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

    <div className="book-grid">

      {filteredBooks.length > 0 ? (

        filteredBooks.map((book) => (

          <BookCard
            key={book.id}
            book={book}
          />

        ))

      ) : (

        <h2>No Books Found</h2>

      )}

    </div>

  );

}

export default BookList;