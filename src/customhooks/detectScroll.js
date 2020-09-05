import { useState, useEffect } from 'react';


const useScroll = prop => {

    const [scrollPos, setScrollPos] = useState(0);
    const [barVisi, setBarVisi] = useState(1);

    useEffect(() => {
        window.onscroll = (e) => {
            let diff = window.pageYOffset - scrollPos;
            (diff>=20)?
                setBarVisi(0):
                (diff<=-50)?setBarVisi(1):setBarVisi(barVisi)
            setScrollPos(window.pageYOffset);
            if(window.pageYOffset===0)setBarVisi(1)
            // console.log(window.pageYOffset);
        }
    });

    return [scrollPos, barVisi];

    // const [scrollPos, setScrollPos] = useState(0);

    // useEffect(() => {
    //     window.onscroll = (e) => {
    //         let diff = window.pageYOffset - scrollPos;
    //         (diff>=20)?
    //             return 1:
    //             (diff<=-50)?return 1:return prop
    //         setScrollPos(window.pageYOffset);
    //         if(window.pageYOffset===0)return 1
    //     }
    // });
}

export default useScroll;

