import React, {useState, useEffect} from 'react';
import './Project6.scss';
import {useSpring, animated, useTrail,config } from 'react-spring';

function Project6(){
    const [toggled, setToggled] = useState(false);
    const [list, setList] = useState(['S','P','R','i','N','G']);

    const animState = [
        //s
        {
            top:{
                range:[0,.1,.3, .5,.7,.8,.9,1],
                output:[0,-50,30,-20,10,0,0]
            },
            opacity:{
                range:[0,.7],
                output:[0,1,]
            },
            color:{
                range:[0,.8,1],
                output:['#111','#111','#ff5454']
            }

        },
        //p
        {
            top:{
                range:[0,.2,.7, .8,1,],
                output:[-270,20,-30,0,0]
            },
            opacity:{
                range:[0,1],
                output:[0,1]
            },
            color:{
                range:[0,.8,1],
                output:['#111','#111','#FF6D6D']
            }
        },
        //r
        {
            top:{
                range:[0,.1,.5,.9,1],
                output:[0,-100,30,0,0]
            },
            opacity:{
                range:[0,1],
                output:[0,1]
            },
            color:{
                range:[0,.8,1],
                output:['#111','#111','#ff8787']
            }
        },
        //i
        {
            top:{
                range:[0,.1,.5,.8,.9,1],
                output:[-200,30,-50,-20,0,0]
            },
            opacity:{
                range:[0,1],
                output:[0,1]
            },
            color:{
                range:[0,.8,1],
                output:['#111','#111','#ff8787']
            }
        },
        //n
        {
            top:{
                range:[0,.3,.6,.8,.9,1],
                output:[-50,30,-20,10,0,0]
            },
            opacity:{
                range:[0,1],
                output:[0,1,]
            },
            color:{
                range:[0,.8,1],
                output:['#111','#111','#ffa0a0']
            }
        },
        //g
        {
            top:{
                range:[0,.1,.3, .5,1],
                output:[0,-50,30,0,0]
            },
            opacity:{
                range:[0,1],
                output:[0,1]
            },
            color:{
                range:[0,.8,1],
                output:['#111','#111','#ffbaba']
            }
        },
    ]

    const trail = useTrail(list.length, {
            from:{x:0},
            x:toggled? 1: 0,
            config:{
                duration:2000,
                gentle:true,
            }
    })

    const spring = trail.map((props, index) => {
        return (
          <animated.span
            key={list[index]}
            style={{
                // transform:props.x
                // .interpolate({range:[0,.1,.3, .5,1],output:[1,.8,1.5,1,1]})
                // .interpolate(x=>`scale(${x})`),
                top:props.x.interpolate(animState[index].top)
                    .interpolate(x=>`${x}px`),
                opacity:props.x.interpolate(animState[index].opacity),
                color:props.x.interpolate(animState[index].color),


            }}
            className="list"
          >
            {list[index]}
        </animated.span>
        )
    });

    return(
        <div className= "Project Project6" onClick={()=>setToggled(t=>!t)}>
            <div>
                <div className="text">
                    {spring}
                </div>
                <div className="shadow">
                    {spring}
                </div>
            </div>

        </div>
    )
}

export default Project6;
