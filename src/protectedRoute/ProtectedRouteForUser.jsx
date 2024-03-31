import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRouteForUser({ children }) {
    const user = JSON.parse(localStorage.getItem("user"))
    
    
    if (user && user.role === "user") {
        return  children 
    } else {
        return <Navigate to={'/login'} />
    }

    return (
        <div>

        </div>
    )
}

export default ProtectedRouteForUser
