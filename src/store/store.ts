import {configureStore} from "@reduxjs/toolkit";
import customerSlice from "./slice/CustomerSlice.ts";


const store =
    configureStore({
    reducer: {
        customer : customerSlice,

    }
})

export default store;