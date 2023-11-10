import { configureStore } from '@reduxjs/toolkit';
import criteriaReducer from '../features/aggregate/reducer';

export default configureStore({
  reducer: {
    criteria: criteriaReducer,
  },
});
