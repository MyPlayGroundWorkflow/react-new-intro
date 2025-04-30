import {configureStore} from "@reduxjs/toolkit";
import customerSlice from "./slice/CustomerSlice.ts";
import authSlice from "./slice/authSlice.ts";
import itemSlice from "./slice/ItemSlice.ts";
import cartSlice from "./slice/cartSlice.ts";
import orderSlice from "./slice/orderSlice.ts";


const store =
    configureStore({
    reducer: {
        auth: authSlice,
        customer : customerSlice,
        items: itemSlice,
        cart: cartSlice,
        orders: orderSlice
    }
})

export default store;
