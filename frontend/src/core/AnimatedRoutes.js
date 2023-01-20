import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import Profile from '../pages/users/Profile'
import Login from '../pages/users/Login'
import Logout from '../pages/users/Logout'
import Register from '../pages/users/Register'
import Header from '../layers/Header'
import Footer from '../layers/Footer'
import Menu from '../pages/menu/Menu'
import { AnimatePresence } from 'framer-motion'
import Order from '../pages/orders/Order'
import Dashboard from '../pages/admin/Dashboard'
import AdmOrders from '../pages/admin/AdmOrders'
import Clients from '../pages/admin/Clients'


const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Header />
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/commande" element={<Order />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/logout" element={<Logout />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/recap" element="" />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/administrateur/clients" element={<Clients />} />
                <Route exact path="/administrateur/commandes" element={<AdmOrders />} />
                <Route exact path="/administrateur/profile" element="" />
            </Routes>
            <Footer />
        </AnimatePresence>
    )
}

export default AnimatedRoutes