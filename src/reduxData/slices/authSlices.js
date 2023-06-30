import { createSlice } from '@reduxjs/toolkit'
export const authSlices = createSlice({
    name: "auth",
    initialState: {
        token : {}
    },
    reducers: {
      authToken: (state, action) => {
        state.token = action.payload;
        console.log("=======",state.token)
      }
    }
   });

export const { authToken} = authSlices.actions

export default authSlices.reducer