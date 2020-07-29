import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
// import logo from './logo.svg';
import './App.css';
import RouterView from './components/routerView';


function App() {
  const navLinks = [
    {title:'Home', route:'/', sub:null},
    {title:'About', route:'/about', sub:[{title:'Company',route:'/company'}, {title:'Business',route:'/business'}]}, 
    {title:'Blog', route:'/blog', sub:[{title:'Found',route:'/found'}, {title:'Lost',route:'/lost'}, {title:'Tried', route:'/tried'}]}, 
    {title:'FAQ', route:'/FAQ', sub:null},
    {title:'Gallery', sub:null}
  ];

  

  const [back, front] = ['#fff', '#34495e'];

  return (
    <div className="App">
      <Navbar navLinks={navLinks} backColor={back} frontColor={front}/>
      <RouterView/>
      
      <Footer navLinks={navLinks} backColor={back} frontColor={front}/>
    </div>
  );
}

export default App;
