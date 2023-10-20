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
    },
});

export const { getuser } = userSlice.actions;

export default userSlice.reducer;