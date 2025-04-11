import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchCustomers} from "../store/slice/CustomerSlice.ts";

const CustomerForm = () => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        dispatch(fetchCustomers() as any)
    }


    return (
        <div>
            <button onClick={handleClick}>Fetch Customers</button>
        </div>
    )
}

export default CustomerForm