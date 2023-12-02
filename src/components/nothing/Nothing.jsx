import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Nothing.module.css";



export const Nothing = () => {

    return(
        <div>
            <nav className={styles.navbar}>
                <img className={styles.ns} src={getImageUrl("nav/menuNN.png")}/>
                <a className={styles.nothing}>NOTHING</a>
                <img className={styles.menu} src={getImageUrl("nav/menuDK.png")}/>
            </nav>
            <div className={styles.bar} />
        </div>
    )
}