import React from 'react'

const TodoApp = () => {
  return (
    <>
        <div className="todoApp">
            <div className="todoForm">        
                <input className="todoInput" type="text" /> 
                <button className="btn addButton">Add</button>        
            </div>
            <div className="todoList">
                <div className="todoItem">
                    <div className="todoContent">
                        <input type="checkbox" />
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing el</span>
                    </div>
                    <div className="todoMeta">
                        <button  className="btn editButton">Edit</button>
                        <button  className="btn deleteButton">Delete</button>
                    </div>
                </div>

        
            </div>
        </div>
    </>
  )
}

export default TodoApp
