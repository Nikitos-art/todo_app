import React from 'react';


function handleDelete(id) {
  fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        window.location.reload();
      } else {
      } console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
}



function Note({ task }) {
  return (
    <div className="note" key={task.id}>
      <h1>{task.task}</h1>
      <p>{task.details}</p>
      <button className='delete-button' onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
  }
  
function BodyTasksList({ tasks }) {
  return (
    <div className='notes-grid'>
      {tasks.map((task) => (
        <Note task={task} key={task.task} />
      ))}
    </div>
  );
}


export default BodyTasksList;