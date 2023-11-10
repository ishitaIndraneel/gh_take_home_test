import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {filteredData, sum} from '../../utils'
import { useState, useEffect } from 'react';
import React from 'react';

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

    return ( 
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={barDataArray}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Grade" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sum" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
        </ResponsiveContainer>
    )

}
export default Chart