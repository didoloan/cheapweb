import React, { useState, useEffect } from 'react';


function Slider(props) {
    const images = ['https://images.pexels.com/photos/1191503/pexels-photo-1191503.jpeg?cs=srgb&dl=low-angle-photography-of-man-and-woman-in-front-of-tree-1191503.jpg&fm=jpg','https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?crop=entropy&cs=srgb&dl=woman-in-white-polo-shirt-holding-a-pen-near-laptop-3765175.jpg&fit=crop&fm=jpg&h=853&w=1280','https://images.pexels.com/photos/3373352/pexels-photo-3373352.jpeg?cs=srgb&dl=photo-of-people-sitting-beside-cactus-plant-3373352.jpg&fm=jpg'];

    const [imgIndex, setIndex] = useState(0);
    const switchSlide = (dir) => {
        dir?
        (imgIndex<2)?
            setIndex(imgIndex+1):setIndex(0)
        :
        (imgIndex>0)?
            setIndex(imgIndex-1):setIndex(2)
    }

    // const porc = setInterval(switchSlide, 1000);

    const viewStyle = {
        display: 'flex',
        alignItems:'center',
        width:'100%',
        height:400,
        overflow:'hidden',
        position: 'relative',
        // background: `url(${images[imgIndex]}) no-repeat`,
        backgroundSize: 360
    }

    const prevnext = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        // backgroundColor: props.backColor,
        width: 30,
        height: 30,
        opacity:.6,
        transition:.5,
        fontWeight: 800,
        color: '#ccc'
    }

    const enterLeave = {
        enter: (e) => {
            e.target.style.opacity = 1;
            e.target.style.color = '#fff';
        },
        leave: (e) => {
            e.target.style.opacity = 0.6;
            e.target.style.color = '#ccc'
        }
    }

    return (
        <div style={viewStyle}>
            <img src={images[imgIndex]} width='100%' height='auto'/>
            <div onClick={() => switchSlide(0)} style={{...prevnext, left:30}} onMouseEnter={enterLeave.enter} onMouseLeave={enterLeave.leave}><i class="fas fa-caret-left fa-3x"></i></div>
            <div onClick={() => switchSlide(1)} style={{...prevnext, right:30}} onMouseEnter={enterLeave.enter} onMouseLeave={enterLeave.leave}><i class="fas fa-caret-right fa-3x"></i></div>
        </div>
    );
}


export default Slider;