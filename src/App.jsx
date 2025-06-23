import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import GridBackground from "./components/gridBackground/GridBackground";
import Input from "./components/Input";
import person from "./assets/person.png";
import MaterialInput from "./components/MaterialInput";
import lock from "./assets/lock.png";
function App() {
  const [count, setCount] = useState(0);
  // console.log(typeof(person))

  return (
    <div className="App">
      <div className="gridContainer">
        <GridBackground variant="dark" />
      </div>
      <div className="appScreen">
        <div className="formField flex">
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
              <Button btncolor="red" variant="secondary_white" onClick={() => alert("clicked!")}>
                X
              </Button>
              <Button btncolor="green" variant="secondary_black" onClick={() => alert("clicked!")}>
                Proceed
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
