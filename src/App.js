import React from 'react';
import Header from './components/Header/header';
import Team from './components/Team/Team';
import Culture from './components/Culture/Culture';
import OpenJob from './components/OpenJob/OpenJob';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Culture />
      <OpenJob />
    </div>   
  );
}

export default App;
