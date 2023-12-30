import React, { useState } from 'react';
import uniqid from 'uniqid';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todoItem,setTodoItem] = useState('')
    const [todos,setTodos] = useState([]);
    const [editingId,setEditingId] = useState(null)

    const handleTodoItem = (e)=>{
        setTodoItem(e.target.value)
    }
    const handleSubmit=()=>{
        if(editingId){
            setTodos(prev=>{
                return prev.map(item=>{
                    return item.id===editingId ? {...item,title:todoItem} : item
                })
            })
            setTodoItem("")
            setEditingId(null)
        }
        else{
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
        
    }

   

    const handleDelete =(_id)=>{
        setTodos((prev)=>
         prev.filter((item)=>item.id!=_id
            )
        )
    }


    const handleEdit=(_id)=>{
        setEditingId(_id);
        let editingItem = todos.find((item)=>item.id===_id)
        setTodoItem(editingItem.title)
        

    }
    const handleComplete=(_id)=>{
        setTodos((prev)=>{
          return  prev.map((item)=>{
                return (item.id ===_id ? {...item,done:!item.done} : item)
            })
        })
    }
    console.log(todos)
  return (
    <>
        <div className="todoApp">
            <TodoForm handleSubmit={handleSubmit} todoItem={todoItem} handleTodoItem={handleTodoItem} editingId={editingId}/>
                <div className="todoList">
                    {todos.map((todo)=>{
                        return <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete}/>

                    })}
                </div>
        </div>
    </>
  )
}

export default TodoApp
