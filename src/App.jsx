import './App.css'
import Navbar from './components/nav/Navbar'
import Prompt from './components/prompts/Prompt'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Prompt />
      </main>
      <Footer />
    </div>
  );
}

export default App
