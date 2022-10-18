import Osito from "./components/Osito"
import Response from "./components/Response"
import { useState } from "react"

function App() {
  const [change, setChange] = useState(false)

  return (
    <div className="app">
      {!change ? <Osito yesOption={setChange} /> : <Response changeState={setChange}/>}
    </div>
  )
}

export default App
