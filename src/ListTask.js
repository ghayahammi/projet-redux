import { useSelector } from "react-redux";
import React from "react";
import Task from "./Task";
const ListTask = () => {
  const task = useSelector((state) => state.task);
  console.log(task,'tt')
  return (
    <div className='test'>
      

        {task.map((el)=>(
          <Task el={el}/>
      





  ))}



  </div>
 
  );
};
export default ListTask;



