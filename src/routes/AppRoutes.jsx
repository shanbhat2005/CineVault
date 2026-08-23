import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Register from '../features/auth/pages/RegisterPage'
import Login from '../features/auth/pages/LoginPage'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import MainLayout from "../layout/MainLayout"
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import HomePage from '../features/home/pages/HomePage'

const AppRoutes = () => {

const dispatch= useDispatch()
    const rehydrateUser=()=>{
        const isLoggedIn= JSON.parse(localStorage.getItem("isLoggedIn"))

        if(isLoggedIn){
            const user = JSON.parse(localStorage.getItem("loggedInUser"))
            if(user){
                dispatch(setUser(user))
            }
        }
    }

    useEffect(()=>{
rehydrateUser()
    },[])

const router = createBrowserRouter([
    {
        path:"/",
        element:<PublicRoutes/>,
        children:[
            {
                path:"",
                element:<AuthLayout/>,
                  children:[
            {
                path:"",
                element:<Login/>,
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
            }
        ]
      
    },
    {
        path:"/home",
        element:<ProtectedRoutes/>,
        children:[
            {
                path:"",
                element:<MainLayout/>,
                 children:[
            {
                path:"",
                element:<HomePage/>
            }
        ]
            }
        ]
       
    }
])

  return <RouterProvider  router={router} />
}

export default AppRoutes
