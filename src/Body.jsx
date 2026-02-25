import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <NavBar/>      {/*//every page will contain navbar*/}
        <div className="flex-grow">
          <Outlet/>     {/*//any children of body will render over here*/}
        </div>
        <Footer/>
    </div>
  )
}
