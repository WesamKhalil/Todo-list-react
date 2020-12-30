import React, { useState } from "react"
import Form from "./Form.js"
import ToDoList from "./ToDoList.js"
import "./App.css"

let App = props => {
    const [todos, setTodos] = useState([])

    const addTodos = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log([todo, ...todos])
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const editTodo = (id, obj) => {
        console.log(obj)
        if(!obj.text || /^\s*$/.test(obj.text)) {
            return
        }

        setTodos(prev => prev.map(item => item.id === id ? obj : item))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return(
        <div>
            <div className="app-header">
                <h1>Todays tasks.</h1>
            </div>
            <div className="app-cont">
                <Form onSubmit={addTodos}/>
                <ToDoList 
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
            </div>
        </div>
    )
}

export default App