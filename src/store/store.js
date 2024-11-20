import { configureStore } from '@reduxjs/toolkit'
import Comand from './Comand'

export const store = configureStore({
  reducer: {
    comand: Comand
  },
})
