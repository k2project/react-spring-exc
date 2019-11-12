import React, {useState} from 'react';
import './Project1.scss';
import {useSpring, animated, interpolate} from 'react-spring';

function Project1(){
    const [toggled, setToggled] = useState(false);
    const alertStyle = useSpring({
        opacity: toggled? 1 : 0,
        transform: toggled? 'scale(1)' : 'scale(2)'
    })
    const textStyle = useSpring({
        transform: toggled?'scale(0)' : 'scale(1)'
    })
    return(
        <div className= "Project Project1">
            {!toggled && <animated.small style={textStyle}>Press the button.</animated.small>}
            {toggled && <animated.div style={alertStyle} className= "alert">
                Hello, world!
            </animated.div>}

            <button onClick={()=>setToggled(t=>!t)}>Toggle Alert</button>
        </div>
    )
}

export default Project1;
