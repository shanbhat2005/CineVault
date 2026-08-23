import { createSlice } from "@reduxjs/toolkit";

const authSlice= createSlice({
    name:"auth",
    initialState:{
        currentUser:null,
        isLoggedIn:false
    },
    reducers:{
        setUser:(state,action)=>{
            state.currentUser=action.payload;
            state.isLoggedIn=true

        },
        logOut:(state)=>{
            state.currentUser=null;
            state.isLoggedIn=false;

        }
    }
})

export const {setUser,logOut}= authSlice.actions;
export default authSlice.reducer;