import styles from "./Prompt.module.css"
import { useState } from "react"

function Prompt() {
const [answer, setAnswer] = useState("")

  return (
    <>
    <div className={styles.container}>
        <label for="answer" className={styles.prompt}>How many N's are on this screen?</label>
        <input id="answer" type="text" className={styles.input} value={answer} onChange={ (e) => setAnswer(e.target.value)}/>
        <button className={styles.btn}>Submit</button>
    </div>
    </>
  )
}

export default Prompt
