import Papa from 'papaparse'
import rawData from './loansize.csv'

const parseData = (result, rawData) => {
  result.data.splice(0, 1)

  const { data } = result
  for (let i = 0; i < data.length-1; i += 1) {
    const year = data[i][0]
    const quarter = data[i][1]
    const grade = data[i][2]
    const homeOwnership = data[i][3]
    const term = data[i][4]
    const currentBalance = data[i][5]
    rawData.push({
      year,
      quarter,
      grade,
      homeOwnership,
      term,
      currentBalance,
    })
  }

  return rawData
}

export const getData = async () => {
  const csvData = await fetch(rawData).then((response) => {
    return response.text()
  })
  const data = []
  await Papa.parse(csvData, {
    complete: (result) => parseData(result, data),
  })

  return data
}
