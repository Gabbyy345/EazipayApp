import React from 'react'
import './index.css'
import Navbar from './component/Navbar/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Hero from './component/Hero/Hero'

const App = () => {
  return (
    <div>
      <Routes>
      <Route element={<Navbar/>} path='/'/>
      </Routes>
      <Hero/>
  
    </div>
  )
}

export default App

