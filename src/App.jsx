import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Codeminal - Let's Code</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 100)}>
          Count Here {count}
        </button>
        <p>
          <b>This is my First React Project</b>
        </p>
      </div>
    </>
  )
}

export default App
