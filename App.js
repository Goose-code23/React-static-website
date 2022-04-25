import './App.css';
import Navbar from './comp/Navbar';
import Main from './comp/Main';
import Projects from './comp/Projects';
import Textbox from './comp/Textbox';
import About from './comp/About';
import Contact from './comp/Contact';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Main />
     <Projects />
     <Textbox />
     <About />
    <Contact />
    </div>
  );
}

export default App;
