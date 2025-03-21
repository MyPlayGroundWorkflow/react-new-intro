import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addCustomer} from "../store/slice/CustomerSlice.ts";

const CustomerForm = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch();

    const handleAddCustomer = () => {
        const newCustomer = {
            id: Date.now(),
            name: name
        }

        dispatch(addCustomer(newCustomer))
        setName("")
    }

    return (
        <div>
            <h2>Add Customer</h2>

            <input
                type="text"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleAddCustomer}>Add Customer</button>
        </div>
    )
}

export default CustomerForm