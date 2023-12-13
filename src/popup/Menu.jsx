import { useState } from "react"
import styles from "./Menu.module.css"
import Axios from "axios";

function Menu( { close } ) {
const [isLoggingin, setisLoggingin] = useState(true);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");


const handleSignin = () => {
    setisLoggingin(!isLoggingin)
}

const register = (event) =>{
    event.preventDefault();
    Axios.post('http://localhost:3001/register', {USERNAME: username,
                                                  PASSWORD: password}).then((response) => {
                                                    console.log(response);
                                                  });

};

const closeMenu = () => {
    close();
}

  return (
    <>
        <div className={`${styles.container} ${isLoggingin ? styles.login : styles.signup}`}>
            <div className={styles.topbar}>
                <h2 className={styles.head}>Login / Signup</h2>
                <img onClick={closeMenu} src="src\assets\xsvg.svg" alt="close menu" />
            </div>
            {isLoggingin ? (
            <div> 
            <h3>Login</h3>
            <ul className={styles.loginlist}>
                <li>
                    <label htmlFor="usernameL">Username</label>
                    <input id="usernameL" type="text" value={username} onChange={ (e) => setUsername(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="passwordL">Password</label>
                    <input id="passwordL" type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
                </li>
            </ul>
            </div>
            ) : (
            <div>
            <h3 className={styles.head2}>Sign Up</h3>
            <ul className={styles.signuplist}>
                <li>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={ (e) => setEmail(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="usernameS">Username</label>
                    <input id="usernameS" type="text" value={username} onChange={ (e) => setUsername(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="passwordS">Password</label>
                    <input id="passwordS" type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
                </li>
            </ul>
            </div>
            )}
                    <div className={styles.btnwrap}>
                        <button className={styles.btn} onClick={register}>Login</button>
                        <button className={styles.btn} onClick={handleSignin}>Switch</button>
                    </div>
        </div>
    </>
  )
}

export default Menu
