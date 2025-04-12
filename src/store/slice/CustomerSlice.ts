import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export interface Customer {
    id: string;
    name: string;
    email: string;
    telephone: string;
}

const BASE_URL = 'http://localhost:3000/customers'

interface CustomerState {
    customers: Customer[];
}

const initialState: CustomerState = {
    customers: []
};


export const fetchCustomers = createAsyncThunk(
    'customer/fetchCustomers',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch customers');
        }
});

export const addCustomer = createAsyncThunk(
    'customer/addCustomer',
    async (customer: Omit<Customer, 'id'>, {rejectWithValue}) => {
        try {
            const response = await axios.post(BASE_URL, customer);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to add customer');
        }
})

export const updateCustomer = createAsyncThunk(
    'customer/updateCustomer',
    async (customer: Customer, {rejectWithValue}) => {
        try {
            const response = await axios.put(`${BASE_URL}/${customer.id}`, customer);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to update customer');
        }
})

export const deleteCustomer = createAsyncThunk(
    'customer/deleteCustomer',
    async (id: string, {rejectWithValue}) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
            return id
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to delete customer');
        }
})

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomers.pending, (state) => {
                console.log('Pending')
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.customers = action.payload;
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                console.log("rejected")
            })
            .addCase(addCustomer.fulfilled, (state, action) => {
                state.customers.push(action.payload)
            })
            .addCase(updateCustomer.fulfilled, (state, action) => {
                const index = state.customers.findIndex((customer) => customer.id === action.payload.id);
                if (index !== -1) {
                    state.customers[index] = action.payload;
                }
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.customers = state.customers.filter((customer) => customer.id !== action.payload)
            })
    }
})

export default customerSlice.reducer