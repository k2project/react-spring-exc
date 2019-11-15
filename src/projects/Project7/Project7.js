import React, {useState, useEffect} from 'react';
import './Project7.scss';
import {useSpring, animated, useTrail,config } from 'react-spring';

function Project7(){
    const circles = [
        '#3DBADB',
        '#70DFA6',
        '#BD5352',
        '#CE61A2',
        '#F3F29A',
        '#DC9364',
    ]
    const [rotating, setRotating] = useState(true);

    const trail = useTrail(12, {
            from:{x:0},
            to:{x:0}
    })



    return(
        <div className= "Project Project7" >

        </div>
    )
}

export default Project7;
