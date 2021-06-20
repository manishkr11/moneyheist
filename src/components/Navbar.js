import React from 'react'
import mask from "../pictures/mask.jpg"

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="/">
                <img src={mask} alt="logo" style={{width:"40px"}}/>
            </a>
    
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/css">Css</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/carrer">Carrer</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar
