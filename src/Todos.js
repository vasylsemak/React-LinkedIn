import React, { useState, useReducer } from 'react'
import Todo from './Todo'

const ADD_TODO = 'ADD_TODO'

const Todos = () => {
  function reducer(state, action) {
    switch (action.type) {
      case ADD_TODO:
        return [...state, addTodo(action.todo)]
      default:
        return state
    }
  }
  function addTodo(todo) {
    return {
      id: Date.now(),
      complete: false,
      name: todo
    }
  }

  const [task, setTask] = useState('')
  const [todos, dispatch] = useReducer(reducer, [{ id: 1, complete: false, name: "Work" }])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ADD_TODO, todo: task })
    setTask('')
  }

  return (
    <form className="todos" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" name="task" value={task} onChange={e => setTask(e.target.value)} />
      <button className="add-btn">ADD</button>
      <ul>
        {
          todos.map(t => <Todo key={t.id} {...t} />)
        }
      </ul>
    </form>
  )
}

export default Todos
