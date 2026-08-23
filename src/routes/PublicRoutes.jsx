import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoutes = () => {


    const isLoggedIn= useSelector((store)=>store.auth.isLoggedIn)

    if(isLoggedIn){
        return <Navigate to={"/home"} />
    }
    
    return <Outlet/>
}

export default PublicRoutes
