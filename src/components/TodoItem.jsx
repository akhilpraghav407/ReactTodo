import React from 'react'

const TodoItem = ({todo,handleDelete,handleEdit}) => {
    const {id,title,done} = todo;
    console.log(title)
  return (
            <div className="todoItem">
                    <div className="todoContent">
                        <input type="checkbox" />
                        <span>{title}</span>
                    </div>
                    <div className="todoMeta">
                        <button  className="btn editButton" onClick={()=>{handleEdit(id)}}>Edit</button>
                        <button  className="btn deleteButton" onClick={()=>{handleDelete(id)}}>Delete</button>
                    </div>
            </div>
  )
}

export default TodoItem
