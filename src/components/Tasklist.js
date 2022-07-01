import React from 'react';
import {
  
    Link
  } from "react-router-dom";
const Tasklist = ({task,index}) => {
    const handelDelete=(id)=>{
        fetch(`https://pure-castle-81331.herokuapp.com/task/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                window.location.reload()
                window.confirm("Are you Sure Want To Delete?")
            }
        
        })
       
    }
    const handelCheckbox=(id)=>{
        console.log(id);
    }
    return (
        <tr>
      <th scope="row">{index+1}</th>
      <td>{task?.taskname}</td>
      <td>{task?.duration}</td>
      <td>{task?.details}</td>
      <td><Link to={`/todo/${task?._id}`}><button>Edit</button></Link></td>
      <td><button onClick={()=>handelDelete(task?._id)} className='btn btn-outline-danger'>Delete</button></td>
     <td> <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={()=>handelCheckbox(task?._id)}/></td>
    </tr>
    );
};

export default Tasklist;