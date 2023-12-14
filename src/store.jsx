import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import todoReducer from './redux/todoSlice'
import calculatorReducer from './redux/calculatorSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    calculator: calculatorReducer,
  },
})