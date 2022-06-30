import React from 'react';

const Tasklist = ({task,index}) => {
    const handelDelete=(id)=>{
        fetch(`http://localhost:5000/task/${id}`,{
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
    return (
        <tr>
      <th scope="row">{index+1}</th>
      <td>{task?.task}</td>
      <td><button>Edit</button></td>
      <td><button onClick={()=>handelDelete(task?._id)} className='btn btn-outline-danger'>Delete</button></td>
     <td> <input type="checkbox" class="form-check-input" id="exampleCheck1"/></td>
    </tr>
    );
};

export default Tasklist;