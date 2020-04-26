import React from 'react';
import logo from './lipers_in_slums_04.svg';
import text_logo from './lipers_in_slums_03.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={text_logo} alt="text_logo" />
        <div className="subtitle">
          <p>
            おう、"意味"、ヤるぞ。
          </p>
          <p>
            人類3500年の謎を、ここで解く。
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
