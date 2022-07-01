import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
const Edittask = () => {
    const  {id}=useParams();
    const [task,setTask]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/task/${id}`,{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>setTask(data))
    },[])
    const handelEdit=(e)=>{
        e.preventDefault()
        const taskname=e.target.task.value;
        const duration=e.target.duration.value;
        const details=e.target.dailytask.value;
       
        const task={taskname,duration,details}
      fetch(`http://localhost:5000/task/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(task)
    
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)
        if(data.insertedId){
            window.location.reload()
            alert("Updated task")
        }
        })
}
    return (
        <div className='container'>
            <h6>Edit task {task?.taskname}</h6>
        <form onSubmit={handelEdit} className='w-50 mx-auto' >
        <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Task Name</label>
  <input type="name" name="task" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
  
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Task Date</label>
  <input type="date" name='duration' class="form-control" id="exampleInputPassword1" required/>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Task Details</label>
  <textarea name="dailytask" className='form-control' id="" cols="30" rows="10" required></textarea>
</div>
          <button className='btn btn-info'>Updated Task</button>
        </form>
       
      </div>
    );
};

export default Edittask;