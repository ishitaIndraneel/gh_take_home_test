import React , { useEffect, useCallback, useState}from 'react';
import {getData} from '../../request/api'
import {useSelector, useDispatch} from 'react-redux'
import { changeYear, changeHomeOwnership, changeQuarter, changeTerm, reset, setData} from './reducer'
import {TableView, DropdownComp, AggregateBarChart} from '../../components/index'
import { Grid } from '@material-ui/core';



const AggregateComp = (props)=> {

    const year = useSelector((state) => state.criteria.year)
    const quarter = useSelector((state) => state.criteria.quarter)
    const homeOwnership = useSelector((state) => state.criteria.homeOwnership)
    const term = useSelector((state) => state.criteria.term)
    const bigData = useSelector((state) => state.criteria.bigData) 
    const resetFlag = useSelector((state) => state.criteria.resetFlag)
    const [resetlocalFlag,setResetlocalFlag] = useState(false)
    const dispatch = useDispatch()

    const getAllData = useCallback(async() => {
        const res = await getData()
        dispatch(setData(res))
    },[])
    useEffect(() => {
        async function fetchData() {
            await getAllData()
        }
        resetFlag && fetchData()
    },[resetlocalFlag])

    const allYears = [...new Set(bigData?.map((elem) => elem.year))].sort()
    const allHomeOwn = [...new Set(bigData?.map((elem) => elem.homeOwnership))].sort()
    const allQuaters = [...new Set(bigData?.map((elem) => elem.quarter))].sort()
    const allTerms = [...new Set(bigData?.map((elem) => elem.term))].sort()
    const allGrades = [...new Set(bigData?.map((elem) => elem.grade))].sort()
 
    const handleReset = () => {
        setResetlocalFlag(!resetlocalFlag)
        dispatch(reset(true)) // Dispatch the reset action
      }
    
    return (
        <Grid container spacing= {5}>
            <Grid item lg={12} >
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                    <TableView year={year} homeOwnership={homeOwnership} term={term} quarter={quarter} bigData={bigData} grades={allGrades}></TableView>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={12}>
                <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
                    <Grid item lg={1}><DropdownComp label="Home Ownership"  value={homeOwnership} options={allHomeOwn} uponSelection={changeHomeOwnership}></DropdownComp></Grid>
                    <Grid item lg={1}><DropdownComp label="Quarter"  value={quarter} options={allQuaters} uponSelection={changeQuarter}></DropdownComp></Grid>
                    <Grid item lg={1}><DropdownComp label="Term"  value={term} options={allTerms} uponSelection={changeTerm}></DropdownComp></Grid>
                    <Grid item lg={1}><DropdownComp label="Year"  value={year} options={allYears} uponSelection={changeYear}></DropdownComp></Grid>
                </Grid>
            </Grid>
            <Grid container  alignItems="center" justifyContent="center">
                <Grid item lg={12}>
                 <button onClick={handleReset}>RESET</button>
                </Grid>
            </Grid>
            <Grid container  alignItems="center" justifyContent="center">
                <Grid item lg={12}>
                <AggregateBarChart year={year} homeOwnership={homeOwnership} term={term} quarter={quarter} bigData={bigData} grades={allGrades}></AggregateBarChart>
                </Grid>
            
            </Grid>
        </Grid>
    )
}
export default AggregateComp