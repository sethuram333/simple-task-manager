import React, { useState } from "react";
import Heading from "./components/Heading";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [taskList,setTaskList] = useState([])
  return (
    <>
      <div className="2xl:container mx-auto py-5">
        <div className="bg-[#eee] w-[90%] mx-auto shadow-md ">
          <Heading />
          <TaskInput taskList={taskList} setTaskList={setTaskList}/>
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </div>
      </div>
    </>
  );
};

export default App;
