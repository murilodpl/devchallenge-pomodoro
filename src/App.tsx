import { useState } from "react"
import Home from "./components/Home"
import Pomodoro from "./components/Pomodoro"

export default function App() {
  // Variables
  const [timer, setTimer] = useState({
    "workTime": 25,
    "breakTime": 3,
    "repeatTime": 3
  })
  const [isRunning, setIsRunning] = useState(false)

  return (
    <div className="">
      {
        (!isRunning)
          ? <Home timer={timer} setTimer={setTimer} setIsRunning={setIsRunning} />
          : <Pomodoro timer={timer} setTimer={setTimer} setIsRunning={setIsRunning} />
      }
    </div>
  )
}