import React, {useState, useEffect} from 'react';
import './Project7.scss';
import { animated, useSprings,useSpring,config} from 'react-spring';
import {Keyframes} from 'react-spring/renderprops'


function Project7(){
    const dots = [
        '#F3F29A',
        '#FF8A0C',
        '#3DBADB',
        '#70DFA6',
        '#CE61A2',

    ]
    const interp = i => r =>  `translate3d(0, ${10 * Math.sin(r + ( i/3 * Math.PI))}px, 0) `;
    const {radians} = useSpring({
        from:{
            radians:0,
        },
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI })
        },
        config: {
            duration: 1000
        },
        reset: true,

    });



    return(
        <div className= "Project Project7" >
            <div>
                {dots.map((dot,i)=><animated.span key={'dot_'+i} style={{
                    background:dot,
                    transform: radians.interpolate(interp(i))
                }} />)}

            </div>
            <p>Loading...</p>
        </div>
    )
}

export default Project7;
