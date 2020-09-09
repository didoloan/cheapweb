import React from 'react';
import Card from '../components/card';
import Slider from '../components/slider';
import cardData from '../data/carddata';
import detectDevice from '../customhooks/detectDevice';
import '../App.css';

function Home(props) {

    const isMobile = detectDevice(768);

    return (
        <div style={{transition:'.5s'}}>
            <Slider backColor='#fff'/>
            <div className="content">
                <h1 style={{textAlign:isMobile?'center':'center', width:'100%'}}>What We Do</h1>
                {cardData()[1].map(card => <Card title={card.title} text={card.text} frontColor='#34495e'/>)}
            </div>
            <div className="content">
                <h1 style={{textAlign:isMobile?'center':'center', width:'100%'}}>Who We Are</h1>
                {cardData()[0].map(card => <div className='grid2'><div style={{backgroundImage:`url(${card.image})`, width:300,height:120, backgroundSize:'cover'}}></div><div style={{width:360}}><h2>{card.title}</h2><p>{card.text}</p></div></div>)}
            </div>
        </div>
        
    );
}

export default Home;