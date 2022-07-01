import React, { useState } from 'react';

import Todo from './Todo';

const Home = () => {
  const [taskname, settaskname] = useState('');
  const [details, setdetails] = useState('');
  const [duration, setduration] = useState('');
    const handelTask=(e)=>{
            e.preventDefault()
            
           
            const task={taskname,duration,details}
          fetch('http://localhost:5000/task',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(task)
        
          })
          .then(res=>res.json())
          .then(data=>{console.log(data)
            if(data.insertedId){
                window.location.reload()
                alert("Added task")
            }
            })
    }
    return (
        <div className='container'>
          <form className='w-50 mx-auto' onSubmit={handelTask}>
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task Name</label>
    <input className='from-control'
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
    <input className='from-control'
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
            <button className='btn btn-info'>Add Task</button>
          </form>
          <Todo />
        </div>
    );
};

export default Home;