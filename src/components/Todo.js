import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tasklist from './Tasklist';
const Todo = () => {
    const [tasks,setTask]=useState([])
    useEffect(()=>{
        fetch("https://pure-castle-81331.herokuapp.com/task",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>setTask(data))
    },[])
    return (
        <div className='container p-5'>
        <table class="table">
     <thead>
     <tr>
  <th scope="col">#</th>
  <th scope="col">Task Name</th>
  <th scope="col">Task Date</th>
  <th scope="col">Task Details</th>
  <th scope="col">Edit</th>
  <th scope="col">Deleted</th>
  <th scope="col">Completed</th>
</tr>
        {
           tasks.map((task,index)=><Tasklist key={task?._id} task={task} index={index}></Tasklist>) 
        }
        
</thead>

</table>
    </div>
    );
};

export default Todo;