import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import {filteredData, sum} from '../../utils'

const TableView = (props)=> {
    const { year, quarter, term, homeOwnership, bigData} = props
    const [aggregate, setAggregate] = useState()
    const classes = useStyles()
    
    useEffect(()=>{
        const filteredDataResponse = filteredData(props.grades,bigData,year,homeOwnership,term,quarter)
        const totalSum = sum(filteredDataResponse)
        setAggregate(totalSum)
    },[props])
    
    return (
        <table className={classes.tableStyles} id="tableView-test-id">
            <thead>
                <tr>
                {props.grades.map((grade) => <th key={grade} className={classes.tableStyles}>Grade {grade}</th>) }
                </tr>
            </thead>
            <tbody>
                <tr className={classes.tableStyles}>
                    {
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

