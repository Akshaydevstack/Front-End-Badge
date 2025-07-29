import React from 'react'
import NavBar from '../component/NavBar'
import {Outlet}from'react-router-dom'
export default function UserLayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}
