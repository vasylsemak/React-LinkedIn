import React, { useReducer } from 'react'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const Counter = () => {
  function reducer(state, action) {
    switch(action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 }
      case DECREMENT:
        return { ...state, count: state.count - 1 }
      default:
        return state
    }
  }
  function increment() {
    dispatch({ type: INCREMENT })
  }
  function decrement() {
    dispatch({ type: DECREMENT })
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className="counter">
      <button className="btn" onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button className="btn" onClick={increment}>+</button>
    </div>
  )
}

export default Counter
