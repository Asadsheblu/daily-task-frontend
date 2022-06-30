import React from 'react';

import Todo from './Todo';

const Home = () => {
    const handelTask=(e)=>{
            e.preventDefault()
            const task=e.target.task.value
            const details={task}
          fetch('http://localhost:5000/task',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(details)
        
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
        <div>
          <form onSubmit={handelTask}>
          <textarea name='task'rows={10} cols={50}></textarea>
            <br />
            <button className='btn btn-info'>Add Task</button>
          </form>
          <Todo />
        </div>
    );
};

export default Home;