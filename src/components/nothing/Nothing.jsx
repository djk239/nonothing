import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Nothing.module.css";



export const Nothing = () => {

    return(
        <div>
            <nav className={styles.navbar}>
                <a href="https://www.merriam-webster.com/dictionary/nothing">
                    <img className={styles.ns} alt="NN" src={getImageUrl("nav/menuNN.png")}/>
                </a>
                <h1 className={styles.nothing}>NOTHING</h1>
                <a href="#">
                    <img className={styles.menu} alt="menu" src={getImageUrl("nav/menuDK.png")}/>
                </a>
            </nav>
            <div className={styles.bar} />

            <section className={styles.section}>
                
            </section>
        </div>
    )
}