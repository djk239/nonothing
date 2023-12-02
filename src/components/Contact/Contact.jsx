import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                    <a href="mailto:daleking0117@gmail.com">daleking0117@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
                    <a href="https://www.linkedin.com/in/dale-king-45656a272/">linkedin.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
                    <a href="https://github.com/DJK239">github.com</a>
                </li>
            </ul>
        </footer>
    );
}