import React, { useReducer } from 'react'

const CheckBox = () => {
  function reducer(val) {
    return !val
  }

  const [checked, toggle] = useReducer(reducer, false)

  return (
    <div style={{marginTop:"3rem"}}>
      <input type="checkbox" onChange={toggle} />
      <h3>{checked ? 'checked' : 'not checked'}</h3>
    </div>
  )
}

export default CheckBox
