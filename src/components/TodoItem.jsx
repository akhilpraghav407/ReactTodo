import React from 'react'

const TodoItem = ({todo}) => {
    const {id,title,done} = todo;
    console.log(title)
  return (
            <div className="todoItem">
                    <div className="todoContent">
                        <input type="checkbox" />
                        <span>{title}</span>
                    </div>
                    <div className="todoMeta">
                        <button  className="btn editButton">Edit</button>
                        <button  className="btn deleteButton">Delete</button>
                    </div>
            </div>
  )
}

export default TodoItem
