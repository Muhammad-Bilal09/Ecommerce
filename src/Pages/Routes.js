import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// Component
import Header from "../Components/Header"
import Footer from "../Components/Footer"
// Pages
import Shop from './Shop/index'
import Men from './Men/index'
import Woman from './Women/index'
import Kids from './Kids/index'
import Login from '../Auth/Login'
import Register from '../Auth/register'
import Basket from './Basket/basket'
export default function CustomRoutes() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/woman' element={<Woman/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/basket' element={<Basket/>}/>
    </Routes>
    </main>
  <Footer/>
    </BrowserRouter>
    </>
  )
}
