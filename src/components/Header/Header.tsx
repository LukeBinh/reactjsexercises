import React from 'react'
import './header.css'

import { Outlet, Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='header-bar container'>
        <ul className='header-bar-menu'>
            <li className="header-bar-item">
                <Link to="/ex1">Exercise 1</Link>
            </li>
            <li  className="header-bar-item">
                <Link to="/ex2">Exercise 2</Link>
            </li>
            <li className="header-bar-item">
                <Link to="/ex3">Exercise 3</Link>
            </li>
            <li className="header-bar-item">
                <Link to="/ex4">Exercise 4</Link>
            </li>
            <li className="header-bar-item">
                <Link to="/ex5">Exercise 5</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Header