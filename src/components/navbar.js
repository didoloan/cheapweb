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
        position: 'relative',
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
        boxSizing: 'border-box',
        alignItems: 'center'
    }
    const navStyle = {
        container: isMobile => ({
            overflow:'hidden',
            textAlign: 'left',
            width: isMobile?150:'auto',
            display: isMobile?'block':'flex',
            // zIndex: 2,
            alignItems: 'center',
            listStyleType: 'none',
            position: isMobile?'absolute':'initial',
            right: navState?0:'-150px',
            top: 80,
            backgroundColor: props.backColor,
            transition: '.5s',
            boxSizing: 'border-box'
        })
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
        display: matches?'block':'inline-block',
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
        container: isMobile => ({
            alignItems: 'center',
            display: isMobile?'grid':'none',
            gridGap: 5,
            gridTemplateColumns: '1fr',
            width: 40,
            height: 30,
            margin: 0, 
            padding: 0,
            cursor: 'pointer'
        })
    }

    const barStyle = {
        width:'100%', 
        height: '30%', 
        backgroundColor:'#fff',
        margin: 0,
        padding:0
    }

    const [navState, setNavState] = useState(0);

    return (
        <div style={navbarStyle}>
            <div style={{backgroundColor:'#fff', width: 'auto', padding:15, margin:'20px 20px 20px 0'}}>
                <h1 style={{margin:0}}>LOGO</h1>
            </div>
            
            <ul style={navStyle.container(matches)}>
                {navLinks.map(link => <li style={navItem} onMouseEnter={enterLeave.enter} onMouseLeave={enterLeave.leave}>{link}</li>)}
            </ul>

            <div style={burger.container(matches)} onClick={() => setNavState(!navState)}>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
            </div>
        </div>
    );
}

export default Navbar;