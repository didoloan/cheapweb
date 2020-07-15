import React, {useEffect, useState} from 'react';
import crdimg from '../act1.jpg';

function Card(props) {
    const mediaMatch = window.matchMedia('(max-width: 768px)');

    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    })

    return (
        <div style={cardStyle.container(matches)}>
            <img src={crdimg} height='auto' width='100%'/>
        </div>
    );
}

const imgStyle = {
    backgroundImage: 'url(../src/act1.jpg)',
    height:'50%',
    width: '100%'
}

const cardStyle = {
    container: isRowBased => ({
        width: isRowBased?'100%':360,
        overflow: 'hidden',
        height: 500,
        padding: 0,
        borderRadius: '6px 6px 0 0',
        marginBottom: 50,
        boxShadow: '0 5px 12px #ccc',
        textAlign: 'center',
        boxSizing: 'border-box'
    })
}

export default Card;