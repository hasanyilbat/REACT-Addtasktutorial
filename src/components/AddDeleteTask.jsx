import React from "react";
import { useState } from "react";

const AddDeleteTask = ({ addTutorial }) => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    console.log(task, desc);
    e.preventDefault();
    addTutorial({ title: task, description: desc });
    setTask("");
    setDesc("");
  };

  return (
    <div>
      <div className="display-4 text-danger text-center m-4 ">
        Add Task Tutorial
      </div>
      <div>
        <form className="mt-4 text-center w-75 mx-auto" onSubmit={handleSubmit}>
          <div clasa="form-group text-center mt-3">
            <label htmlFor="task">Title</label>
            <input
              type="text"
              className="form-control"
              id="task"
              placeholder="Task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </div>
          <div className="form-group text-center mt-3">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              className="form-control"
              id="desc"
              placeholder="description"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary d-block mx-auto my-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDeleteTask;
