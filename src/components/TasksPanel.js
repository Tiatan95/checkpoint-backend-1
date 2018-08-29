import React from "react";
import TaskItem from "./TaskItem";
import createData from "../createData";

function TasksPanel(props) {
    var taskItems = [];
    taskItems = props.tasks.map((t)=>{
        return <TaskItem task={t} />
    });
  return (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
        </div>
        <div className="panel-body">
            <div className="list-group">
    
                {taskItems}
                
                
            </div>
            <div className="text-right">
                <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Create New</h3>
        </div>
        <div className="panel-body">
            <div className="list-group">
    
               Name: <input id="taskName" />
               Date: <input id="taskDate"/>
               <button onClick={
                ()=>{
                    let task = document.getElementById("taskName").value;
                    let date = document.getElementById("taskDate").value;
                    createData.task({task,date});
                }
               }>Create</button>
                 
            </div>
        </div>

    </div>);
}

export default TasksPanel;