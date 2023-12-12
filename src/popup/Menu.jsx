import { useState } from "react"
import styles from "./Menu.module.css"

function Menu() {
const [isLoggingin, setisLoggingin] = useState(true);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");


const handleSignin = () => {
    setisLoggingin(!isLoggingin)
}
  return (
    <>
        <div className={styles.container}>
            <h2 className={styles.head}>Login / Signup</h2>
            {isLoggingin ? (
            <div>
            <h3>Login</h3>
            <ul className={styles.loginlist}>
                <li>
                    <label htmlFor="usernameL">Username</label>
                    <input id="usernameL" type="text" />
                </li>
                <li>
                    <label htmlFor="passwordL">Password</label>
                    <input id="passwordL" type="password" />
                </li>
                <li>
                    <button>Login</button>
                    <button onClick={handleSignin}>Or Signup</button>
                </li>
            </ul>
            </div>
            ) : (
            <div>
            <h3>SignUp</h3>
            <ul className={styles.signuplist}>
                <li>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" />
                </li>
                <li>
                    <label htmlFor="usernameS">Username</label>
                    <input id="usernameS" type="text" />
                </li>
                <li>
                    <label htmlFor="passwordS">Password</label>
                    <input id="passwordS" type="password" />
                </li>
                <li>
                    <button>Signup</button>
                    <button onClick={handleSignin}>Or Login</button>
                </li>
            </ul>
            </div>
            )}

        </div>
    </>
  )
}

export default Menu
