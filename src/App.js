import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Content from './components/Content';
import {ChartProvider} from './context/ChartContext'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ChartProvider>
          <Content />
        </ChartProvider>
      </Router>
    </div>
  );
}

export default App;