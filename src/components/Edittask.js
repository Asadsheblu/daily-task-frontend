import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
const Edittask = () => {
    const  {id}=useParams();
    const [task,setTask]=useState({})
    const [taskname, settaskname] = useState('');
    const [details, setdetails] = useState('');
    const [duration, setduration] = useState('');
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
        
       
        const task={taskname,duration,details}
      fetch(`https://pure-castle-81331.herokuapp.com/task/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(task)
    
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)
        if(data.modifiedCount==1){
            window.location.reload()
            alert("Updated task")
        }
        })
}
    return (
        <div className='container'>
            <h6>Edit task {task?.taskname}</h6>
        
        <form className='w-50 mx-auto' onSubmit={handelEdit}>
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task Name</label>
    <input className='form-control'
          type="text"
          id="first"
          name="first"
          value={taskname}
          onChange={event => settaskname(event.target.value)}
          autoComplete="off"
        />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Task Date</label>
    <input className='form-control'
          type="date"
          id="first"
          name="duration"
          value={duration}
          onChange={event => setduration(event.target.value)}
          autoComplete="off"
        />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Task Details</label> <br />
    <textarea className='from-control' id="first" cols="30" name="details"
          value={details}
          onChange={event => setdetails(event.target.value)} rows="5"></textarea>
   
  </div>
            <button className='btn btn-info'>Update Task</button>
          </form>
       
      </div>
    );
};

export default Edittask;