import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

export const Hero = () => {

    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ada</h1>
                <p className={styles.description}>I am a full-stack developer with 5 years of experience using React
                    and NodeJS. Reach out if youd like to learn more!
                </p>
                <a className={styles.contactBtn} href="mailto:daleking0117@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}