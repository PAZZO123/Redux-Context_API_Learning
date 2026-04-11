import { createSlice } from "@reduxjs/toolkit";
//allows you to create reducer in very easy way
const initialValue=""
export const themeSlice=createSlice({
    name:'theme',
    initialState:{value:initialValue},
    reducers:{
        changeColor:(state, action)=>{
            state.value=action.payload
        },
     
    }
    
})

export default themeSlice.reducer;
export const {changeColor} = themeSlice.actions
