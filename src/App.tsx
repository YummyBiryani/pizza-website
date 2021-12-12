import React from 'react';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import {productData} from './components/Products/data';

const App:React.FC = () => {
  return (
    
    <Router>
    <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favourite' data={productData}/>
    </Router>
  
  );
}

export default App;
