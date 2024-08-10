"use client"

import React from 'react'

const Login = () => {
    return (
        <div>
            Login
            <br />
            <button onClick={() => localStorage.setItem("user", "user")}>Login</button>
            <br />
            <button onClick={() => localStorage.removeItem("user")}>Logout</button>
        </div>
    )
}

export default Login
