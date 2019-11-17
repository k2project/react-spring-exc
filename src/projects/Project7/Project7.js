import React, {useState, useEffect} from 'react';
import './Project7.scss';
import {useSpring, animated, useTrail,config } from 'react-spring';

function Project7(){
    const circles = [
        '#F3F29A',
        '#3DBADB',
        '#70DFA6',
        '#CE61A2',
    ]

    const trail = useTrail(circles.length, {
            from:{top:'50px'},
            to: async (next)=>{
                await next ({top:'-50px'})
                await next ({top:'0px'})
            },
            reset:true,
    })



    return(
        <div className= "Project Project7" >
            <div>
                {trail.map((props,i)=>{
                    return(
                        <animated.span key={'circle-p7-'+i} style={{
                            ...props,
                            background:circles[i],
                        }} />
                    )
                })}
            </div>
        </div>
    )
}

export default Project7;
