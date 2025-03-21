import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeCustomer} from "../store/slice/CustomerSlice.ts";

const CustomerList = () => {
    const customers = useSelector((state) => state.customer.customers)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name}
                        <button className="ml-10"
                                onClick={() => dispatch(removeCustomer(customer.id))}
                        >Remove
                        </button>
                    </li>
                ))
                }
            </ul>

        </div>
    )
}

export default CustomerList