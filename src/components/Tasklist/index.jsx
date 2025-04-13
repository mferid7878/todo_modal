import Modal from "../Modal";
import "./Tasklist.css";
function taskList({ tasks }) {
  const handeDeleteTask = (e) => {
    e.preventDefault();
    const taskItem = e.target.closest(".task_item");
    if (taskItem) {
      taskItem.remove();
    }
  };
  function handleModal({ tasks }) {
    console.log("s");

    <Modal data={tasks} id={index} />;
  }

  return (
    <div id="taskList">
      {tasks.map((task, index) => (
        <div key={index} className="task_item">
          <span>{task}</span>
          <div className="buttons">
            <button className="delete_button" onClick={handeDeleteTask}>
              <i className="fas fa-trash"></i>
            </button>
            <button className="modal_button" onClick={handleModal}>
              <i className="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default taskList;
