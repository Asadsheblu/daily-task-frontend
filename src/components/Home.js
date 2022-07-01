import React from 'react';

import Todo from './Todo';

const Home = () => {
    const handelTask=(e)=>{
            e.preventDefault()
            const taskname=e.target.task.value;
            const duration=e.target.duration.value;
            const details=e.target.dailytask.value;
           
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
            <button className='btn btn-info'>Add Task</button>
          </form>
          <Todo />
        </div>
    );
};

export default Home;