import React, { useState, useRef } from "react";

const Inbox = (props) => {
  const[newTask,setNewTask] =useState(false);
  const newInputTask=useRef('');
  const dateRef = useRef("2022-09-27");

 const addList = (e)=>{
  e.preventDefault();
  const obj={
    number : props.list.length+1,
    title : newInputTask.current.value,
    date : new Date(dateRef.current.value)
  }
  props.append(obj);
 }

const cancelTask = (e) =>{
  e.preventDefault();
  setNewTask(false)
}
  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={()=>setNewTask(!newTask)} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={newInputTask} ></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={addList}>
              Add Task
            </button>
            <button className="new" onClick={cancelTask}>
              Cancel
            </button>
            <input
              type="date"
              ref={dateRef}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list,index) => {
          return (
            <div className="box" key={list.number}>
              <div className="task">
              {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Inbox;