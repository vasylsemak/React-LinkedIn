import React from 'react'
import App from './App'
import CheckBox from './CheckBox'
import Counter from './Counter'
import Todos from './Todos'
import './App.css'

const Main = () => (
  <div className="app">
    <App />
    <CheckBox />
    <Counter />
    <Todos />
  </div>
)

export default Main
