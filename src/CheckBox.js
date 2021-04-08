import React, { useReducer } from 'react'

const CheckBox = () => {
  function reducer(val) {
    return !val
  }

  const [checked, toggle] = useReducer(reducer, false)

  return (
    <div style={{marginTop:"3rem"}}>
      <label htmlFor="checkbox">{ checked ? 'checked' : 'not checked' }</label>
      <input id="checkbox" type="checkbox" value={checked} onChange={toggle} />
    </div>
  )
}

export default CheckBox
