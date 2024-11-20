import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comand: {
      left: 0,
      right: 0,
      up: 0,
      down: 0,
      take: 0,
      join: 0
    }
  }

export const Comand = createSlice({
  name: 'side',
  initialState,
  reducers: {
    left: (state,action) => {
        let leftside = 0
        action.payload.forEach(value => {
            if (value == "L") {
                leftside ++
            }
        })
        state.comand.left = leftside
    },
    right: (state, action) =>{
        let rightside = 0
        action.payload.forEach(value =>{
            if (value == "R") {
                rightside ++
            }
        })
        state.comand.right = rightside
    },
    up: (state, action) =>{
        let upside = 0
        action.payload.forEach(value =>{
            if (value == "U") {
                upside ++
            }
        })
        state.comand.up = upside
    },
    down: (state, action) =>{
        let downside = 0
        action.payload.forEach(value =>{
            if (value == "D") {
                downside ++
            }
        })
        state.comand.down = downside
    },
    take: (state, action) =>{
        let takes = 0
        action.payload.forEach(value =>{
            if (value == "O") {
                takes ++
            }
        })
        state.comand.take = takes
    },
    join: (state, action) =>{
        let joines = 0
        action.payload.forEach(value =>{
            if (value == "B") {
                joines ++
            }
        })
        state.comand.join = joines
    }
}
})


export const { left, right, up, down, take, join } = Comand.actions

export default Comand.reducer