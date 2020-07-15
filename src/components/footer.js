import React from 'react';
function Footer(props) {
    let footerStyle = {
        height: 500,
        padding: 30,
        backgroundColor: props.backColor,
        margin: 0,
        boxSizing: 'border-box'
    }
    return (
        <div style={{...footerStyle, width: '100%'}}>
            <div>

            </div>
            <p>Copyright&copy; {new Date().getFullYear}. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;