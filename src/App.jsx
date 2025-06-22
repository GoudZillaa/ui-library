import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button btncolor="green" onClick={()=>alert("clicked!")}>Hotstar</Button>
      <Button btncolor="red" onClick={()=>alert("clicked!")}>Subscribe</Button>
      <Button btncolor="blue" onClick={()=>alert("clicked!")}>twitter</Button>
    </div>
  )
}

export default App
