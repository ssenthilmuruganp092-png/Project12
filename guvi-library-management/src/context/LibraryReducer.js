const LibraryReducer = (state, action) => {
  switch (action.type) {

    case "LOAD_BOOKS":
      return action.payload;

    case "ADD_BOOK":
      return [...state, action.payload];

    case "DELETE_BOOK":
      return state.filter(
        (book) => book.id !== action.payload
      );

    case "UPDATE_BOOK":
      return state.map((book) =>
        book.id === action.payload.id
          ? action.payload
          : book
      );

    default:
      return state;
  }
};

export default LibraryReducer;