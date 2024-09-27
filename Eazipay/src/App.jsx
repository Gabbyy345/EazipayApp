import React from 'react'
import './index.css'
import Navbar from './component/Navbar/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Hero from './component/Hero/Hero'
import Page from './component/Individual page/Page'

const App = () => {
  return (
    <div>
      <Routes>
      <Route element={<Navbar/>} path='/'/>
      </Routes>
      <Hero/>
      <Page />
  
    </div>
  )
}

export default App

