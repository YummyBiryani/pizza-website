import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import {productData, productDataTwo} from './components/Products/data';
import { Feature } from './components/Features';
import { Footer } from './components/Footer';

const App:React.FC = () => {
  return (
    
    <Router>
    <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favourite' data={productData}/>
      <Feature/>
      <Products heading='Choose your favourite Dessert' data={productDataTwo}/>
      <Footer />
    </Router>
  
  );
}

export default App;
