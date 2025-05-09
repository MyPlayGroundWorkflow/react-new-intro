import React from 'react'
import './App.css'
import DashboardLayout from "./components/layouts/DashboardLayout.tsx";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Customers from "./pages/Customers.tsx";
import Items from "./pages/Items.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Signup from "./pages/auth/Signup.tsx";
import Login from "./pages/auth/Login.tsx";
import OrderDetails from "./pages/OrderDetails.tsx";
import Orders from "./pages/Orders.tsx";
import { RootState } from './store/store.ts';
import { useSelector } from 'react-redux';
function App() {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
            <Router>
                <Routes>
                    <Route path="/login" element={ isAuthenticated ? <Navigate to="/" /> : <Login />} />
                    <Route path="/signup" element={ isAuthenticated ? <Navigate to="/" /> : <Signup />} />
                    <Route element={<DashboardLayout />}>
                        <Route path="/" element={ isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                        <Route path="/customers" element={ isAuthenticated ? <Customers /> : <Navigate to="/login" />} />
                        <Route path="/items" element={ isAuthenticated ? <Items /> : <Navigate to="/login" />} />
                        <Route path="/orders" element={ isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
                        <Route path="/order-details" element={ isAuthenticated ? <OrderDetails /> : <Navigate to="/login" />} />
                    </Route>
                </Routes>
            </Router>
    )
}

export default App
