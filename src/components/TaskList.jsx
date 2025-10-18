import React from "react";

const TaskList = ({ taskList,setTaskList}) => {
  const handleDel =(id)=>{
   setTaskList((prev)=>prev.filter((task)=> task.id!==id))
  }
  return (
    <>
      <div className="text-center text-[24px] font-[poppins] py-5">
        <h1>Task list</h1>
      </div>

      <div className="bg-red-200 w-[70%] mx-auto py-5">
        {taskList.map((item) => (
          <div
            key={item.id}
            className=" flex justify-between items-center px-4 py-2 gap-5  mx-auto"
          >
            <div className="flex items-center gap-3">
              <input type="checkbox"/>
              <p className="font-[poppins]">{item.task}</p>
            </div>
            <button className="bg-red-500 py-1 px-5 rounded-sm font-[poppins] " onClick={()=>handleDel(item.id)}>del</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
