import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import {filteredData, sum} from '../../utils'

/**Table component accepts the dropdown selections as props. The selections are stored in redux state. It calculates the grade based aggregate based on the api response*/
const TableView = (props)=> {
    const { year, quarter, term, homeOwnership, bigData} = props
    const [aggregate, setAggregate] = useState()
    const classes = useStyles()
    
    useEffect(()=>{
        /** filteredData function returns an array of arrays. There is an array for each grade where the data matches the selected dropdown options. */
        const filteredDataResponse = filteredData(props.grades,bigData,year,homeOwnership,term,quarter)
        /** sum function returns an array of aggregate of current balance for each grade */
        const totalSum = sum(filteredDataResponse)
        setAggregate(totalSum)
    },[props])
    
    return (
        <table className={classes.tableStyles}>
            <thead>
                <tr>
                {props.grades.map((grade) => <th key={grade} className={classes.tableStyles}>Grade {grade}</th>) }
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tableStyles}>
                    {
                        /** Iterate through the array of aggregates */
                        aggregate?.map((elem,index) => {
                            return <td className={classes.tableStyles} key={index}>${elem?.toFixed(2)}</td>
                        })
                    }
                   
                </tr>
            </tbody>
            
        </table>
    )
}
export default TableView

