import "./Inputbar.css";
import React, { useRef } from "react";
import Tasklist from "../Tasklist/index";

import { useState } from "react";

function InputBar() {
  const refvalue = useRef(null);

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (refvalue.current.value.trim() === "") {
      return;
    }

    setTasks([...tasks, refvalue.current.value]);

    refvalue.current.value = "";
  };

  function handleDeleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="input_bar">
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder="Type your message..." ref={refvalue} />
        <button type="submit">Send</button>
      </form>
      <Tasklist data={tasks} callback={handleDeleteTask} />
    </div>
  );
}

export default InputBar;
