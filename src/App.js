import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact';
import Experience from './components/Experience';
import Skill from'./components/skill'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Header />
        <Routes>
          
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skill />} />
          {/* Add more routes for other sections */}
        </Routes>
        <Experience />
        <Skill />
        <Projects />
        <Contact />
        
        <Footer />
      </div>
    </Router>
  );
}


export default App;








