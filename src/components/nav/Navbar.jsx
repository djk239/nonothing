import styles from "./Navbar.module.css"
import Menu from "../../popup/Menu.jsx"
import { useState, useEffect } from "react"

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

const handleClick = () => {
  setMenuOpen(!menuOpen);

}

const close = () => {
  setMenuOpen(!menuOpen)
}

const closeMenuOnEscape = (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
};

useEffect(() => {
  // Attach the event listener when the component mounts
  document.addEventListener("keydown", closeMenuOnEscape);

  // Detach the event listener when the component unmounts
  return () => {
    document.removeEventListener("keydown", closeMenuOnEscape);
  };
}, []);

  return (
    <>
    <div className={styles.navcontain}>
    <div className={styles.logo}>
        <h1 className={styles.n1}>N</h1>
        <h1 className={styles.n2}>N</h1>
    </div>
    <h2 className={styles.nothing}>NOTHING</h2>
    <svg className={styles.menu} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
      <circle cx="12" cy="6" r="2"/>
      <circle cx="12" cy="12" r="2"/>
      <circle cx="12" cy="18" r="2"/>
    </svg>
    </div>
    {menuOpen ? (
    <Menu close={close} />
    ) :(<></>)
    }


    <div className={styles.bar2}/>

    </>
  )
}

export default Navbar
