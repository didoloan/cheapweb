import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
import Slider from './components/slider';
// import logo from './logo.svg';
import './App.css';

function App() {
  const navLinks = ['Home','About', 'Blog', 'FAQ','Gallery'];

  const [back, front] = ['#fff', '#34495e'];

  return (
    <div className="App">
      <Navbar navLinks={navLinks} backColor={back} frontColor={front}/>
      <Slider backColor='#fff'/>
      <div className="content">
        <Card title='Who we are'/>
        <Card title='Who we are'/>
        <Card title='Who we are'/>
      </div>
      <Footer navLinks={navLinks} backColor={back} frontColor={front}/>
    </div>
  );
}

export default App;
