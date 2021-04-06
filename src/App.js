import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [emotion, setEmotion] = useState('happy')
  useEffect(() => {
    console.log(`Watch changing emotion: ${emotion}`)
  }, [emotion])

  return (
    <>
      <h1>Currrent emotion is: {emotion}.</h1>
      <button onClick={() => setEmotion('frustrated')}>Frustrated</button>
      <button onClick={() => setEmotion('happy')}>Happy</button>
    </>
  )
}

export default App
