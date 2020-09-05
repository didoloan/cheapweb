import React, {useEffect, useState} from 'react';
import crdimg from '../act1.jpg';
import useDevice from '../customhooks/detectDevice';

function Card(props) {
    const matches = useDevice(768);

    return (
        <div style={cardStyle.container(matches)}>
            <div style={{position:'relative'}}>
                <img src={crdimg} alt='what we do' height='auto' width='100%'/>
                <h1 style={{position:'absolute',zIndex:3, width:'100%', top:'40%', textAlign:'center', color:'#fff'}}>{props.title}</h1>
                <p>Et proident eu culpa ut dolor laborum veniam ad ullamco do voluptate it est et. </p>
            </div> 
            
        </div>
    );
}


const cardStyle = {
    container: isRowBased => ({
        width: isRowBased?'100%':360,
        overflow: 'hidden',
        height: 400,
        padding: 0,
        borderRadius: 6,
        marginBottom: 50,
        boxShadow: 'hsl(0, 0%, 80%) 0 0 16px',
        textAlign: 'center',
        boxSizing: 'border-box'
    })
}

export default Card;