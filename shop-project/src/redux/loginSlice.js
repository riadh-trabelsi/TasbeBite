import axios from "axios";
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const login = createAsyncThunk("login/signin", async (e) => {try{
    const result = await axios.get("http://localhost:7000/auth/get/getme");
 return result.data}
 catch (error){console.log(error)}
  
  });  


  export const loginSlice = createSlice({
    
  })