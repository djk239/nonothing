import "./Prompt.css"
import { useState } from "react"

function Prompt() {
const [answer, setAnswer] = useState("")

  return (
    <>
    <div className="container">
        <label for="answer" className="prompt">How many N's are on this screen?</label>
        <input id="answer" type="text" className="input" value={answer} onChange={ (e) => setAnswer(e.target.value)}/>
        <button className="btn">Submit</button>
    </div>
    </>
  )
}

export default Prompt
