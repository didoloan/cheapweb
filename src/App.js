import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import logo from './logo.svg';
import './App.css';
import RouterView from './components/routerView';
import navLinks from './data/navdata';


function App() {
  
  const [back, front] = ['#fff', '#34495e'];

  return (
    <div className="App">
      <Navbar navLinks={navLinks()} backColor={back} frontColor={front}/>
      <RouterView/>
      <Footer navLinks={navLinks()} backColor={back} frontColor={front}/>
    </div>
  );

}

export default App;