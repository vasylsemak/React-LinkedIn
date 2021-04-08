import React, { useState, useReducer } from 'react'
import Todo from './Todo'

const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_DONE = 'TOGGLE_DONE'

const Todos = () => {
  function reducer(state, action) {
    switch (action.type) {
      case ADD_TODO:
        return [...state, addTodo(action.todo)]
      case REMOVE_TODO:
        return state.filter(t => t.id !== action.id)
      case TOGGLE_DONE:
        return state.map(t => (t.id === action.id)
          ? { ...t, complete: !t.complete } : t)
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
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, name: "Eat", complete: false },
    { id: 2, name: "Pray", complete: false },
    { id: 3, name: "Love", complete: false },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ADD_TODO, todo: task })
    setTask('')
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="todo-form"
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button className="add-btn">ADD</button>
      </form>
      <ul>
        {
          todos.map(t => <Todo key={t.id} {...t} dispatch={dispatch} />)
        }
      </ul>
    </>
  )
}

export default Todos
