import React from 'react';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Hero } from './components/Hero';

const App:React.FC = () => {
  return (
    
    <Router>
    <GlobalStyle/>
      <Hero/>
    </Router>
  
  );
}

export default App;
