import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchRestaurant =createAsyncThunk('resturantlist/fetchResturant',()=>{
    //api call
  const result =  axios.get('/restaurant.json').then(response=>response.data.restaurants)
  console.log(result);
  return result
})



const resturantSlice = createSlice({
    name:'resturantList',
    initialState:{
        loading:false, //pending state
        allrestaurant : [],//resolve state
        error:"" //reject state

    },
    extraReducers:(builder)=>{
        //builder to value/response from thunk
        builder.addCase(fetchRestaurant.pending,(state)=>{
           state.loading=true
        })
         //builder to value/response from thunk
         builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false
            state.allrestaurant= action.payload
            state.searchRestaurant=action.payload
            state.error =""
         })
         builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading=false
            state.allrestaurant =""
            state.error = action.error.message
         })
    },

    reducers:{
      search:(state,action)=>{
       state.allrestaurant = state.allrestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
      }
    }
})
export const {search} = resturantSlice.actions
export default resturantSlice.reducer