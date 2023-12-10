import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import Prompt from './components/prompts/Prompt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Prompt />
    </>
  )
}

export default App
