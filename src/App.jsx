import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import GridBackground from "./components/gridBackground/GridBackground";
import person from "./assets/person.png";
import MaterialInput from "./components/MaterialInput";
import lock from "./assets/lock.png";
import Toast from "./components/Toast"
import Loader from './components/loader/Loader'

function App() {
  const [count, setCount] = useState(0);
  // console.log(typeof(person))

  return (
    <div className="App">
      <div className="gridContainer">
        <GridBackground variant="dark" />
      </div>
      <div className="appScreen">
        <div className="formField flex gap-2">
          <form className="formContainer" action="">
            <div className="title mb-4">
              <h2 className="text-3xl font-bold">Login</h2>
            </div>

            <div className="newInputStyle flex flex-col gap-5">
              <MaterialInput placeholder="Username" icon={person} />
              <MaterialInput placeholder="Password" icon={lock} />
            </div>

            <div className="info">
              <p>
                Don't have an account? {"  "}
                <a className="text-blue-700" href="">
                  Sign Up.
                </a>
              </p>
            </div>

            <div className="buttons flex gap-6 mt-4">
              <Button btncolor="red" className="btn" variant="secondary_white" onClick={() => alert("clicked!")}>
                X
              </Button>
              <Button btncolor="green" className="btn" variant="secondary_black" onClick={() => alert("clicked!")}>
                Proceed
              </Button>
            </div>
          </form>
          <div className="toastContainer flex flex-col gap-2">
            <Toast variant="success" title="Hogaya" subtitle="this is a test run!"/>
            <Toast variant="error" title="Nahi hua" subtitle="this is a test run!"/>
            <Toast variant="warning" title="Gadbad lag rahi hai" subtitle="please use less words in subtitle for better visuals"/>
            <Toast variant="notice" title="Apke liye message" subtitle="this is a test run!"/>
            <div className="loaders flex">
              <Loader variant="loader1"/>
            <Loader variant="loader2"/>
            </div>
          </div>
          <div className="buttonsContainer flex flex-col gap-2 bg-white rounded-lg p-2 h-fit">
            <Button variant="primary">Test Button</Button>
            <Button variant="primary" btncolor="red">Test Button</Button>
            <Button variant="primary" btncolor="yellow">Test Button</Button>
            <Button variant="primary" btncolor="green">Test Button</Button>
            <Button variant="primary" btncolor="purple">Test Button</Button>
            <Button variant="primary" btncolor="instagram">Test Button</Button>
            <Button variant="primary" btncolor="pink">Test Button</Button>
            <Button variant="primary" btncolor="black">Test Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
