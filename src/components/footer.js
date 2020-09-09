import React, {useState, useEffect} from 'react';
import useDevice from '../customhooks/detectDevice';
import {navigate} from 'hookrouter';
import { address, phoneNumbers, siteName, social,  email} from '../data/siteinfo';

function Footer(props) {

    const matches = useDevice(768);

    const footerStyle = {
        padding: 30,
        backgroundColor: '#ddd',
        margin: 0,
        boxSizing: 'border-box'
    }

    const linkContainerStyle = {
        container: isMobile => ({
            display:'flex', 
            justifyContent:'space-between',
            flexWrap: 'wrap',
            padding: 20,
            boxSizing: 'border-box',
            marginRight: isMobile?0:200,
            textAlign: 'center'
        })
    }

    const linkStyle = {
        container: isMobile => ({
            width: isMobile?'100%':300,
            height: 'auto',
            textAlign: 'left'
        })
    }

    const linkHeader = {
        color: props.frontColor,
        fontSize: '1.3em',
        fontWeight: 600,
        
    }

    return (
        <div style={{...footerStyle, width: '100%'}}>
            <div style={linkContainerStyle.container(matches)}>
                <div style={linkStyle.container(matches)}>
                    <h1 style={linkHeader}>CONTACT US</h1>
                    <ul style={{listStyleType:'none',padding:0,color:'#fff'}}>
                        <li style={{paddingTop:10, color: '#736b6b'}}><i className="fas fa-map-marker-alt"></i>&nbsp; {address}</li>
                        <li style={{paddingTop:10, color: '#736b6b'}}><i className="fas fa-envelope"></i>&nbsp; {email}</li>
                        <li style={{paddingTop:10, color: '#736b6b'}}><i className="fas fa-phone-alt"></i>&nbsp; {phoneNumbers.map(number => <a style={{textDecoration:'none'}} href={`tel:${number}`}>{number}&nbsp;</a>)} </li>
                    </ul>
                </div>
                <div style={linkStyle.container(matches)}>
                    <h1 style={linkHeader}>QUICK LINKS</h1>
                    <ul style={{listStyleType:'none',padding:0,color:'#fff'}}>
                        {props.navLinks.map((link,index) => <li key={index} onClick={() => setTimeout(navigate(link.route))} style={{paddingTop:10, cursor:'pointer', color: '#736b6b'}}><i className="fas fa-angle-right"></i>&nbsp;{link.title}</li>)}
                    </ul>
                </div>
                <div style={linkStyle.container(matches)}>
                    <h1 style={linkHeader}>NEWSLETTER</h1>
                    <p style={{color:'#736b6b'}}>Join our newsletter to receive latest news and updates from us.</p>
                    <input type='email' placeholder='Your email here' style={{display:'block', height:40, width:'100%', border:0, textIndent:10, fontSize:'1em', margin:0, fontWeight:500}}/>
                    <div style={{marginTop:20}}>
                        <h1 style={linkHeader}>Follow us on:</h1>
                        <a href={social.facebook} target='_blank' rel="noopener noreferrer">
                            <i style={{marginRight:15,color:'blue'}} class="fab fa-facebook-square fa-2x"></i>
                        </a>
                        <a href={social.twitter} target='_blank' rel="noopener noreferrer">
                            <i style={{marginRight:15,color:'blue'}} class="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href={social.instagram} target='_blank' rel="noopener noreferrer">
                            <i style={{marginRight:15,color:'#d23b98'}} class="fab fa-instagram fa-2x"></i>
                        </a>
                    
                    </div>
                
                </div>
                
            </div>
            <div>
                <p style={{textAlign:'center', color:props.frontColor}}>Copyright&copy; {new Date().getFullYear()}&nbsp;{siteName} All Rights Reserved.</p>
            </div>
            
        </div>
    );
}

export default Footer;