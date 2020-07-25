import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Personal from './components/personal/Personal'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="container">
        <div className="row container-row">
          <div className="col-md-1 col-xs-12">
            <Navbar/>
          </div>
          <div className="col-md-5 col-xs-12">
            <Personal/>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="portfolio-section">
                <Route exact path="/" component={About}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/contact" component={Contact}/>
            </div>
            
          </div>
        </div>
      </div>
      
      
      </Router>
    </div>
  );
}

export default App;
