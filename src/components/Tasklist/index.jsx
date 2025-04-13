import { useState } from "react";
import Modal from "../Modal";
import "./Tasklist.css";
function Tasklist({ data, callback }) {
  const [view, setWiew] = useState(false);

  function handleModal() {
    if (view) {
      setWiew((prev) => !prev);
    } else {
      setWiew((prev) => !prev);
    }
  }

  let renderUi = () => {
    if (data.length > 0) {
      return data.map((task, index) => (
        <div key={index} className="task_item">
          <span>{task}</span>
          <div className="buttons">
            <button
              className="delete_button"
              onClick={() => {
                callback(index);
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button className="modal_button" onClick={handleModal}>
              <i className="fa-solid fa-eye"></i>
            </button>
          </div>
          {view !== false && (
            <Modal
              data={task}
              id={index}
              deleteCallback={callback}
              modalCallback={handleModal}
            />
          )}
        </div>
      ));
    }
  };

  return <div id="taskList">{renderUi()}</div>;
}

export default Tasklist;
