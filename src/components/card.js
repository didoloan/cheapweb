import React, { useEffect, useState } from 'react';
import crdimg from '../act1.jpg';
import useDevice from '../customhooks/detectDevice';
import './card.css'

function Card(props) {

    const matches = useDevice(768);

    const [isOver, setOver] = useState(0);

    return (
        <div style={cardStyle.container(matches)}>
            <div style={imgHolder.container(isOver)} onMouseEnter={() => setOver(1)} onMouseLeave={() => setOver(0)}>
            </div>
            <div>
                <h2 style={{ width: '100%', top: '40%', marginBottom:0, textAlign: 'center', color:'black' }}>{props.title}</h2>
                <p style={{ padding: 15, margin:0}}>{props.text}</p>
            </div>
        </div>
    );

}

const imgHolder = {
    container: over =>
        ({
            backgroundImage: `url(${crdimg})`,
            backgroundSize: 'cover',
            height: '50%',
            display: 'flex',
            alignItems: 'center',
            transition: '1s'
        })
};

const cardStyle = {
    container: isRowBased => ({
        width: isRowBased ? '100%' : 360,
        overflow: 'hidden',
        height: 300,
        padding: 0,
        borderRadius: 6,
        marginBottom: 50,
        boxShadow: '0 0 16px hsl(0, 0%, 80%)',
        textAlign: 'center',
        boxSizing: 'border-box'
    })
}

export default Card;