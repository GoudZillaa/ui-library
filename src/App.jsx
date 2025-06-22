import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"
import GridBackground from "./components/gridBackground/GridBackground"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="gridContainer">
        <GridBackground variant="dark"/>
      </div>
      <div className="appScreen">
        <Button btncolor="green" onClick={()=>alert("clicked!")}>Hotstar</Button>
      <Button btncolor="red" onClick={()=>alert("clicked!")}>Subscribe</Button>
      <Button btncolor="blue" onClick={()=>alert("clicked!")}>twitter</Button>
      </div>
    </div>
  )
}

export default App
