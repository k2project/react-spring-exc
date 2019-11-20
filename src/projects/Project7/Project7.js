import React, {useState, useEffect} from 'react';
import './Project7.scss';
import { animated, useSprings,useSpring,config} from 'react-spring';
import {Keyframes} from 'react-spring/renderprops'


function Project7(){
    const dots = [
        {
            color:'#F3F29A',
        },
        {
            color:'#FF8A0C',
        },
        {
            color:'#3DBADB',
        },
        {
            color:'#70DFA6',
        },
        {
            color:'#CE61A2',
        },

    ]
    const interp = i => r =>{
        if(i% 2){
            return  `translate3d(0, ${10 * Math.sin(r + ( 2 * Math.PI))}px, 0)`
        }
        return  `translate3d(0, ${5 * Math.sin(r + (3 * Math.PI))}px, 0)`
    }
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
                    background:dots[i].color,
                    transform: radians.interpolate(interp(i))
                }} />)}

            </div>
        </div>
    )
}

export default Project7;
