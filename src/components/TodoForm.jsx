import React from 'react'

const TodoForm = ({handleSubmit,todoItem,handleTodoItem,editingId}) => {
  return (
    <div className="todoForm">        
        <input onChange={handleTodoItem} className="todoInput" type="text" value={todoItem}/> 
        <button onClick={handleSubmit} className="btn addButton">
          {editingId ? "Edit" : "Add" } Todo</button>        
    </div>
  )
}

export default TodoForm
