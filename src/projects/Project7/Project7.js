import React, {useState, useEffect} from 'react';
import './Project7.scss';
import { animated, useSprings,useSpring,config} from 'react-spring';
import {Keyframes} from 'react-spring/renderprops'


function Project7(){
    const dots = [
        {
            color:'#F3F29A',
            delay: 0,
        },
        {
            color:'#3DBADB',
            delay: 1000,
        },
        {
            color:'#70DFA6',
            delay:2000,
        },
        {
            color:'#CE61A2',
            delay:3000,
        },

    ]

    const springs = useSprings(dots.length, dots.map(item=>({
        from:{
            background:item.color,
            top: '0px',
        },
        to:async (next) => {
            await next({top:'50px'})
            await next({top:'0px'})
            await next({top:'50px'})
            await next({top:'0px'})
            await next({top:'-50px'})


        },
        config:{
        },
            // await next({ opacity: 1, from: { opacity: 0 }, reset: true })
    })));



    return(
        <div className= "Project Project7" >
            <div>
                {springs.map(props=><animated.span style={props} />)}

            </div>
        </div>
    )
}

export default Project7;
