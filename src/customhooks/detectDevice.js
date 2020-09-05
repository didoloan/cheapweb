import { useState, useEffect } from 'react';


const useDevice = (props) => {
    const mediaMatch = window.matchMedia(`(max-width: ${props}px)`);

    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });
    return matches;
}

export default useDevice;