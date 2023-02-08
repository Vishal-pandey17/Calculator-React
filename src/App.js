import logo from './logo.svg';
import './App.css';
import React from 'react';
import Calci from './Calci';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Calculator</h1>
        <Calci/>
    </div>
  );
}

export default App;
