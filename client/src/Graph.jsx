import React from 'react';
import { Vega } from 'react-vega';

const dict=[
    require("./data/Graph1.json"),
    require("./data/Graph2.json"),
    require("./data/Graph3.json"),
    require("./data/Graph4.json")
]

export default (props)=>{    
    return <Vega spec={dict[props.id]} />
}