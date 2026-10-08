function SearchBar({
  search,
  setSearch,
}) {

  return (

    <div className="search-box">

      <input
        type="text"
        placeholder="Search by Title, Author or Category"

        value={search}

        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

    </div>

  );

}

export default SearchBar;