function Modal({ data, id }) {
  console.log(tasks);

  return (
    <div className="modal" id="modal">
      <div className="modal_content">
        <p>
          Task:
          {data}
        </p>
        <button
          className="delete_button"
          // onClick={() => handleDeleteTask()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Modal;
