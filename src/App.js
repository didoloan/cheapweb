import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
import Slider from './components/slider';
// import logo from './logo.svg';
import './App.css';

function App() {
  const navLinks = ['Home','About', 'Blog', 'FAQ','Gallery'];

  return (
    <div className="App">
      <Navbar navLinks={navLinks} backColor='#34495e'/>
      <Slider backColor='#34495e'/>
      <div className="content">
        <Card title='Who we are'/>
        <Card title='Who we are'/>
        <Card title='Who we are'/>
      </div>
      <Footer navLinks={navLinks} backColor='#34495e'/>
    </div>
  );
}

export default App;
