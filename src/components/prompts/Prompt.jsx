import styles from "./Prompt.module.css"
import { useState } from "react"


function Prompt({ prompt }) {
const [answer, setAnswer] = useState("")

const [promptIndex, setPrompt] = useState(0);
const nextPrompt= () => {
  if(answer === prompt[promptIndex].answer){
    setPrompt((prevIndex) => (prevIndex +1) %prompt.length);
    setAnswer("");
  }
};

  return (
    <>
    <div className={styles.container}>
      <div className={styles.promptWrap} >
        <label htmlFor="answer">{prompt[promptIndex].prompt}</label>
        <h3 htmlFor="answer">{prompt[promptIndex].subprompt}</h3>
        {prompt[promptIndex].url !== "" && (<a target="_blank" rel="noopener noreferrer" href={prompt[promptIndex].url}>this</a>)}
      </div>
        <input id="answer" type="text" className={styles.input} value={answer} onChange={ (e) => setAnswer(e.target.value)}/>
        <button className={styles.btn} onClick={nextPrompt}>Submit</button>
    </div>
    </>
  )
};

export default Prompt
