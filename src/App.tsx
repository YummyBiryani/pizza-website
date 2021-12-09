import React from 'react';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom';

const App:React.FC = () => {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
