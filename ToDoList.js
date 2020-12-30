import React, { useState } from 'react'
import Form from "./Form.js"
import "./ToDoList.css"

let ToDoList = ({todos, completeTodo, removeTodo, editTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = val => {
        editTodo(edit.id, val)
        setEdit({
            id: null,
            value: ""
        })
    }

    return todos.map((todo, ind) => (
        <div
            className="item-cont" 
            key={ind}
            >{edit.id === todo.id ? <Form 
                onSubmit={submitUpdate} 
                placeholder={`Edit text "${todo.text}"`}
                buttonText={"submit edit"}/> 
                :
                <div 
                    className="item"
                    key={todo.id}
                    onClick={() => completeTodo(todo.id)}
                >
                    {todo.text}
                </div>
                }
            <div className="buttons">
                <button 
                    onClick={() => removeTodo(todo.id)}
                    className="delete"
                >
                    X
                </button>
                <button 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className="edit"
                >
                    Edit
                </button>
            </div>
        </div>
    ))
}

export default ToDoList
