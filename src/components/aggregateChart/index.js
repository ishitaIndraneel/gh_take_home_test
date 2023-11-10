import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid } from 'recharts';
import {filteredData, sum} from '../../utils'
import { useState, useEffect } from 'react';
import React from 'react';

/** Accepts the aggregates based on grade and displays a bar graph */
const Chart = (props) => {

    const { year, quarter, term, homeOwnership, bigData} = props
    const [aggregate, setAggregate] = useState()
    
    useEffect(()=>{
        const filteredDataResponse = filteredData(props.grades,bigData,year,homeOwnership,term,quarter)
        const totalSum = sum(filteredDataResponse)
        setAggregate(totalSum)
    },[props])

    const barDataArray = []
    const barDataInfo = props.grades.map((grade, i) => ({
            'Grade': grade,
            'Sum': aggregate && aggregate[i]
        
    }))

    const data = barDataInfo
 
    return (
        <BarChart width={600} height={600} data={data}>
            <Bar dataKey="Sum" fill=" #6699CC" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="Grade" />
            <YAxis />
        </BarChart>
    )
}
export default Chart