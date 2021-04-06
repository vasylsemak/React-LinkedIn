import React, { useReducer } from 'react'

const CheckBox = () => {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  )

  return (
    <div style={{marginTop:"3rem"}}>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <h3>{checked ? 'checked' : 'not checked'}</h3>
    </div>
  )
}

export default CheckBox
