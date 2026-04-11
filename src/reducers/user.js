import { createSlice } from "@reduxjs/toolkit";
//allows you to create reducer in very easy way
const initialValue={name:"", age:0, email:""}
export const userSlice=createSlice({
    name:'user',
    initialState:{value:initialValue},
    reducers:{
        login:(state, action)=>{
            state.value=action.payload
        },
        logout:(state)=>{
            state.value=initialValue
        }
    }
    
})

export default userSlice.reducer;
export const {logout, login} = userSlice.actions
