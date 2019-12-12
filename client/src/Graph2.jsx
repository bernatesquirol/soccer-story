import React from 'react';
import { Vega } from 'react-vega';

const spec = require('./data/Graph1.json')

export default (props)=>{
    return <Vega spec={spec} />
}