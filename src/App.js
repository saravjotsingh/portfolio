import './App.css';
import About from './components/About/About';
import Header from './common/Header';
import { Route, Routes } from "react-router-dom"
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/skills" element={<Skills/>} />

    </Routes>
    </div>
  );
}

export default App;
