import React, { useState, useEffect } from 'react';

function Navbar(props) {
    const mediaMatch = window.matchMedia('(max-width: 768px)');

    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    })

    const navLinks = ['Home','About','FAQ','Gallery'];
    const navbarStyle = {
        overflow: 'hidden',
        height: 100,
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: props.backColor,
        color: props.color,
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0,
        boxShadow: '0 3px 8px #ccc',
        boxSizing: 'border-box'
    }
    const navStyle = {
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none'
    }
    // const [navLinkHover, setHover] = useState(false);
    const enterLeave = {
        enter: (e) => {
            e.target.style.backgroundColor='#ddd';
            e.target.style.color='#333';
        },
        leave: (e) => {
            e.target.style.backgroundColor='transparent';
            e.target.style.color='#fff';
        }
    }
    const navItem = {
        display: 'inline-block',
        padding: '5px 12px',
        marginLeft: 0,
        color: '#fff',
        fontSize: '1.4em',
        fontWeight: 400,
        cursor: 'pointer',
        transition: '.5s',
        '&:hover': {
            backgroundColor: '#ddd'
        }
    }

    const burger = {
        alignItems: 'center',
        display: 'grid',
        gridGap: 5,
        gridTemplateColumns: '1fr',
        width: 40,
        height: 30,
        margin: 0, 
        padding: 0
    }

    const barStyle = {
        width:'100%', 
        height: '30%', 
        backgroundColor:'#fff',
        margin: 0,
        padding:0
    }

    return (
        <div style={navbarStyle}>
            <div style={{backgroundColor:'#fff', width: 'auto', padding:15, margin:'20px 20px 20px 0'}}>
                <h1 style={{margin:0}}>LOGO</h1>
            </div>
            
            <ul style={navStyle}>
                {navLinks.map(link => <li style={navItem} onMouseEnter={enterLeave.enter} onMouseLeave={enterLeave.leave}>{link}</li>)}
            </ul>

            <div style={burger}>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
            </div>
        </div>
    );
}

export default Navbar;