import { createSlice } from '@reduxjs/toolkit'

export const changeCriteriaReducer = createSlice({
  name: 'criteria',
  initialState: {
      year: '',
    quarter: '',
    homeOwnership: '',
    term: '',
    bigData: [],
    resetFlag: true
  },
  reducers: {
    changeYear: (state, action) => {
      state.year = action.payload
      state.resetFlag = false
    },
    changeQuarter: (state, action) => {
      state.quarter = action.payload
      state.resetFlag = false
    },
    changeHomeOwnership: (state, action) => {
      state.homeOwnership = action.payload
      state.resetFlag = false
    },
    changeTerm: (state, action) => {
      state.term = action.payload
      state.resetFlag = false
    },
    changeCriteria: (state, action) => {
      state.criteria ={ ...state.criteria, ...action.payload}
      state.resetFlag = false
    },
    setData: (state, action) => {
      state.bigData = action.payload
      state.resetFlag = false
    },
    reset: (state, action) => {
      state.year = ''
      state.quarter = ''
      state.homeOwnership = ''
      state.term =''
      state.bigData = []
      state.resetFlag = action.payload
    }
  },
})

export const { changeCriteria, setData, changeYear, changeHomeOwnership, changeQuarter, changeTerm, reset } = changeCriteriaReducer.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCriteria = (state) => state.criteria
// export const selectData = (state) => state.bigData


export default changeCriteriaReducer.reducer
