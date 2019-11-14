import React, {useState, useEffect} from 'react';
import './Project7.scss';
import {useSpring, animated, useTrail,config } from 'react-spring';

function Project7(){
    const [clicked, setClicked] = useState(false);

    const trail = useTrail(12, {
            from:{x:0},
            x:clicked? 1: 0,
            config:{
                duration:3000,
                gentle:true,
            }
    })

    const rays= trail.map((props, index) => {
        return (
          <animated.span
            key={'ray'+index}
            style={{
                // transform:props.x
                // .interpolate({range:[0,.1,.3, .5,1],output:[1,.8,1.5,1,1]})
                // .interpolate(x=>`scale(${x})`),
                // transform:props.x
                // .interpolate({range:[0,1],output:['0','-100' ]})
                // .interpolate((x)=>`translate3d(${x}px, 50px, 0px)`),
                // transform:props.x
                // .interpolate({range:[0,1],output:[[2,25],[1,50]]})
                // .interpolate([x,y],(x,y)=>console.log(y)),
                // transform:props.x
                // .interpolate({range:[0,1],output:[[0,0],[250, -50]]})
                // .interpolate(([x,y])=>`translate3d(${x}px, ${y}px, 0px)`),
                color:props.x.interpolate({range:[0,.2,.4,.6,.8,1],output:['grey', '#004AF2', '#027A27', '#F3E200', '#F71B3C', '#111']}),
            }}
          >
            {index}
        </animated.span>
        )
    });

    return(
        <div className= "Project Project7" onClick={()=>setClicked(true)}>
            {rays}
            {clicked.toString()}
        </div>
    )
}

export default Project7;
