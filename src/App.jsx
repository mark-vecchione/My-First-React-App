import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mark's First React App</h1>
      <div className="hello">
          Hello, World!
      </div>
      <div>
        <Greeting />
      </div>
    </>
  )
}

export default App
