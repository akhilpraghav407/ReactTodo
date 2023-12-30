import React, { useState } from 'react';
import uniqid from 'uniqid';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todoItem,setTodoItem] = useState('')
    const [todos,setTodos] = useState([])

    const handleTodoItem = (e)=>{
        setTodoItem(e.target.value)
    }
    const handleSubmit=()=>{
        let newTodoObject = {
            id: uniqid(),
            title : todoItem,
            done : false
        }
        setTodos(prev=>{
            return [...prev,newTodoObject]
        })
        setTodoItem("")
    }
   

    const handleDelete =(_id)=>{
        setTodos((prev)=>
         prev.filter((item)=>item.id!=_id
            )
        )
    }

    const handleEdit=(_id)=>{
        let editingItem = todos.find((item)=>item.id===_id)
        setTodoItem(editingItem)

    }
    
  return (
    <>
        <div className="todoApp">
            <TodoForm handleSubmit={handleSubmit} todoItem={todoItem} handleTodoItem={handleTodoItem} />
                <div className="todoList">
                    {todos.map((todo)=>{
                        return <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit}/>

                    })}
                </div>
        </div>
    </>
  )
}

export default TodoApp
