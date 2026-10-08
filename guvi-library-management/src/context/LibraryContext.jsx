import {
  createContext,
  useReducer,
  useEffect
} from "react";

import LibraryReducer from "./LibraryReducer";
import initialData from "./initialData";

export const LibraryContext =
  createContext();

export const LibraryProvider = ({
  children,
}) => {

  const [books, dispatch] = useReducer(
    LibraryReducer,
    []
  );

  useEffect(() => {

    const stored =
      JSON.parse(
        localStorage.getItem("books")
      );

    if (stored) {
      dispatch({
        type: "LOAD_BOOKS",
        payload: stored,
      });
    } else {
      dispatch({
        type: "LOAD_BOOKS",
        payload: initialData,
      });
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "books",
      JSON.stringify(books)
    );

  }, [books]);

  return (
    <LibraryContext.Provider
      value={{
        books,
        dispatch,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};