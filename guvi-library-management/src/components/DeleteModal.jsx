function DeleteModal({

  open,

  onClose,

  onDelete,

}) {

  if (!open)
    return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>
          Delete Book
        </h2>

        <p>
          Are you sure you want
          to delete this book?
        </p>

        <div className="modal-buttons">

          <button
            onClick={onDelete}
          >
            Yes
          </button>

          <button
            onClick={onClose}
          >
            No
          </button>

        </div>

      </div>

    </div>

  );

}

export default DeleteModal;