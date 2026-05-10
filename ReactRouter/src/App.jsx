import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App