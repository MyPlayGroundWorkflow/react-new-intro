import React from 'react'
import './App.css'
import DashboardLayout from "./components/layouts/DashboardLayout.tsx";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Customers from "./pages/Customers.tsx";
import Items from "./pages/Items.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Signup from "./pages/auth/Signup.tsx";
import Login from "./pages/auth/Login.tsx";
import OrderDetails from "./pages/OrderDetails.tsx";
import Orders from "./pages/Orders.tsx";
function App() {

    return (
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<DashboardLayout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/items" element={<Items />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/order-details" element={<OrderDetails />} />
                    </Route>
                </Routes>
            </Router>
    )
}

export default App
