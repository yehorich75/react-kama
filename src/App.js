import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './Components/Header/Header';
import './Components/Surf/Surf';
import './Components/Travel/Travel';
import './Components/Sleep/Sleep';
import './Components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <header className="header">
      </header>
      <div className="container">
        <Surf />
        <Travel />
        <Sleep />
        <Shop />
      </div>
    </div>
  );
}

export default App;
