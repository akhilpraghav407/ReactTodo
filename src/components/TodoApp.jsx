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
    }
    console.log(todos)
    
  return (
    <>
        <div className="todoApp">
            <TodoForm handleSubmit={handleSubmit} todoItem={todoItem} handleTodoItem={handleTodoItem} />
                <div className="todoList">
                    {todos.map((todo)=>{
                        return <TodoItem key={todo.id} todo={todo}/>

                    })}
                </div>
        </div>
    </>
  )
}

export default TodoApp
