import React from 'react'
import Header from './webcomponents/Header'
import Footer from './webcomponents/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from "./webcomponents/innercomponets/Home"
import Bookingpage from './webcomponents/innercomponets/Bookingpage'
const App = () => {
  return (
    <div className='w-full h-full relative '>
      <Header />
      <Routes>

        <Route element={<Home/>} path='/'></Route>
        <Route element={<Bookingpage/>} path='/booking'></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App