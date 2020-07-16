import React, {useState, useEffect} from 'react';

function Footer(props) {

    const mediaMatch = window.matchMedia('(max-width: 768px)');

    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    const footerStyle = {
        padding: 30,
        backgroundColor: props.backColor,
        margin: 0,
        boxSizing: 'border-box'
    }

    const linkContainerStyle = {
        display:'flex', 
        justifyContent:'space-between',
        flexWrap: 'wrap',
        padding: 20
    }

    const linkStyle = {
        container: isMobile => ({
            width: isMobile?'100%':300,
            height: 'auto',
            textAlign: 'left'
        })
    }

    const linkHeader = {
        color: '#ffffff',
        fontSize: '1.3em',
        fontWeight: 600,
        
    }

    const navLinks = ['Home','About','FAQ','Gallery'];

    return (
        <div style={{...footerStyle, width: '100%'}}>
            <div style={linkContainerStyle}>
                <div style={linkStyle.container(matches)}>
                    <h1 style={linkHeader}>CONTACT US</h1>
                    <ul style={{listStyleType:'none',padding:0,color:'#fff'}}>
                        <li style={{paddingTop:10}}><i class="fas fa-map-marker-alt"></i>&nbsp; In ullamco do deserunt culpa commodo consequat labore tempor.</li>
                        <li style={{paddingTop:10}}><i class="fas fa-phone-alt"></i>&nbsp; 08000000000, 07077776666</li>
                    </ul>
                </div>
                <div style={linkStyle.container(matches)}>
                    <h1 style={linkHeader}>QUICK LINKS</h1>
                    <ul style={{listStyleType:'none',padding:0,color:'#fff'}}>
                        {navLinks.map(link => <li style={{paddingTop:10}}><i class="fas fa-angle-right"></i>&nbsp;{link}</li>)}
                    </ul>
                </div>
                <div style={linkStyle.container(matches)}>
                    <h1 style={linkHeader}>NEWSLETTER</h1>
                    <p style={{color:'#fff'}}>Nostrud ea reprehenderit sit in in consectetur ad ea veniam. Velit cupidatat ea duis qui adipisicing sint irure. Officia nulla Lorem voluptate sint nulla. Laborum nulla cillum est veniam. Labore anim ut sint ullamco commodo nostrud sit laboris ut pariatur laborum sit. Amet sunt mollit velit sint ullamco exercitation officia.</p>
                    <input type='text' placeholder='Your email here' style={{width:'100%', height:40, border:0, padding:10, textIndent:10, fontSize:'1.2em', fontWeight:500, borderRadius:20}}/>
                </div>
            </div>
            <div>
                <p style={{textAlign:'center', color:'#fff'}}>{new Date().getFullYear()}&copy;Copyright. All Rights Reserved.</p>
            </div>
            
        </div>
    );
}

export default Footer;