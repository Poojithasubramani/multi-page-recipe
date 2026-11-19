import React from 'react'
import {  NavLink } from 'react-router'
import '../../styles/Navbar.css'

export default function Navbar() {
  return (
    <>
        <header className='tb-navbar sticky-top'>
            <nav className='container-fluid d-flex justify-content-between align-items-center'>
                {/* Logo Section */}
               <NavLink to="/" className='brand-logo d-flex align-items-center'>
                    <div className='brand-icon'>
                        <i className='bi bi-egg-fried'></i>
                    </div>
                    <div className='brand-text'>
                        <h2>Tasty<span>Bites</span></h2>
                        <small>Good Food . Good Mood</small>
                    </div>
                </NavLink> 

                {/* Menu Section */}
                <div className='nav-menu d-flex '>
                    
                    <NavLink to="/" end className={({isActive})=>isActive?'nav-item active':"nav-item"}>
                        <i className='bi bi-house-fill'></i>
                        Home
                    </NavLink>
                    <NavLink to="/recipes" className={({isActive})=>isActive?'nav-item active':"nav-item"}>
                        <i className='bi bi-cup-hot-fill'></i>
                        Recipe
                    </NavLink>
                    <NavLink to="/favorites" className={({isActive})=>isActive?'nav-item active':"nav-item"}>
                        <i className='bi bi-heart-fill'></i>
                        Favorites
                    </NavLink>
                   
                    
                </div>

            </nav>
        </header>
    </>
  )
}
