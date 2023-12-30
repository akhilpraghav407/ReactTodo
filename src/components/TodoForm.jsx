import React from 'react'

const TodoForm = ({handleSubmit,todoItem,handleTodoItem}) => {
  return (
    <div className="todoForm">        
        <input onChange={handleTodoItem} className="todoInput" type="text" value={todoItem}/> 
        <button onClick={handleSubmit} className="btn addButton">Add Todo</button>        
    </div>
  )
}

export default TodoForm
