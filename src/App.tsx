import React from 'react'
import './App.css'
import DashboardLayout from "./components/layouts/DashboardLayout.tsx";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Customers from "./pages/Customers.tsx";
function App() {

    return (
            <Router>
                <Routes>
                    <Route element={<DashboardLayout />}>
                        <Route path="/" element={<DashboardLayout />} />
                        <Route path="/customers" element={<Customers />} />
                    </Route>
                </Routes>
            </Router>
    )
}

export default App
