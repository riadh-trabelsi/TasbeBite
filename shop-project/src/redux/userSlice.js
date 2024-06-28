import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getUser = createAsyncThunk("user", async (token) => {
  try {
    const userReq = await axios.get("http://localhost:7000/auth/get/getme",{
      headers: {Authorization: 'Bearer ' + token}
    } );
    return userReq.data
  } catch (error) {
    console.log(error);
    return userReq;
  }
});

const initialState ={
  user : "login",
  initialState: {me:null},
  error : null
}
 const userSlice = createSlice({
    name : "login",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
      builder
      .addCase(getUser.fulfilled,(state,action)=>{
        state.me = action.payload
        
      })
    }
})

export default userSlice.reducer;