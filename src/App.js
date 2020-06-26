import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Cipher from './components/Cipher'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Cipher />
      <Footer />
    </div>
  );
}

export default App;
