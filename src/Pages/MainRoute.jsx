import React from 'react'
import  { Route, Routes } from "react-router-dom"
import LandingPage from './LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import SignUpPage from './SignUpPage.jsx/SignUpPage'
import Chrome from "./Chrome"
import Android from "./Android"
import Edge from "./Edge"
import Firefox from "./Firefox"
import Ios from './Ios'
import Linux from "./Linux"
import Mac from "./Mac"
import Window from "./Window"
import Downloding from "./Downloding"
import Features from "./Features"


const MainRoute = () => {
  return (
    <Routes>
        <Route path={'/'} Element={<LandingPage/> } />
        <Route path={'/login'} Element={<LoginPage/>} />
        <Route  path={'/signup'} Element={<SignUpPage/>} />
        <Route path='/chrome' element={<Chrome />} />
        <Route  path='/android' element={<Android/>} />
        <Route path='/edge' element={<Edge/>} />
        <Route path='/firefox' element={<Firefox/>} />
        <Route path='/ios' element={<Ios/>} />
        <Route path='/linux' element={<Linux/>} />
        <Route path='/window' element={<Window/>} />
        <Route path='/mac' element={<Mac/>} />
        <Route path='features' element={<Features/>} />
        <Route path='downloding' element={<Downloding/>} />



    </Routes>
  )
}

export default MainRoute