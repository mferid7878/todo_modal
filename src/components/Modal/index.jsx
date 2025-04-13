import "./modale.css";
function Modal({ data, id, deleteCallback, modalCallback }) {
  return (
    <div className="modal">
      <div className="modal_content">
        <p>
          Task:
          {data}
        </p>
        <button
          className="delete-button"
          onClick={() => {
            deleteCallback(id);
            modalCallback();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Modal;
