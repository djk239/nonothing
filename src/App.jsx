import './App.css'
import Navbar from './components/nav/Navbar'
import Prompt from './components/prompts/Prompt'
import Footer from './components/Footer/Footer'
import promptData from "./assets/prompts.json"

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Prompt prompt={promptData.prompts} />
      </main>
      <Footer />
    </div>
  );
}

export default App
