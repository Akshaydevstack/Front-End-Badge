import React from 'react'
import NavBar from '../Component/NavBar'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}
