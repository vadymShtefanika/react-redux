import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { slice } from './slice'

const rootReducer = combineReducers({
  root: slice.reducer,
})

export const store = configureStore({
    reducer: rootReducer
})
