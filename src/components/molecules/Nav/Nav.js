


import React from 'react'
import { Routes, NavLink, Router } from 'react-router-dom';
import '../Nav/Nav.css'
import Search from '../SearchForm/Search';
import Cart from '../CartForm/Cart';



const Nav = () => {



    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-sm navbar-light text-white">
                <div className="container-fluid">


                    <div className="collapse navbar-collapse text-white">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <NavLink className="nav-link active" to="#">Women</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="#">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">Category</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to="#" aria-disabled="true">Shopping</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto">
                            <li>
                                <h3 style={{ fontFamily: 'Courier New' }}>EVERLANE</h3>
                            </li>
                        </ul>





                        <ul className="navbar-nav">
                            <Search></Search>
                        </ul>
                        <ul className="navbar-nav">
                            <Cart></Cart>
                        </ul>




                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Log in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
    )


}

export default Nav