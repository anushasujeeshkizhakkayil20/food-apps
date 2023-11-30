import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "../redux/resturantSlice";


const store =configureStore({
    reducer:{
        restaurantSlice
    }
})
 export default store