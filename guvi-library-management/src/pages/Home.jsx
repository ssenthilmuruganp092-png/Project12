import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

function Home() {

  const [search, setSearch] = useState("");

  return (
    <div className="container">

      <h1>📚 GUVI Library Management System</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <BookList search={search} />

    </div>
  );
}

export default Home;