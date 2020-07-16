import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar backColor='#34495e'/>
      <div className="content">
        <Card title='Who we are'/>
        <Card title='Who we are'/>
        <Card title='Who we are'/>
      </div>
      <Footer backColor='#34495e'/>
    </div>
  );
}

export default App;
