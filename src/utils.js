export const  matchCriteria = (row, year,homeOwnership,term,quarter) => { 
    return  (row.year === year && row.homeOwnership === homeOwnership && row.term === term && row.quarter === quarter)
}
export const filteredData =(grades,data,year,homeOwnership,term,quarter) => {
    return grades.map((grade) => {
        return  data?.filter(row => (matchCriteria(row,year,homeOwnership,term,quarter)) && row.grade === grade)
    })
} 
export const sum = (filteredData) => {
    return filteredData?.map((filterData) => {
        return filterData?.reduce((previosValue, currentValue)=>{return previosValue + Number(currentValue.currentBalance)}, Number(0))
    })
}