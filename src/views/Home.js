import React from 'react';
import Card from '../components/card';
import Slider from '../components/slider';

function Home(props) {
    return (
        <div>
            <Slider backColor='#fff'/>
            <div className="content">
                <Card title='Who we are'/>
                <Card title='Who we are'/>
                <Card title='Who we are'/>
            </div>
        </div>
        
    );
}

export default Home;