import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: null,
    },
    
    reducers:{
        getuser: (state, action) => {
            state.userDetails = action.payload;
        
        },
        logout:(state) => {
            state.userDetails = null
        
        },
    },
});

export const { getuser,logout } = userSlice.actions;


export default userSlice.reducer;