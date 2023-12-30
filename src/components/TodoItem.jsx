import React from 'react'

const TodoItem = ({todo,handleDelete,handleEdit,handleComplete}) => {
    const {id,title,done} = todo;
    let opacity = done ? 0.5 : 1;
  return (
            <div className="todoItem">
                    <div className="todoContent">
                        <input onClick={()=>{handleComplete(id)}} type="checkbox" value={done}/>
                        <span style={{opacity:opacity}}>{title}</span>
                    </div>
                    <div className="todoMeta">
                        <button  className="btn editButton" onClick={()=>{handleEdit(id)}}>Edit</button>
                        <button  className="btn deleteButton" onClick={()=>{handleDelete(id)}}>Delete</button>
                    </div>
            </div>
  )
}

export default TodoItem
