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

export const { setData, changeYear, changeHomeOwnership, changeQuarter, changeTerm, reset } = changeCriteriaReducer.actions

export default changeCriteriaReducer.reducer
