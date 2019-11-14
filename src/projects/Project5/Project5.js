import React, {useState, useEffect} from 'react';
import './Project5.scss';
import {useSpring, animated, useTrail} from 'react-spring';

function Project5(){
    const [toggled, setToggled] = useState(false);
    const [list, setList] = useState(['P','R','i','D','E']);


    const trail = useTrail(list.length, {
            from:{x:0},
            to:{x:toggled? 1: 0},
            config:{duration:3000}
    })



    return(
        <div className= "Project Project5" onClick={()=>setToggled(t=>!t)}>
            <div>
                {trail.map((props, index) => {
                    return (
                      <animated.span
                        key={list[index]}
                        style={{
                            transform:props.x
                            .interpolate({range:[0,.1,.3, .5,1],output:[1,.8,1.5,1,1]})
                            .interpolate(x=>`scale(${x})`),
                            opacity:props.x.interpolate({range:[0,1],output:[0.2,1]}),
                            color:props.x.interpolate({range:[0,.2,.4,.6,.8,1],output:['grey', '#004AF2', '#027A27', '#F3E200', '#F71B3C', '#111']}),

                        }}
                        className="list"
                      >
                        {list[index]}
                    </animated.span>
                    )
                  })
                }
            </div>

        </div>
    )
}

export default Project5;
