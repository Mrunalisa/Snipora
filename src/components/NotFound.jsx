import React from 'react'
import { Outlet } from "react-router"
const NotFound = () => {
  return (
    <div>
        <div>404 Page Not Found</div>
    <Outlet />
    </div>
  )
}

export default NotFound