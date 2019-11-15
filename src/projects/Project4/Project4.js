import React, {useState,useEffect} from 'react'
import './Project4.scss'
import { useSpring, animated, config} from 'react-spring'


const Project4 = () => {
    const style = useSpring({
        to: [ {width:'100%'},{left:'100%'},{top:'100%', config:{duration:10}}, {left:'0%', config:{duration:10}},{background:'orange'},{top:'0%', config:config.default},{top:'-100%'},{background:'skyblue'}, {top:'0%'}],
        from: { width:'0%', left:'0%', top:'0%', background:'yellow'},

    });
     return (
        <div className="Project Project4">
             <animated.span  style={style}>Chained <br/> Anim</animated.span>
        </div>
     )
};
export default Project4;
