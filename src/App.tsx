import { useState } from "react"
import Home from "./components/Home"

export default function App() {
  const [timer, setTimer] = useState({
    "workTime": 25,
    "breakTime": 3,
    "repeatTime": 3
  })

  return (
    <div className="">
      <Home value={timer} />
    </div>
  )
}