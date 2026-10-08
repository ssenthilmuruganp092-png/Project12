import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Search from "./pages/Search";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/add" element={<AddBook />} />

        <Route path="/edit/:id" element={<EditBook />} />

        <Route path="/book/:id" element={<BookDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;