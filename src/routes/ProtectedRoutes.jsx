import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {

     const isLoggedIn= useSelector((store)=>store.auth.isLoggedIn)
  
     if(!isLoggedIn){
        return <Navigate to={"/"} />
     }
     return <Outlet/>
}

export default ProtectedRoutes
