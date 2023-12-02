import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { This } from './components/Test/This';
import { Nothing } from './components/nothing/Nothing';


function App() {
  return (
    <div className={styles.App}>
      <Nothing />
    </div>
  )
}

export default App
