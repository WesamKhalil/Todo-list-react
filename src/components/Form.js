import React, { useState, useEffect, useRef } from "react"
import "./Form.css"

let Form = props => {
    const [input, setInput] = useState("")
    const focus = useRef(null)

    useEffect(() => {
        focus.current.focus()
    }) 

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
            console.log(props.onSubmit)
        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })
        
        setInput("")
    }


    return(
        <form 
            className="form"
            autocomplete="off"
            onSubmit={handleSubmit}
        >
            <input 
                className="form-input"
                type="text" 
                placeholder="Add a todo"
                ref={focus}
                value={input}
                name="text"
                onChange={handleChange}
            />
            <button className="form-button">Add an item</button>
        </form>
    )
}

export default Form;