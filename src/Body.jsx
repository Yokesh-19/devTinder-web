import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>     //any children of body will render over here
    </div>
  )
}
