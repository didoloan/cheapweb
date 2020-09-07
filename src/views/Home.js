import React from 'react';
import Card from '../components/card';
import Slider from '../components/slider';
import cardData from '../data/carddata';

function Home(props) {
    return (
        <div style={{transition:'.5s'}}>
            <Slider backColor='#fff'/>
            <div className="content">
                {cardData().map(card => <Card title={card.title} text={card.text} frontColor='#34495e'/>)}
            </div>
        </div>
        
    );
}

export default Home;