import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';

function Navbar(props) {

    const wrdz = ['L', 'O', 'G', 'O'];

    const [wrdIndex, setWrdIdx] = useState(0);
    const [logo,setLogo] = useState('');

    const addNextWrd = () => {
        if(wrdIndex===3){
            setLogo('LOGO');
        }else{
            if(wrdIndex<3){
                setLogo(logo+wrdz[wrdIndex]);
                setWrdIdx(wrdIndex+1);
            }
        }
    }


    
    
    const mediaMatch = window.matchMedia('(max-width: 768px)');

    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    useEffect(() => {
        const mvmt = setInterval(() => addNextWrd(),200);
        return () => clearInterval(mvmt);
    })

    
    const navbarStyle = {
        position: 'relative',
        height: matches?60:100,
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
            // overflow:'hidden',
            textAlign: 'left',
            width: isMobile?'100%':'auto',
            padding: isMobile?'0 40px 0 40px':0,
            display: isMobile?'block':'flex',
            zIndex: 2,
            alignItems: 'center',
            listStyleType: 'none',
            position: isMobile?'absolute':'initial',
            right: navState?0:'-100%',
            top: 40,
            backgroundColor: props.backColor,
            transition: '.5s',
            boxSizing: 'border-box'
        })
    }
    // const [navLinkHover, setHover] = useState(false);
    const enterLeave = {
        enter: (e) => {
            // e.target.style.backgroundColor='#ddd';
            e.target.style.color='#777';
            // e.target.style.textDecoration='underline';
            // (e.target.children.length!==0)?e.target.children[1].style.display = 'block':console.log('');
        },
        leave: (e) => {
            // e.target.style.backgroundColor='transparent';
            e.target.style.color=props.frontColor;
            // e.target.style.textDecoration='none';
            // (e.target.children.length!==0)?e.target.children[1].style.display = 'none':console.log('');
        }
    }

    const toggleNextSibling = (e) => {
        e.stopPropagation();
        (e.target.nextElementSibling.style.display==='none')?e.target.style.transform = 'rotate(180deg)':e.target.style.transform = 'rotate(0deg)';
        e.target.nextElementSibling.style.display = (e.target.nextElementSibling.style.display==='none')?'block':'none';
    }

    const navItem = {
        display: matches?'block':'inline-block',
        padding: '5px 12px',
        marginLeft: 0,
        color: props.frontColor,
        fontSize: '1.4em',
        fontWeight: 400,
        cursor: 'pointer',
        transition: '.5s',
        position: 'relative'
    }

    const burger = {
        container: isMobile => ({
            alignItems: 'center',
            display: isMobile?'grid':'none',
            // gridGap: 5,
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
        backgroundColor:props.frontColor,
        margin: 0,
        padding:0,
        // transformOrigin: '50% 50%',
        transition: '.5s',
    }

    const subStyle = {
        container: isMobile => ({
            position: isMobile?'inherit':'absolute',
            top: isMobile?0:30,
            padding: isMobile?0:'10px 0 0 0',
            listStyleType:'none',
            left: 0,
            width: '100%',
            margin:0,
            boxSizing: 'border-box',
            backgroundColor: props.backColor,
            display:'none',
            transition:'.5s'
        })
        
    }

    const subItemStyle = {
        container: isMobile => ({
            display: 'block',
            padding: isMobile?'2px 0':'2px 12px'
        })
    }

    const [navState, setNavState] = useState(0);

    return (
        <div style={navbarStyle}>
            <div style={{backgroundColor:'#fff', width: 'auto', padding:11, margin:0}}>
                <h1 style={{margin:0,padding:0}}>{logo}</h1>
            </div>
            
            <ul style={navStyle.container(matches)}>
                {props.navLinks.map(link => <li style={navItem} onClick={() => {setTimeout(navigate(link.route),0);setNavState(0);}} onMouseEnter={enterLeave.enter} onMouseLeave={enterLeave.leave}>{link.title}&nbsp;{link.sub?<i style={{textDecoration:'none', transition:'.5s'}} onClick={toggleNextSibling} className="fas fa-angle-down"></i>:''}
                    {link.sub?<ul style={subStyle.container(matches)}>
                        {link.sub.map(sub => <li style={subItemStyle.container(matches)} onClick={(e) => {setTimeout(navigate(link.route+sub.route),0);setNavState(0);e.target.parentElement.style.display='none';}} onMouseEnter={enterLeave.enter} onMouseLeave={enterLeave.leave}>{sub.title}</li>)}
                    </ul>:''}
                </li>)}
            </ul>

            <div style={burger.container(matches)} onClick={() => setNavState(!navState)}>
                <div style={{...barStyle, transform:navState?'rotate(48deg) translateY(15px)':'rotate(0deg) translateY(0)'}}></div>
                <div style={{...barStyle, opacity:navState?0:1}}></div>
                <div style={{...barStyle, transform:navState?'rotate(-48deg) translateY(-15px)':'rotate(0deg) translateY(0)'}}></div>
            </div>
        </div>
    );
}

export default Navbar;