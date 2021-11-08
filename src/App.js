import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
    {
      name: 'works'

    },
    { name: 'all' },
    { name: 'group projects' }

  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path='react-portfolio//' component={About} />
          <Route exact path='react-portfolio//about' component={About} />
          <Route exact path='react-portfolio//portfolio' component={Portfolio} />
          <Route exact path='react-portfolio//resume' component={Resume} />
          <Route exact path='react-portfolio//contact' component={Contact} />

        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
