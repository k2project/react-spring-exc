import React, {useState,useEffect} from 'react'
import './Project4.scss'
import { useSpring, animated, config} from 'react-spring'

const calc = (x, y, z) => [x - window.innerWidth / 2, y - window.innerHeight / 2, z]
const trans1 = (x, y, z) => `translate3d(${x/10}px,${y/10}px,${z}px)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Project4 = () => {
    const style = useSpring({
        to: [ {width:'100%'},{left:'100%'},{top:'100%', config:{duration:10}}, {left:'0%', config:{duration:10}},{background:'orange'},{top:'0%', config:config.default}],
        from: { width:'0%', left:'0%', top:'0%', background:'yellow'},

    });
     return (
        <div className="Project Project4">
             <animated.span  style={style}>chained <br/> anim</animated.span>
        </div>
     )
};
export default Project4;
