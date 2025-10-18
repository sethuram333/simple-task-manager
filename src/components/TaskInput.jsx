import React, { useState } from "react";

const TaskInput = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") {
      alert("Please enter a task before adding!");
      return;
    }
    setTaskList((prev) => [
      ...prev,
      { id: Date.now(), task, completed: false },
    ]);
    setTask("");

  };
  return (
    <>
      <div className=" w-[90%] mx-auto grid grid-cols-1 py-5">
        <div className="flex flex-wrap justify-center gap-3 ">
          <input
            type="text"
            value={task}
            placeholder="Enter the task"
            className="bg-blue-300 py-1 px-5 rounded-sm font-[poppins] outline-none"
            onChange={(e) => {
              console.log(e.target.value);
              setTask(e.target.value);
            }}
          />

          <button
            className="bg-green-500 py-1 px-5 rounded-sm font-[poppins] "
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
