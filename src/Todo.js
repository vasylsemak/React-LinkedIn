import { REMOVE_TODO, TOGGLE_DONE } from './Todos'

const Todo = ({ id, name, complete, dispatch }) => (
  <li className="li">
    <h3
      style={{ textDecorationLine: complete ? 'line-through' : 'none' }}
    >- {name}</h3>
    <button
      className="add-btn complete"
      onClick={() => dispatch({ type: TOGGLE_DONE, id: id })}
    >Complete</button>
    <button
      className="add-btn"
      onClick={() => dispatch({ type: REMOVE_TODO, id: id })}
    >Delete</button>
  </li>
)

export default Todo
