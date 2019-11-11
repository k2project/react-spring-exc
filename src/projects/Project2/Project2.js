import React, {useState, useEffect} from 'react';
import './Project2.scss';
import {useSpring, animated, useTrail} from 'react-spring';

function Project2(){
    const users = ['Batman', 'Spiderman', 'Hulk', 'IronMan'];
    const [toggled, setToggled] = useState(false);
    const [list, setList] = useState([]);

    const textStyle = useSpring({
        transform: toggled?'scale(0) rotate(360deg)' : 'scale(1) rotate(0deg)'
    })
    const trail = useTrail(list.length, {
        from: { marginLeft: -40, opacity: 0, transform: 'translate3d(0,-40px,0)' },
        to: { marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)' }
    })

    function handleClick(){
        if(!toggled){
            setList(users)
        }else{
            setList([])
        }
        setToggled(t=>!t)
    }


    return(
        <div className= "Project Project2">
            {!toggled && <animated.small style={textStyle}>Display List</animated.small>}
            {trail.map((props, index) => {
                return (
                  <animated.div
                    key={users[index]}
                    style={props}
                    className="list"
                  >
                    {users[index]}
                  </animated.div>
                )
              })
            }

            <button className="fixed" onClick={handleClick}>{toggled? 'Hide List': 'Show List'}</button>
        </div>
    )
}

export default Project2;
