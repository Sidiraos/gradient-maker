import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';


const initialState = {
    colors : [
        {
            id : uuidv4(),
            color : "#00D2FF",
            position : 20
        } ,
        {
            id : uuidv4(),
            color : "#EE9CA7",
            position : 50
        }
    ] ,
    globalDegree : 60,
}

 const gradientValues = createSlice({
    name : 'gradientValues',
    initialState,
    reducers : {
        addColor : (state , action) => {
            state.colors.push(action.payload)
        } ,
        removeColor : (state , action) => {
            state.colors.pop()
        },
        changeDegree : (state , action) => {
            state.globalDegree = Math.floor(action.payload * 360 / 100)
        } ,
        changePosition : (state , action) => {
            state.colors.find(color => color.id === action.payload.id).position = action.payload.position
        } ,
        handleChange : (state , action) => {
            state.colors.find(color => color.id === action.payload.id).color = action.payload.color
        }
    }
})

export default gradientValues.reducer
export const {addColor , removeColor , changeDegree , changePosition , handleChange} = gradientValues.actions