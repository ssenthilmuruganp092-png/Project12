import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

function Search() {

  const [search, setSearch] = useState("");

  return (

    <div className="container">

      <h1>Search Books</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <BookList search={search} />

    </div>

  );

}

export default Search;