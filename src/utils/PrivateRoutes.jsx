import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

  return (
    localStorage.getItem("logs") ? (<Outlet/> ) : <Navigate to={"/login"} />

  )

}

export default PrivateRoutes