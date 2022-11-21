import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../api/userAPI'

const UserRoute = () => {
  return (
    isAuthenticated() && isAuthenticated().user.role===0 ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default UserRoute