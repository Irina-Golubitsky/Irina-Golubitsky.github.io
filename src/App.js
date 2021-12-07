import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
     
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
