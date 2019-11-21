import React, {useState, useEffect} from 'react';
import './Project8.scss';
import { animated, useTransition} from 'react-spring';


function Project7(){

    const chart1 = [
        [10,50,25],
        [20,25,35],
        [45,20],
        [45,20],
    ]
    const chart2 = [
        [10,50,25],
        [30,25,35],
        [45,20],

    ]
    const data = {
        chart1,
        chart2
    }

    const [currentChart, setCurrentChart] = useState('chart1')
    const years = Object.keys(data).map(y => <button key={y} onClick={()=> setCurrentChart(y)}>{y}</button>)

    // const monthTransitions = useTransition(data[currentYear][i], item => item.key, {
    // from: { transform: 'translate3d(0,-40px,0)' },
    // enter: { transform: 'translate3d(0,0px,0)' },
    // leave: { transform: 'translate3d(0,-40px,0)' },
    // })
    // const monthData = monthTransitions.map(({ item, props, key }) =>
    // <animated.div key={key} style={props}>{item.text}</animated.div>
    // )

    const chart = useTransition(data[currentChart], item => item.key, {
        from: { width: '0%' },
        enter: { width: '100%'},
        leave: { width: '0%' },
        config:{
            duration:1000
        }
    })

    return(
        <div className= "Project Project8" >
            <div className="Project8_years">
                {years}
            </div>
            <div className="Project8_chart">
                {chart.map(({ item, props, key }) =>
                <animated.div  className="Project8_month" key={key} style={props}></animated.div>
                )}
            </div>
        </div>
    )
}

export default Project7;
